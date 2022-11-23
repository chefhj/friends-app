import {AppState, initialState} from "./app.reducer";
import {selectFriendsList} from "./app.selector";

describe('Store > Selectors', () => {
  it('selectFriendsList', () => {
    const state: AppState = initialState;
    expect(selectFriendsList(state)).toBe(state.friendsList);
  });
});
