import { get } from 'lodash';
import { createSelector } from 'reselect';

const selectRouter = state => state.router;

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => get(routerState, 'location', {}),
  );
