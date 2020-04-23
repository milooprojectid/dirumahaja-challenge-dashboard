import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Row, Col, Dropdown, Menu } from 'antd';
import { doLogout } from 'store/auth/actions';
import { setCollapsedMenu } from 'store/global/actions';
import './styles.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => ({
    collapsed: state.global.collapsed,
    account: state.auth.account,
  }));
  const handleLogoutButtonClick = () => {
    dispatch(doLogout());
  };

  const handleClick = () => {
    dispatch(setCollapsedMenu(!selector.collapsed));
  };

  const menu = (
    <Menu>
      <Menu.Item key={0} onClick={handleLogoutButtonClick}>
        <div className="padding-8-top padding-8-bottom padding-24-right padding-24-left">
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <Row className="header-component">
        <Col span={1}>
          <Icon type="menu" className="icon-menu" onClick={handleClick} />
        </Col>
        <Col span={22} />
        <Col span={1}>
          <Dropdown overlay={menu}>
            <Icon type="user" className="icon-user text-blue padding-16-top" />
          </Dropdown>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Header;
