import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

export function withRedirector(WrappedComponent) {
  /* eslint-disable react/prefer-stateless-function */
  const WithRedirector = ({ dispatch, userType, ...props }) => {
    const createURL = useCallback(
      (path = '/') => {
        let redirectPath;
        if (path[0] === '/') {
          redirectPath = path.substring(1, path.lenght);
        } else {
          redirectPath = path;
        }

        const roleLink = '';
        return `/${roleLink}${redirectPath}`;
      },
      [userType],
    );

    const redirector = useMemo(
      () => ({
        userType,
        createURL,
        goTo(path = '/', state) {
          dispatch(push(createURL(path), state));
        },
      }),
      [],
    );

    return <WrappedComponent redirector={redirector} {...props} />;
  };

  WithRedirector.propTypes = {
    dispatch: PropTypes.func.isRequired,
    userType: PropTypes.string,
  };

  const mapStateToProps = state => ({
    userType: state.global.userType,
  });

  const mapDispatchToProps = dispatch => ({
    dispatch,
  });

  const ConnectedWithRedirector = withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(WithRedirector),
  );

  return hoistNonReactStatics(ConnectedWithRedirector, WrappedComponent);
}

export const redirectorShape = PropTypes.shape({
  userType: PropTypes.string,
  createURL: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired,
});
