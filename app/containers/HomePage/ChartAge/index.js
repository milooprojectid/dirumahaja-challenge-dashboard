/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function ChartAge({ selector }) {
  const AgesData = get(selector, 'statistic.data.age', []).map(item => ({
    Age: item.age,
    Count: item.count,
  }));
  return (
    <React.Fragment>
      <div className="text-drak-grey text-zeta margin-20-top">
        Age Representation
      </div>
      <div
        style={{
          width: '650',
          left: '-42px',
          top: '30px',
          position: 'relative',
        }}
      >
        <BarChart
          width={650}
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
          <Bar type="monotone" dataKey="Count" fill="#8884d8" />
        </BarChart>
      </div>
    </React.Fragment>
  );
}

export default ChartAge;
