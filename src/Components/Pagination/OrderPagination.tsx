import React from 'react';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setOrdersPage } from '../../redux/actions/ordersAction';

import s from './pagination.module.scss';
import './antd.scss';

const OrderPagination = () => {
  const dispatch = useDispatch();

  const handleChangePage = (currentPage: number) => {
    dispatch(setOrdersPage(currentPage - 1));
  };

  const { currentPage, limit, ordersCount } = useTypedSelector(
    (state) => state.ordersReducer,
  );

  return (
    <Pagination
      current={currentPage + 1}
      defaultCurrent={currentPage + 1}
      total={ordersCount}
      pageSize={limit}
      showSizeChanger={false}
      hideOnSinglePage={true}
      showLessItems
      onChange={handleChangePage}
      itemRender={(_, type, originalContent) => {
        switch (type) {
          case 'prev':
            return <div className={s.numb}>&laquo;</div>;

          case 'next':
            return <div className={s.numb}>&raquo;</div>;

          case 'jump-prev':
            return <div className={s.dots}>...</div>;

          case 'jump-next':
            return <div className={s.dots}>...</div>;

          default:
            return originalContent;
        }
      }}
    />
  );
};

export default OrderPagination;
