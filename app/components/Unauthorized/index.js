/**
 *
 * Unauthorized
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Result, Button } from 'antd';
import { FormattedMessage } from 'react-intl';

import { HOME_PAGE } from 'configs/routes';
import messages from './messages';

function Unauthorized() {
  const dispatch = useDispatch();

  const handleBackHomeButtonClick = () => {
    dispatch(push(HOME_PAGE));
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle={<FormattedMessage {...messages.header} />}
      extra={
        <Button type="primary" onClick={handleBackHomeButtonClick}>
          <FormattedMessage {...messages.backHome} />
        </Button>
      }
    />
  );
}

Unauthorized.propTypes = {};

export default Unauthorized;
