import axios from 'axios';
import { get, merge } from 'lodash';
import { getToken, removeAccount } from 'utils/cookies';

let axiosInstance = null;

const axiosGlobalOptions = () => ({
  headers: {
    secret: process.env.APP_KEY,
    Authorization: getToken(),
  },
});

export const createAxiosInstance = store => {
  axiosInstance = axios.create({
    baseURL: process.env.BASE_API_URL,
    ...axiosGlobalOptions(),
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const tokenExist = Boolean(getToken());
      const errorStatus = get(error, 'response.status');
      if (tokenExist && errorStatus === 401) {
        removeAccount();
        store.dispatch({
          type: 'auth/LOGOUT',
        });
      }

      return Promise.reject(error);
    },
  );
};

export default (options = {}) => {
  if (axiosInstance) {
    return axiosInstance(merge(options, axiosGlobalOptions()));
  }

  return Promise.reject(new Error('Axios instance is undefined'));
};
