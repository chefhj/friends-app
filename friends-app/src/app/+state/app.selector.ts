import { createSelector, createFeatureSelector } from '@ngrx/store';
import {AppState} from "./app.reducer";


export const selectAppState = createFeatureSelector<AppState>('app');

export const selectFriendsList = createSelector(
  selectAppState,
  (state) => state?.friendsList
);
