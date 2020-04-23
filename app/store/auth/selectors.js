import get from 'lodash/get';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

export const makeSelectLoggedIn = () =>
  createSelector(
    selectAuth,
    authState => authState.loggedIn,
  );

export const makeSelectFetching = () =>
  createSelector(
    selectAuth,
    authState => authState.fetching,
  );

export const makeSelectUserType = () =>
  createSelector(
    selectAuth,
    authState => get(authState, 'account.user_type'),
  );
