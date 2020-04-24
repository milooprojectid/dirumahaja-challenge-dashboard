/**
 *
 * DashboardLayout
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import Sidebar from 'components/Sidebar';
import * as ROUTES from 'configs/routes';
import './styles.scss';

export function DashboardLayout() {
  const selector = useSelector(state => ({
    collapsed: state.global.collapsed,
  }));

  return (
    <>
      <Header />
      <Layout className="container">
        <Layout.Sider theme="light" collapsible collapsed={selector.collapsed}>
          <Sidebar />
        </Layout.Sider>
        <Layout.Content className="content">
          <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route exact path={ROUTES.USERS_PAGE} component={UserPage} />
          </Switch>
        </Layout.Content>
      </Layout>
    </>
  );
}

DashboardLayout.propTypes = {};

export default DashboardLayout;
