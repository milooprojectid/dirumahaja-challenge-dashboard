/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Card } from 'antd';

function ChartAgeComponent({ selector }) {
  const AgesData = get(selector, 'statistic.data.age', []).map(item => ({
    Age: item.age,
    Count: item.count,
  }));
  return (
    <React.Fragment>
      <Card>
        <div
          style={{
            width: '650',
            left: '-42px',
            top: '30px',
            position: 'relative',
          }}
        >
          <LineChart
            width={750}
            height={300}
            data={AgesData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis dataKey="Age" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Count" stroke="#8884d8" />
          </LineChart>
        </div>
        <br />
        <div
          className="text-center text-zeta margin-20-top"
          style={{ color: '#8884d8' }}
        >
          Age Representation
        </div>
      </Card>
    </React.Fragment>
  );
}

export default ChartAgeComponent;
