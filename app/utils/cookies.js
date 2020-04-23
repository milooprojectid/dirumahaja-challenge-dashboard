import Cookies from 'js-cookie';
import { get, isEmpty } from 'lodash';
import { COOKIES } from 'configs/constants';

export const saveAccount = account => {
  Cookies.set(COOKIES.AUTH, account);
};

export const loadAccount = () => {
  const savedAccount = Cookies.get(COOKIES.AUTH);
  if (!isEmpty(savedAccount)) {
    return JSON.parse(savedAccount);
  }

  return null;
};

export const removeAccount = () => {
  Cookies.remove(COOKIES.AUTH);
};

export const getToken = () => {
  const savedAccount = loadAccount();

  return get(savedAccount, 'token');
};
