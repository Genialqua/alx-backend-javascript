export default function GetNeighborhoodsList() {
  const sanFranciscoNeighborhoods = [
    'SOMA',
    'Union Square',
  ];

  this.addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };
}
