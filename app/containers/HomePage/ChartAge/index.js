/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function ChartAge({ selector }) {
  return (
    <React.Fragment>
      <Card style={{ width: '100%' }}>
        <LineChart
          width={900}
          height={300}
          data={get(selector, 'statistic.data.age')}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Count" stroke="#82ca9d" />
        </LineChart>
        <div className="text-blue text-center">Age Representation</div>
      </Card>
    </React.Fragment>
  );
}

export default ChartAge;
