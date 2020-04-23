import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  order: {
    loading: false,
    loaded: false,
    data: [],
    error: '',
  },
  selected: {},
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_ORDERS:
        draft.order.loading = true;
        draft.order.loaded = false;
        draft.order.data = [];
        draft.order.error = '';
        break;
      case ActionTypes.SUCCESS_FETCH_ORDERS:
        draft.order.loading = false;
        draft.order.loaded = true;
        draft.order.data = action.payload;
        draft.order.error = '';
        break;
      case ActionTypes.FAILED_FETCH_ORDERS:
        draft.order.loading = false;
        draft.order.loaded = false;
        draft.order.data = [];
        draft.order.error = action.payload;
        break;
      case ActionTypes.FETCH_CREATE_ORDER:
        draft.order.data = [];
        break;
      case ActionTypes.SUCCESS_CREATE_ORDER:
        draft.order.data = action.payload;
        break;
      case ActionTypes.FAILED_CREATE_ORDER:
        draft.order.data = [];
        draft.order.error = action.payload;
        break;
      case ActionTypes.SET_SELECTED_ORDERS:
        draft.selected = action.payload;
        break;
    }
  });

export default reducer;
