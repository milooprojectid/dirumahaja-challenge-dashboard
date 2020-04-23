import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  account: null,
  error: null,
  fetching: false,
  loggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        draft.fetching = true;
        draft.account = null;
        draft.error = null;
        draft.loggedIn = false;
        break;
      case ActionTypes.LOGIN_SUCCESS:
        draft.fetching = false;
        draft.loggedIn = true;
        draft.account = action.account;
        break;
      case ActionTypes.LOGIN_FAILED:
        draft.fetching = false;
        draft.loggedIn = false;
        draft.error = action.error;
        break;
      case ActionTypes.LOGOUT:
        return initialState;
    }

    return draft;
  });

export default reducer;
