import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  popups: {},
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.OPEN_POPUP:
        draft.popups[action.payload] = true;
        break;
      case ActionTypes.CLOSE_POPUP:
        draft.popups[action.payload] = false;
        break;
      case ActionTypes.RESET_POPUP:
        draft.popups = {};
        break;
    }
  });

export default reducer;
