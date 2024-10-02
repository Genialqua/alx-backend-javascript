export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Success! Data received from API.');
    } else {
      reject(new Error('Error! Unable to retrieve data from API.'));
    }
  });
}
