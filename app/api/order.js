import request from './index';
import { AUTHENTICATION } from './api-url';

export const GET_ORDER_LIST = () =>
  request({
    method: 'GET',
    url: AUTHENTICATION.LOGIN(),
  });

export const POST_ORDER = data =>
  request({
    method: 'POST',
    url: AUTHENTICATION.LOGIN(),
    data,
  });
