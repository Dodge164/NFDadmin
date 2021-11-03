/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import CustomPagination from '../../../../Pagination';
import { getTableOrder } from '../../../../../api/http';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

import s from './carOrder.module.scss';
import Select from './Select';
import Item from './Item/Item';

const OrderList = () => {
  const { currentPage, limit } = useTypedSelector(
    (state) => state.tableOrderReducer,
  );

  useEffect(() => {
    getTableOrder(currentPage, limit);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Select />
        <div className={s.buttonContainer}>
          <button className={s.apply}>Применить</button>
        </div>
      </div>
      <div className={s.main}>
        <Item />
      </div>
      <div className={s.footer}>
        <CustomPagination />
      </div>
    </div>
  );
};

export default OrderList;
