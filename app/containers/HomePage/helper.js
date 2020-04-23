import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDashboardListAction,
  getOrdersAction,
} from 'store/statistic/actions';

export const useHomeHelper = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => ({
    statistic: state.statistic.statistic,
    maps: state.statistic.maps,
  }));

  const getStatistics = async () => {
    await dispatch(getDashboardListAction());
    await dispatch(getOrdersAction());
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return {
    selector,
  };
};
