import get from 'lodash/get';
import * as statisticApi from 'api/statistic';
import * as ActionTypes from './constants';

export const fetchStaticData = () => ({
  type: ActionTypes.FETCH_STASTIC_DATA,
});

export const successStatisticData = data => ({
  type: ActionTypes.SUCCESS_STASTIC_DATA,
  payload: data,
});

export const failedStatisticData = () => ({
  type: ActionTypes.FAILED_STASTIC_DATA,
});

export const fetchMapsData = () => ({
  type: ActionTypes.FETCH_MAPS_DATA,
});

export const successMapsData = data => ({
  type: ActionTypes.SUCCESS_MAPS_DATA,
  payload: data,
});

export const failedMapsData = () => ({
  type: ActionTypes.FAILED_MAPS_DATA,
});

export const getDashboardListAction = () => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchStaticData());
    try {
      const response = get(
        await statisticApi.GET_STATISTIC_DATA(),
        'data.data',
      );
      dispatch(successStatisticData(response));
      resolve(response);
    } catch (error) {
      dispatch(failedStatisticData(error));
      reject(error);
    }
  });

export const getOrdersAction = () => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchMapsData());
    try {
      const response = get(await statisticApi.GET_MAPS_DATA(), 'data.data');
      dispatch(successMapsData(response));
      resolve(response);
    } catch (error) {
      dispatch(failedMapsData(error));
      reject(error);
    }
  });
