import {Friend} from "../interaces/friend";
const bob: Friend = {
  name: 'Bobby Johnson',
  weight: 320,
  age: 32,
  friends: [],
};
const joe: Friend = {
  name: 'Joe Johnson',
  weight: 230,
  age: 23,
  friends: [bob,],
};
const mary: Friend = {
  name: 'Mary Johnson',
  weight: 200,
  age: 60,
  friends: [bob,joe],
};
const kim: Friend = {
  name: 'Kim Johnson',
  weight: 100,
  age: 100,
  friends: [bob,joe],
};
export const initialFriends: Friend[] = [bob, joe, mary, kim];
