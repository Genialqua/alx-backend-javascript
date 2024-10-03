import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  for (let i = 1; i < 4; i += 1) {
    rooms.push(new ClassRoom(i + 18));
    if (i === 3) {
      rooms.pop();
      rooms.push(new ClassRoom(i + 31));
    }
  }
  return rooms;
}
