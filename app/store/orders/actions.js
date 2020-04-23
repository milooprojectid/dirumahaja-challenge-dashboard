import get from 'lodash/get';
import * as orderApi from 'api/order';
import * as ActionTypes from './constants';

export const fetchOrdersAction = () => ({
  type: ActionTypes.FETCH_ORDERS,
});

export const successFetchOrdersAction = data => ({
  type: ActionTypes.SUCCESS_FETCH_ORDERS,
  payload: data,
});

export const failedFetchOrdersAction = error => ({
  type: ActionTypes.FAILED_FETCH_ORDERS,
  payload: error,
});

export const fetchCreateOrderAction = () => ({
  type: ActionTypes.FETCH_CREATE_ORDER,
});

export const successCreateOrderAction = data => ({
  type: ActionTypes.SUCCESS_CREATE_ORDER,
  payload: data,
});

export const failedCreateOrderAction = error => ({
  type: ActionTypes.FAILED_CREATE_ORDER,
  payload: error,
});

export const setSelectedOrderAction = data => ({
  type: ActionTypes.SET_SELECTED_ORDERS,
  payload: data,
});

export const createOrderAction = item => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchCreateOrderAction());
    try {
      const response = get(await orderApi.POST_ORDER(item), 'data.data');
      dispatch(successCreateOrderAction(response));
      resolve(response);
    } catch (error) {
      dispatch(failedCreateOrderAction(error));
      reject(error);
    }
  });

export const getOrdersAction = () => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchOrdersAction());
    try {
      const response = get(await orderApi.GET_ORDER_LIST(), 'data.data');
      dispatch(successFetchOrdersAction(response));
      resolve(response);
    } catch (error) {
      dispatch(failedFetchOrdersAction(error));
      reject(error);
    }
  });
