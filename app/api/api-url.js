export const BASE_URL = '/admin';

export const AUTHENTICATION = {
  LOGIN: () => `${BASE_URL}/auth`,
  LOGOUT: () => `${BASE_URL}/logout`,
};

export const DASHBOARD = {
  INDEX: () => `${BASE_URL}/dashboard`,
  MAPS: () => `${BASE_URL}/dashboard/map`,
};
