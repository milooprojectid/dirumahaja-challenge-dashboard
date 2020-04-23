import React from 'react';
import get from 'lodash/get';
import { Spin, Row, Col } from 'antd';
import { useHomeHelper } from './helper';
import MapsComponent from './Maps';
// import HeaderReportComponent from './HeaderReport';
import ChartAgeComponent from './ChartAge';
import ChartGenderComponent from './ChartGender';
import './styles.scss';

function HomePage() {
  const { selector } = useHomeHelper();

  return (
    <React.Fragment>
      {get(selector, 'statistic.loading', true) ? (
        <div className="loading-container">
          <Spin tip="Prepare the data..." />
        </div>
      ) : (
        <React.Fragment>
          <Row gutter={24}>
            <Col span={19}>
              <ChartAgeComponent selector={selector} />
            </Col>
            <Col span={5}>
              <ChartGenderComponent selector={selector} />
            </Col>
          </Row>
          <br />
          <br />

          <MapsComponent selector={selector} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default HomePage;
