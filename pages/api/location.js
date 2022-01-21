export default function getISSLocation() {
  return fetch('http://api.open-notify.org/iss-now.json')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}