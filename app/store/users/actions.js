import get from 'lodash/get';
import * as userApi from 'api/user';
import * as ActionTypes from './constants';

export const fetchUserDetail = () => ({
  type: ActionTypes.FETCH_USER_DETAIL,
});

export const successFetchUserDetail = data => ({
  type: ActionTypes.SUCCESS_FETCH_USER_DETAIL,
  payload: data,
});

export const failedFetchUserDetail = error => ({
  type: ActionTypes.FAILED_FETCH_USER_DETAIL,
  payload: error,
});

export const fetchUsers = () => ({
  type: ActionTypes.FAILED_FETCH_USER,
});

export const successFetchUsers = data => ({
  type: ActionTypes.SUCCESS_FETCH_USER,
  payload: data,
});

export const failedFetchUsers = error => ({
  type: ActionTypes.FAILED_FETCH_USER,
  payload: error,
});

export const setUserSelected = data => ({
  type: ActionTypes.SET_USER_SELECTED,
  payload: data,
});

export const setKeyword = data => ({
  type: ActionTypes.SET_KEYWORD,
  payload: data,
});

export const getUserDetail = ({ page = 1, name = '' }) => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchUserDetail());
    try {
      const response = get(
        await userApi.GET_USER_DETAIL({ page, name }),
        'data.data',
      );
      dispatch(successFetchUserDetail(response));
      resolve(response);
    } catch (error) {
      dispatch(failedFetchUserDetail(error));
      reject(error);
    }
  });

export const getUsers = ({ page = 1, name = '' }) => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(fetchUsers());
    try {
      const response = get(
        await userApi.GET_USERS({ page, name }),
        'data.data',
      );
      const startNumber =
        response.pagination.page * response.pagination.per_page -
        response.pagination.per_page;
      const responseData = {
        pagination: response.pagination,
        users: response.users.map((item, index) => {
          const itemData = item;
          itemData.id = startNumber + index + 1;
          return itemData;
        }),
      };
      dispatch(successFetchUsers(responseData));
      resolve(response);
    } catch (error) {
      dispatch(failedFetchUsers(error));
      reject(error);
    }
  });
