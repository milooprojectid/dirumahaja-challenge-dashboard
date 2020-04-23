/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HOME_PAGE } from 'configs/routes';
import DashboardLayout from 'containers/DashboardLayout/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { makeSelectLoggedIn } from 'store/auth/selectors';
import GlobalStyle from 'global-styles';

export default function App() {
  const loggedIn = useSelector(makeSelectLoggedIn());

  return (
    <React.Fragment>
      <Switch>
        {loggedIn ? (
          <Route path={HOME_PAGE} component={DashboardLayout} />
        ) : (
          <Route path={HOME_PAGE} component={LoginPage} />
        )}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
