import React from 'react';
import { Table, Row, Col, Button } from 'antd';
import { useHandlerOrder } from './helper';
import PopupFormOrder from './components/PopupFormOrder';
import './styles.scss';

function OrdersPage() {
  const { selector, columns, handleAddOrder } = useHandlerOrder();

  const renderExpandedRowRender = record => (
    <div style={{ margin: 0 }}>
      <Row>
        <Col span={4}> Type Delivery</Col>
        <Col span={12}> : {record.details.type} </Col>
      </Row>

      <Row>
        <Col span={4}> Driver Name</Col>
        <Col span={12}> : {record.details.driverName} </Col>
      </Row>

      <Row>
        <Col span={4}> Address</Col>
        <Col span={12}> : {record.details.address} </Col>
      </Row>

      <Row>
        <Col span={4}> Description Driver</Col>
        <Col span={12}> : {record.details.description} </Col>
      </Row>
    </div>
  );

  return (
    <React.Fragment>
      <div className="home-section">
        <Row>
          <Col span={20} className="header">
            Order List
          </Col>
          <Col span={4}>
            <Button
              onClick={handleAddOrder}
              type="primary"
              shape="round"
              icon="plus"
              size="large"
            >
              Add Order
            </Button>
          </Col>
        </Row>
        <div className="body-section">
          <Table
            columns={columns}
            expandedRowRender={record => renderExpandedRowRender(record)}
            dataSource={selector.order.data}
          />
        </div>
      </div>
      <PopupFormOrder />
    </React.Fragment>
  );
}

export default OrdersPage;
