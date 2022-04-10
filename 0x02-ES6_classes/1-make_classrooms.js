import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const x1 = new ClassRoom(19);
  const x2 = new ClassRoom(20);
  const x3 = new ClassRoom(34);
  return [x1, x2, x3];
}
