import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  fetching: false,
  account: null,
  error: null,
  user: {},
  collapsed: true,
  userType: 'admin', // admin, user
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_ACCOUNT:
        draft.fetching = true;
        draft.account = null;
        draft.error = null;
        break;
      case ActionTypes.SUCCESS_FETCH_ACCOUNT:
        draft.fetching = false;
        draft.account = action.account;
        break;
      case ActionTypes.FAILED_FETCH_ACCOUNT:
        draft.fetching = false;
        draft.error = action.error;
        break;
      case ActionTypes.SET_COLLAPSED_MENUS:
        draft.collapsed = action.value;
    }
  });

export default reducer;
