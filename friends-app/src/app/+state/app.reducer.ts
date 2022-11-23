import {Action, createReducer, on} from '@ngrx/store';
import {addFriend, updateFriendList} from "./app.actions";
import {Friend} from "../interfaces/friend";
import {initialFriends} from "../mockdata/initial-friends";
export interface AppState {
  friendsList: Friend[];
}
export const initialState: AppState = {
  friendsList: initialFriends,
};

const _appReducer = createReducer(initialState,
  on(addFriend, (state, action): AppState => ({
      ...state,
      friendsList: [...state?.friendsList, action.payload]
    })),
  on(updateFriendList, (state, action): AppState => ({
    ...state,
    friendsList: action.payload
  })),

);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
