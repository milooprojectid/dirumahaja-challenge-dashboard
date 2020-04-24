import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  users: {
    loading: false,
    loaded: false,
    data: [],
    error: '',
  },
  detail: {
    loading: false,
    loaded: false,
    data: {},
    error: '',
  },
  keyword: '',
  selected: {},
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_USER:
        draft.users.loading = true;
        draft.users.loaded = false;
        draft.users.data = [];
        draft.users.error = '';
        break;
      case ActionTypes.SUCCESS_FETCH_USER:
        draft.users.loading = false;
        draft.users.loaded = true;
        draft.users.data = action.payload;
        draft.users.error = '';
        break;
      case ActionTypes.FAILED_FETCH_USER:
        draft.users.loading = false;
        draft.users.loaded = false;
        draft.users.data = [];
        draft.users.error = action.payload;
        break;
      case ActionTypes.FETCH_USER_DETAIL:
        draft.detail.loading = true;
        draft.detail.loaded = false;
        draft.detail.data = {};
        draft.detail.error = '';
        break;
      case ActionTypes.SUCCESS_FETCH_USER_DETAIL:
        draft.detail.loading = false;
        draft.detail.loaded = true;
        draft.detail.data = action.payload;
        draft.detail.error = '';
        break;
      case ActionTypes.FAILED_FETCH_USER_DETAIL:
        draft.detail.loading = false;
        draft.detail.loaded = false;
        draft.detail.data = {};
        draft.detail.error = action.payload;
        break;
      case ActionTypes.SET_USER_SELECTED:
        draft.selected = action.payload;
        break;
      case ActionTypes.SET_KEYWORD:
        draft.keyword = action.payload;
        break;
    }
  });

export default reducer;
