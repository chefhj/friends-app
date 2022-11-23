import { createSelector } from '@ngrx/store';
import {AppState} from "./app.reducer";


export const selectAppState = (state: AppState) => state;
export const selectFriendsList = createSelector(
  selectAppState,
  (state) => state?.friendsList
);
