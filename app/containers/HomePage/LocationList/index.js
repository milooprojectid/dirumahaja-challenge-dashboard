/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import { Icon, Row, Col } from 'antd';

function LocationList({ selector }) {
  const IconPeople = () => (
    <div className="person-cirle">
      <Icon type="user" />
    </div>
  );
  return (
    <React.Fragment>
      {get(selector, 'statistic.data.location', []).map(item => (
        <div className="loctions-card" style={{}}>
          <Row>
            <Col span={5}>
              <div className="display-flex">
                <IconPeople />
                <div className="padding-4 margin-12-left ">
                  {item.location_name}{' '}
                </div>
              </div>
            </Col>
            <Col span={12}>Count {item.count} </Col>
          </Row>
        </div>
      ))}
    </React.Fragment>
  );
}

export default LocationList;
