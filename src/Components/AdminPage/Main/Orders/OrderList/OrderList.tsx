/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
import CustomPagination from '../../../../Pagination/CustomPagination';
import { setTableOrderPage } from '../../../../../redux/actions/tableOrderAction';
import Loading from '../../../../../Loading/Loading';

import s from './carOrder.module.scss';
import Order from './Order/Order';
import OrderSelect from './OrderSelect';

const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchTableOrder, fetchTableOrderByParams } = useActions();
  const {
    currentPage,
    limit,
    period,
    ordersCount,
    createdAt,
    error,
    isLoading,
  } = useTypedSelector((state) => state.tableOrderReducer);

  const { selectedCity } = useTypedSelector((state) => state.cityReducer);

  const { selectedStatus } = useTypedSelector((state) => state.statusReducer);

  // useEffect(() => {
  //   if (period) {
  //     fetchTableOrderByParams(
  //       currentPage,
  //       limit,
  //       selectedCity,
  //       selectedStatus,
  //       createdAt,
  //     );
  //   } else {
  //     fetchTableOrder(currentPage, limit);
  //   }
  // }, [currentPage]);

  useEffect(() => {
    fetchTableOrder(currentPage, limit);
  }, [currentPage]);

  const handlerApplyClick = () => {
    if (period) {
      fetchTableOrderByParams(
        currentPage,
        limit,
        selectedCity,
        selectedStatus,
        createdAt,
      );
    } else {
      fetchTableOrder(currentPage, limit);
    }
    dispatch(setTableOrderPage(0));
  };

  const handleChangePage = (currentPageOrders: number) => {
    dispatch(setTableOrderPage(currentPageOrders - 1));
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h2 className={s.warning}>{error}</h2>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <OrderSelect />
        <div className={s.buttonContainer}>
          <button onClick={handlerApplyClick} className={s.apply}>
            Применить
          </button>
        </div>
      </div>

      <div className={s.main}>
        <Order />
      </div>

      <div className={s.footer}>
        <CustomPagination
          currentPage={currentPage}
          limit={limit}
          counter={ordersCount}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default OrderList;
