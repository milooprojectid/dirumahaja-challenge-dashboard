/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { Row, Col, Statistic } from 'antd';

function HeaderReport({ selector, averageAge }) {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="Active Users"
            value={`${get(selector, 'statistic.data.total_user', 0)}`}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Average Age" value={averageAge} />
        </Col>
      </Row>
      <br />
      <br />
    </React.Fragment>
  );
}

export default HeaderReport;
