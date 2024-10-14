export default function hasValuesFromArray(sett = new Set(), arr = []) {
  return arr.every((value) => sett.has(value));
}
