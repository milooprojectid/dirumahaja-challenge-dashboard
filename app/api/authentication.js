import request from './index';
import { AUTHENTICATION } from './api-url';

export const LOGIN = (email, password) =>
  request({
    method: 'POST',
    url: AUTHENTICATION.LOGIN(),
    data: {
      username: email,
      password,
    },
  });

export const LOGOUT = () =>
  request({
    method: 'POST',
    url: AUTHENTICATION.LOGOUT(),
  }).catch(() => null);
