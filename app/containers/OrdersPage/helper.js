import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersAction } from 'store/orders/actions';
import { openPopupAction } from 'store/popups/actions';

export const useHandlerOrder = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => ({
    order: state.orders.order,
  }));

  const columns = [
    { title: 'Order Name', dataIndex: 'orderReference', key: 'orderReference' },
    {
      title: 'Destination',
      dataIndex: 'destinationName',
      key: 'destinationName',
    },
    { title: 'Warehouse', dataIndex: 'warehouse', key: 'warehouse' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button type="link"> Delete</Button>,
    },
  ];

  const handleAddOrder = e => {
    e.preventDefault();
    dispatch(openPopupAction('formOrder'));
  };

  const getOrders = async () => {
    await dispatch(getOrdersAction());
  };

  useEffect(() => {
    getOrders();
  }, []);

  return {
    selector,
    columns,
    handleAddOrder,
  };
};
