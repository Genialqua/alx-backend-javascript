export default function getStudentIdsSum(studentlist) {
  const initialValue = 0;
  // Use the reduce method to add up the id's
  const totalIdSum = studentlist.reduce((accumulator,
    currentValue) => accumulator + currentValue.id, initialValue);
  return totalIdSum;
}
