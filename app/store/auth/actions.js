import { push } from 'connected-react-router';
import get from 'lodash/get';
import * as authenticationApi from 'api/authentication';
import { notification } from 'antd';
import { HOME_PAGE } from 'configs/routes';
import * as Cookies from 'utils/cookies';
import * as ActionTypes from './constants';

export const tryLogin = (username = '', password = '') => ({
  type: ActionTypes.LOGIN,
  username,
  password,
});

export const loginSuccess = account => ({
  type: ActionTypes.LOGIN_SUCCESS,
  account,
});

export const loginFailed = error => ({
  type: ActionTypes.LOGIN_FAILED,
  error,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const fetchLogin = (username, password) => async dispatch => {
  dispatch(tryLogin(username, password));

  try {
    const account = get(
      await authenticationApi.LOGIN(username, password),
      'data.data',
    );

    Cookies.saveAccount(account);
    dispatch(loginSuccess(account));
  } catch (error) {
    dispatch(loginFailed(error));
    notification.error({
      placement: 'topLeft',
      message: 'Error',
      description: 'Username atau Password salah',
    });
  }
};

export const doLogout = () => async dispatch => {
  // await authenticationApi.LOGOUT();

  Cookies.removeAccount();
  dispatch(push(HOME_PAGE));
  dispatch(logout());
};
