/* eslint-disable react/no-access-state-in-setstate */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'antd';
import * as ROUTES from 'configs/routes';
import { setCollapsedMenu } from 'store/global/actions';
import { makeSelectLocation } from 'store/router/selectors';
import { withRedirector } from 'utils/redirect';
import { getParentRoute } from './helper';

function SideBar({ redirector }) {
  const dispatch = useDispatch();
  const location = useSelector(makeSelectLocation());
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  const handleClick = uri => {
    redirector.goTo(uri.key);
    dispatch(setCollapsedMenu(false));
    setSelectedKey(uri.key);
  };

  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[getParentRoute(selectedKey)]}
        mode="inline"
        theme="light"
        inlineCollapsed={false}
      >
        <Menu.Item key={ROUTES.HOME_PAGE}>
          <Icon type="bar-chart" style={{ fontSize: '15px' }} />
          <span>Analytics</span>
        </Menu.Item>
        <Menu.Item key={ROUTES.USERS_PAGE}>
          <Icon type="user" style={{ fontSize: '15px' }} />
          <span>User List</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

SideBar.propTypes = {
  redirector: PropTypes.object.isRequired,
};

export default withRedirector(SideBar);
