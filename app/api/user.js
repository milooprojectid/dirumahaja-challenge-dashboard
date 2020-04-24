import request from './index';
import { USERS } from './api-url';

export const GET_USERS = ({ page, name }) =>
  request({
    method: 'GET',
    url: USERS.INDEX({ page, name }),
  });

export const GET_USER_DETAIL = ({ id }) =>
  request({
    method: 'GET',
    url: USERS.DETAIL({ id }),
  });
