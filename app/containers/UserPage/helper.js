import React, { useEffect } from 'react';
import get from 'lodash/get';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setKeyword } from 'store/users/actions';

export const useHandlerUsers = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => ({
    users: state.users.users,
    keyword: state.users.keyword,
  }));

  const handleTableChange = async key => {
    await dispatch(getUsers({ page: key.current || 1 }));
  };

  const handleOnSearch = async param => {
    await dispatch(getUsers({ param }));
  };

  const handleOnChange = evt => {
    dispatch(setKeyword(get(evt, 'target.value')));
  };

  const columns = [
    { title: 'No', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button type="link"> Detail</Button>,
    },
  ];

  const getOrders = async () => {
    dispatch(setKeyword(''));
    await dispatch(getUsers({ page: 1 }));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return {
    selector,
    columns,
    handleOnSearch,
    handleTableChange,
    handleOnChange,
  };
};
