import {createAction, props} from '@ngrx/store';

export const addFriend = createAction(
  'Add new Friend',
  props<{payload: any}> ()
);
export const updateFriendList = createAction(
  'Update Friend List',
  props<{payload: any}> ()
);
