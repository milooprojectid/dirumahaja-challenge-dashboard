import * as ActionTypes from './constants';

export const openPopupAction = data => ({
  type: ActionTypes.OPEN_POPUP,
  payload: data,
});

export const closePopupAction = data => ({
  type: ActionTypes.CLOSE_POPUP,
  payload: data,
});

export const resetPopupAction = () => ({
  type: ActionTypes.RESET_POPUP,
});
