/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

import authReducer from 'store/auth/reducer';
import globalReducer from 'store/global/reducer';
import ordersReducer from 'store/orders/reducer';
import popupsReducer from 'store/popups/reducer';
import statisticReducer from 'store/statistic/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    auth: authReducer,
    global: globalReducer,
    orders: ordersReducer,
    popups: popupsReducer,
    statistic: statisticReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
