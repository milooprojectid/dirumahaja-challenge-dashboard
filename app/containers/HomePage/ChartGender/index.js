/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { Card, Statistic, Row } from 'antd';

function ChartGender({ selector }) {
  return (
    <React.Fragment>
      <Row>
        <Card style={{ width: '100%' }}>
          <Statistic
            title="Active Users"
            value={get(selector, 'statistic.data.total_user', 0)}
            valueStyle={{ color: '#7e54a5' }}
            suffix="Person"
          />
        </Card>
        <br />
        <Card style={{ width: '100%' }}>
          <Statistic
            title="Female"
            value={get(selector, 'statistic.data.gender[0].count', 0)}
            valueStyle={{ color: '#eb2f96' }}
            suffix="Person"
          />
        </Card>
        <br />
        <Card style={{ width: '100%' }}>
          <Statistic
            title="Male"
            value={get(selector, 'statistic.data.gender[1].count', 0)}
            valueStyle={{ color: '#0088FF' }}
            suffix="Person"
          />
        </Card>
      </Row>
    </React.Fragment>
  );
}

export default ChartGender;
