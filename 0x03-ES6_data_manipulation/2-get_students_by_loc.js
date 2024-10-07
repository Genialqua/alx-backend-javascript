export default function getStudentsByLocation(studentlist, location) {
  // Create a variable to store the students in a particular location
  let studentsInThisCity = [];
  // Fileter the list of students
  studentsInThisCity = studentlist.filter((student) => student.location === location);
  return studentsInThisCity;
}
