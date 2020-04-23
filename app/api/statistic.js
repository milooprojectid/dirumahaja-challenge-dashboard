import request from './index';
import { DASHBOARD } from './api-url';

export const GET_STATISTIC_DATA = () =>
  request({
    method: 'GET',
    url: DASHBOARD.INDEX(),
  });

export const GET_MAPS_DATA = () =>
  request({
    method: 'GET',
    url: DASHBOARD.MAPS(),
  });
