export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter the list of students based on the provided city
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the new grade for the current student
      const gradeUpdate = newGrades.find((grade) => grade.studentId === student.id);

      // Return a new student object with the updated grade (or 'N/A' if no grade found)
      return {
        ...student,
        grade: gradeUpdate ? gradeUpdate.grade : 'N/A',
      };
    });
}
