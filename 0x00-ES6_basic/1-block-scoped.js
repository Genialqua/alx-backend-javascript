export default function taskBlock(trueOrFalse) {
  let task = false,
   task2 = true;

  if (trueOrFalse) {
     task = true;
     task2 = false;
  }

  return [
task,
task2
];
}