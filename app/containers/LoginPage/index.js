/*
 * LoginPage

 *
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from 'store/auth/actions';
import { makeSelectFetching } from 'store/auth/selectors';
import { Row, Col } from 'antd';
import { IMG_BG_LOGIN } from 'images';
import FormLogin from './components/FormLogin';

import './styles.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const isFetching = useSelector(makeSelectFetching());

  const handleLoginSubmit = values => {
    dispatch(fetchLogin(values.username, values.password));
  };

  return (
    <React.Fragment>
      <Row className="container">
        <Col span={12}>
          <FormLogin handleSubmit={handleLoginSubmit} loading={isFetching} />
        </Col>
        <Col span={12} className="container-right">
          <img src={IMG_BG_LOGIN} alt="123" width="100%" />
        </Col>
      </Row>
    </React.Fragment>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
