/* eslint-disable no-console */
import { Pagination } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import cn from 'classnames';
import './antd.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  fetchCarList,
  setCarListPage,
} from '../../redux/actions/carListAction';

import s from './pagination.module.scss';

export default function CustomPagination() {
  const dispatch = useDispatch();

  const handleChangePage = (currentPage: number) => {
    dispatch(setCarListPage(currentPage - 1));
  };

  const { currentPage, limit, carsCount } = useTypedSelector(
    (state) => state.carListReducer,
  );

  useEffect(() => {
    fetchCarList(currentPage, limit);
  }, [currentPage, limit]);

  return (
    <Pagination
      current={currentPage + 1}
      defaultCurrent={currentPage + 1}
      total={carsCount}
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
}
