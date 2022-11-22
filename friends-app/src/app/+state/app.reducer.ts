import {Action, createReducer, on} from '@ngrx/store';
import {addFriend, deleteFriend, updateFriend} from "./app.actions";
import {Friend} from "../interaces/friend";
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
    on(updateFriend, (state, action): AppState => ({
      ...state,
    })),
  on(deleteFriend, (state, action): AppState => ({
...state,
  })),

);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
