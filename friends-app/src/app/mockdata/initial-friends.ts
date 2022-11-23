import {Friend} from "../interfaces/friend";
const bob: Friend = {
  name: 'Bobby Johnson',
  weight: 320,
  dob: new Date(1960, 6),
  age: new Date(Date.now())?.getFullYear() - new Date(1960, 6)?.getFullYear(),
  friends: [],
};
const joe: Friend = {
  name: 'Joe Johnson',
  weight: 230,
  dob: new Date(1990, 3),
  age: new Date(Date.now())?.getFullYear() - new Date(1990, 3)?.getFullYear(),
  friends: [bob,],
};
const mary: Friend = {
  name: 'Mary Johnson',
  weight: 200,
  dob: new Date(1986, 1),
  age: new Date(Date.now()).getFullYear() - new Date(1986, 1).getFullYear(),
  friends: [bob,joe],
};
const kim: Friend = {
  name: 'Kim Johnson',
  weight: 100,
  dob: new Date(2012, 4),
  age: new Date(Date.now())?.getFullYear() - new Date(2012, 4)?.getFullYear(),
  friends: [bob,joe],
};
export const initialFriends: Friend[] = [bob, joe, mary, kim];
