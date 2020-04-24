/* eslint-disable react/prop-types */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import get from 'lodash/get';
import { Icon, Card } from 'antd';

const AnyReactComponent = () => (
  <div className="person-cirle">
    <Icon type="user" />
  </div>
);

const defaultMaps = {
  center: {
    lat: -2.9993918,
    lng: 119.8588455,
  },
  zoom: 5,
};

function Maps({ selector }) {
  return (
    <React.Fragment>
      <Card>
        <div style={{ height: '40vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.API_KEY }}
            defaultCenter={defaultMaps.center}
            defaultZoom={defaultMaps.zoom}
          >
            {get(selector, 'maps.data', []).map(item => (
              <AnyReactComponent lat={item[0]} lng={item[1]} />
            ))}
          </GoogleMapReact>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Maps;
