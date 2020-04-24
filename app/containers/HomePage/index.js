import React from 'react';
import get from 'lodash/get';
import { Spin, Row, Col } from 'antd';
import { useHomeHelper } from './helper';
import MapsComponent from './Maps';
import HeaderReportComponent from './HeaderReport';
import ChartGenderComponent from './ChartGenderComponent';
import ChartAgeComponent from './ChartAgeComponent';
import CardCountComponent from './CardCountComponent';
import LocationListComponent from './LocationList';
import './styles.scss';

function HomePage() {
  const { selector } = useHomeHelper();
  const BodyComponent = () => (
    <React.Fragment>
      <CardCountComponent selector={selector} />
      <br />
      <Row gutter={24}>
        <Col span={14}>
          <ChartAgeComponent selector={selector} />
        </Col>
        <Col span={10}>
          <ChartGenderComponent selector={selector} />
        </Col>
      </Row>
      <br />
      <br />
      <MapsComponent selector={selector} />
      <LocationListComponent selector={selector} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <HeaderReportComponent />
      {get(selector, 'statistic.loading', true) ? (
        <Spin spinning tip="Prepare the data...">
          <BodyComponent />
        </Spin>
      ) : (
        <BodyComponent />
      )}
    </React.Fragment>
  );
}

export default HomePage;
