import React from 'react';
import get from 'lodash/get';
import { Table, Icon, Spin, Row, Input, Col } from 'antd';
import { useHandlerUsers } from './helper';
import './styles.scss';
const { Search } = Input;

function UserPage() {
  const {
    selector,
    columns,
    handleTableChange,
    handleOnChange,
    handleOnSearch,
  } = useHandlerUsers();

  const BodyComponent = () => (
    <div className="body-section">
      <Row className="margin-16-bottom margin-16-top">
        <Col span={13} />
        <Col span={8}>
          <Search
            placeholder="Search User"
            enterButton="Search"
            size="large"
            value={get(selector, 'keyword')}
            onChange={handleOnChange}
            onSearch={handleOnSearch}
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        pagination={{
          pageSize: get(selector, 'users.data.pagination.per_page'),
          current: get(selector, 'users.data.pagination.page'),
          total: get(selector, 'users.data.pagination.total_data'),
        }}
        onChange={handleTableChange}
        dataSource={get(selector, 'users.data.users')}
      />
    </div>
  );

  return (
    <React.Fragment>
      <div className="display-flex margin-20-bottom">
        <div className="text-epsilon">
          <Icon type="user" />
        </div>
        <div className="text-analytic"> User List</div>
      </div>
      {get(selector, 'users.loading', true) ? (
        <Spin spinning tip="Prepare the data...">
          <BodyComponent />
        </Spin>
      ) : (
        <BodyComponent />
      )}
    </React.Fragment>
  );
}

export default UserPage;
