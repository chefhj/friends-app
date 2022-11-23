import * as Actions from './app.actions';
import {initialFriends} from "../mockdata/initial-friends";

describe('Store > Actions', () => {
  it('SHOULD create a addFriend action', () => {
    const action = Actions.addFriend({payload: initialFriends[0]});
    expect(action.type).toEqual('Add new Friend');
  });
  it('SHOULD create a updateFriendList action', () => {
    const action = Actions.updateFriendList({payload: initialFriends});
    expect(action.type).toEqual('Update Friend List');
  });
  it('SHOULD create a SetData action containing a payload', () => {
    const action = Actions.updateFriendList({payload: initialFriends});

    expect({ ...action }).toEqual({
      type: 'Update Friend List',
      payload: initialFriends
    });
  });
});
