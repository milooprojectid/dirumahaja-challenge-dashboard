import React from 'react';
import get from 'lodash/get';
import { Spin } from 'antd';
import { useHomeHelper } from './helper';
import MapsComponent from './Maps';
import HeaderReportComponent from './HeaderReport';
import ChartAgeComponent from './ChartAge';
import ChartGenderComponent from './ChartGender';
import LocationListComponent from './LocationList';
import './styles.scss';

function HomePage() {
  const { selector } = useHomeHelper();
  const BodyComponent = () => (
    <React.Fragment>
      <ChartGenderComponent selector={selector} />
      <ChartAgeComponent selector={selector} />
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
