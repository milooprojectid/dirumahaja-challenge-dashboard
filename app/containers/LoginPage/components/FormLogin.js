/*
 * Login Page
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Button, Spin } from 'antd';

function FormLogin({ form, handleSubmit, loading }) {
  const { getFieldDecorator } = form;

  const onSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values);
      }
    });
  };

  return (
    <>
      <div className="padding-36">
        <div className="text-center margin-28-top">
          <div className="text-blue text-beta margin-28-top"> Login </div>
        </div>
        <Spin spinning={loading}>
          <Form onSubmit={onSubmit} className="login-form margin-60-top">
            <div className="text-600"> User Name </div>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  placeholder="Username"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />,
              )}
            </Form.Item>
            <div className="text-600"> Password </div>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  type="password"
                  placeholder="Password"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />,
              )}
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-50"
                shape="round"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </>
  );
}

FormLogin.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const withForm = Form.create({ name: 'login' });

export default withForm(FormLogin);
