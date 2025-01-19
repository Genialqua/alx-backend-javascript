const fs = require('fs');
const path = require('path');

module.exports = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      if (data.trim().length > 0) {
        // Split file content into rows and process
        const rows = data.trim().split('\n');
        const headers = rows.shift().split(','); // Remove the header row
        const students = rows.map((row) => row.split(','));

        // Count total students
        console.log(`Number of students: ${students.length}`);

        // Group students by field
        const fieldIndex = headers.indexOf('field'); // Dynamically get the index of the "field" column
        const groupedByField = students.reduce((acc, student) => {
          const field = student[fieldIndex];
          if (!acc[field]) acc[field] = [];
          acc[field].push(student[0]); // Assuming the first column is the name (firstname)
          return acc;
        }, {});

        // Log students per field
        for (const [field, names] of Object.entries(groupedByField)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve(); // Resolve the promise after processing is done
      } else {
        reject(new Error('File is empty'));
      }
    });
  });
};
