export default function taskBlock(trueOrFalse) {
  const task = false,
   task2 = true;

  if (trueOrFalse) {
    const task = true,
     task2 = false;
  }

  return
    [
    task,
    task2
    ];
};
