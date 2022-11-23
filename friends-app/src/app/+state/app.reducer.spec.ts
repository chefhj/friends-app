import * as fromReducer from './app.reducer';
import * as fromActions from './app.actions';
import {initialFriends} from "../mockdata/initial-friends";

describe('Store > Data > DataReducer', () => {
  afterEach(() => {
    fromReducer.initialState.friendsList = initialFriends;
  });

  it('should update friendsList', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      payload: initialFriends.slice(1)
    };
    const action = fromActions.updateFriendList(payload);
    const state = fromReducer.appReducer(initialState, action);

    expect(state.friendsList).toEqual(payload?.payload);
  });
  it('should add friend to friendsList', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      payload: {name: 'John Johnson', age: 20, weight: 200, dob: Date.now() }
    };
    const action = fromActions.addFriend(payload);
    const state = fromReducer.appReducer(initialState, action);

    expect(state.friendsList).toEqual([... initialState.friendsList, payload?.payload]);
  });
});
