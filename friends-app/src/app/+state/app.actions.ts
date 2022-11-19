import {createAction, props} from '@ngrx/store';

export const addFriend = createAction(
  'Add new Friend',
  props<{payload: any}> ()
);
export const updateFriend = createAction(
  'Update Friend',
  props<{payload: any}> ()
);
export const deleteFriend = createAction(
  'Delete Friend',
  props<{payload: any}> ()
);
