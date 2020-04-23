import * as ActionTypes from './constants';

export const fetchAccount = () => ({
  type: ActionTypes.FETCH_ACCOUNT,
});

export const successFetchAccount = account => ({
  type: ActionTypes.SUCCESS_FETCH_ACCOUNT,
  account,
});

export const failedFetchAccount = error => ({
  type: ActionTypes.FAILED_FETCH_ACCOUNT,
  error,
});

export const fetchAccountThunk = accountId => dispatch => {
  dispatch(fetchAccount());
  setTimeout(() => {
    dispatch(successFetchAccount(accountId));
  }, 2000);
};

export const setCollapsedMenu = value => ({
  type: ActionTypes.SET_COLLAPSED_MENUS,
  value,
});
