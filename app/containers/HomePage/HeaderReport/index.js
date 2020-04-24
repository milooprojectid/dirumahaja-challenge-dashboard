/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from 'antd';

function HeaderReport() {
  return (
    <React.Fragment>
      <div className="display-flex margin-20-bottom">
        <div className="text-epsilon">
          <Icon type="bar-chart" />
        </div>
        <div className="text-analytic"> Analytics</div>
      </div>
    </React.Fragment>
  );
}

export default HeaderReport;
