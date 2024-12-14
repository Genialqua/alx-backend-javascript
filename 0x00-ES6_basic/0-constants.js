export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
<<<<<<< HEAD

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

=======

export function getLast() {
  return ' is okay';
}
  
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

>>>>>>> 49d974debc5e10746fe19d4bdbc0e741afe56f09
export default { taskFirst, getLast, taskNext };
