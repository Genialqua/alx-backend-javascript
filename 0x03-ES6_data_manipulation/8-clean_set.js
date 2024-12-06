export default function cleanSet(sett = new Set(), startString = '') {
  const clean = [];

  // Check if startString is empty
  if (startString === '') {
    return; // Do nothing if startString is empty
  }

  // Iterate over the set and collect elements
  sett.forEach((element) => {
    if (element.startsWith(startString)) {
      // Remove the startString and add the remainder to the clean array
      clean.push(element.slice(startString.length));
    }
  });

  // Join the elements with a hyphen and log the result
  console.log(clean.join('-'));
}
