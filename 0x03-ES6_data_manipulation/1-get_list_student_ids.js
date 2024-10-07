export default function getListStudentIds(arr) {
  // Create a variable to store the Id's
  let studentIds = [];
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return [];
  }
  // Go through each of the objects and copy the id property of each object
  studentIds = arr.map((student) => student.id);

  // Push the copied id to the new array then return

  return studentIds;
}
