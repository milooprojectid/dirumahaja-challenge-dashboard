/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { Statistic, Row, Col } from 'antd';

function CardCountComponent({ selector }) {
  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col span={14}>
          <Statistic
            title="Active Users"
            value={get(selector, 'statistic.data.total_user', 0)}
            valueStyle={{ color: '#7e54a5' }}
            suffix="Person"
          />
        </Col>
        <Col
          span={4}
          style={{
            paddingLeft: '60px',
            borderLeft: '1px solid rgb(139, 140, 139)',
          }}
        >
          <Statistic
            title="Female"
            value={get(selector, 'statistic.data.gender[0].count', 0)}
            valueStyle={{ color: '#eb2f96' }}
            suffix="Person"
          />
        </Col>
        <Col
          span={4}
          style={{
            paddingLeft: '60px',
            borderLeft: '1px solid rgb(139, 140, 139)',
          }}
        >
          <Statistic
            title="Male"
            value={get(selector, 'statistic.data.gender[1].count', 0)}
            valueStyle={{ color: '#0088FF' }}
            suffix="Person"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default CardCountComponent;
