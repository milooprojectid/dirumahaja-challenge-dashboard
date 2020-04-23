/**
 * app.js
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import { createAxiosInstance } from 'api';
import App from 'containers/App';
import LanguageProvider from 'containers/LanguageProvider';
import { initialState as authInitialState } from 'store/auth/reducer';
import * as Cookies from 'utils/cookies';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
import 'antd/dist/antd.css';
import 'sanitize.css/sanitize.css';
import configureStore from './configureStore';
import { translationMessages } from './i18n';
import './styles/index.scss';

const savedAccount = Cookies.loadAccount();
const loggedIn = Boolean(savedAccount);

const initialState = {
  auth: {
    ...authInitialState,
    account: savedAccount,
    loggedIn,
  },
};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

createAxiosInstance(store);

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
