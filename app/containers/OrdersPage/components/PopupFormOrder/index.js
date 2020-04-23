import React, { useState } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderAction } from 'store/orders/actions';
import { closePopupAction } from 'store/popups/actions';
import { Form, Modal, Input, Button, Row, Col } from 'antd';

function PopupFormOrder({ form }) {
  const { getFieldDecorator } = form;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const selector = useSelector(state => ({
    order: state.orders.selected,
    popups: state.popups.popups,
  }));

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        setLoading(true);
        const body = {
          orderReference: values.orderReference,
          warehouse: values.warehouse,
          destinationName: values.destinationName,
          details: {
            address: values.address,
            type: values.type,
            driverName: values.driverName,
            description: values.description,
          },
        };
        await dispatch(createOrderAction(body));
        await dispatch(closePopupAction('formOrder'));
        setLoading(false);
        form.resetFields();
      }
    });
  };

  const handleClose = () => {
    dispatch(closePopupAction('formOrder'));
  };

  return (
    <React.Fragment>
      <Modal
        width={900}
        title="Create Order Form"
        onOk={handleClose}
        onCancel={handleClose}
        visible={get(selector, 'popups.formOrder', false)}
        footer={[]}
      >
        <Form onSubmit={handleSubmit}>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Order Number">
                {getFieldDecorator('orderReference', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input order number!',
                    },
                  ],
                })(<Input disabled={loading} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Warehouse">
                {getFieldDecorator('warehouse', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input warehouse!',
                    },
                  ],
                })(<Input disabled={loading} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Destination Name">
                {getFieldDecorator('destinationName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input destination name!',
                    },
                  ],
                })(<Input disabled={loading} />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Delivery Type">
                {getFieldDecorator('type', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input delivery type',
                    },
                  ],
                })(<Input disabled={loading} />)}
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Driver Name">
                {getFieldDecorator('driverName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input driver name',
                    },
                  ],
                })(<Input disabled={loading} />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Destination Address">
            {getFieldDecorator('address', {
              rules: [
                {
                  required: true,
                  message: 'Please input destination address!',
                },
              ],
            })(<Input disabled={loading} />)}
          </Form.Item>

          <Form.Item label="Description">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Please input description for driver',
                },
              ],
            })(<Input disabled={loading} />)}
          </Form.Item>

          <Form.Item className="text-right">
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              shape="round"
              size="large"
              onCancel={handleClose}
            >
              Create Order
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

PopupFormOrder.propTypes = {
  form: PropTypes.object.isRequired,
};

const withForm = Form.create({ name: 'form' });

export default withForm(PopupFormOrder);
