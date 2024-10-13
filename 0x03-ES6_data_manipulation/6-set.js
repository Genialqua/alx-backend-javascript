export default function setFromArray(x) {
  if (!Array.isArray(x)) {
    throw new Error('Input must be an array');
  }

  if (x.length === 0) {
    throw new Error('Input array must not be empty');
  }

  const arrayToSet = new Set();
  for (let i = 0; i < x.length; i += 1) {
    arrayToSet.add(x[i]);
  }

  return arrayToSet;
}
