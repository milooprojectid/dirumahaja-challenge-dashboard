import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  statistic: {
    loading: false,
    loaded: false,
    data: {},
    error: '',
  },
  maps: {
    loading: false,
    loaded: false,
    data: [],
    error: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_STASTIC_DATA:
        draft.statistic.loading = true;
        draft.statistic.loaded = false;
        draft.statistic.data = [];
        draft.statistic.error = '';
        break;
      case ActionTypes.SUCCESS_STASTIC_DATA:
        draft.statistic.loading = false;
        draft.statistic.loaded = true;
        draft.statistic.data = action.payload;
        draft.statistic.error = '';
        break;
      case ActionTypes.FAILED_STASTIC_DATA:
        draft.statistic.loading = false;
        draft.statistic.loaded = false;
        draft.statistic.data = [];
        draft.statistic.error = '';
        break;
      case ActionTypes.FETCH_MAPS_DATA:
        draft.maps.loading = true;
        draft.maps.loaded = false;
        draft.maps.data = [];
        draft.maps.error = '';
        break;
      case ActionTypes.SUCCESS_MAPS_DATA:
        draft.maps.loading = false;
        draft.maps.loaded = true;
        draft.maps.data = action.payload;
        draft.maps.error = '';
        break;
      case ActionTypes.FAILED_MAPS_DATA:
        draft.maps.loading = false;
        draft.maps.loaded = false;
        draft.maps.data = [];
        draft.maps.error = '';
        break;
    }
  });

export default reducer;
