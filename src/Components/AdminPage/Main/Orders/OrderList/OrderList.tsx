/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
import CustomPagination from '../../../../Pagination/CustomPagination';
import { setOrdersPage } from '../../../../../redux/actions/ordersAction';
import Loading from '../../../../../Loading/Loading';

import s from './carOrder.module.scss';
import Order from './Order';
import OrderSelect from './OrderSelect';

const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchOrdersByParams } = useActions();
  const {
    currentPage,
    limit,
    period,
    ordersCount,
    isChanging,
    error,
    isLoading,
  } = useTypedSelector((state) => state.ordersReducer);

  const { type } = useTypedSelector((state) => state.alertReducer);

  const { selectedCity } = useTypedSelector((state) => state.cityReducer);

  const { selectedStatus } = useTypedSelector((state) => state.statusReducer);

  useEffect(() => {
    fetchOrdersByParams(
      currentPage,
      limit,
      selectedCity,
      selectedStatus,
      period,
    );
  }, [currentPage]);

  useEffect(() => {
    if (!isChanging && type === 'success') {
      fetchOrdersByParams(
        currentPage,
        limit,
        selectedCity,
        selectedStatus,
        period,
      );
    }
  }, [isChanging]);

  const handlerApplyClick = () => {
    fetchOrdersByParams(
      currentPage,
      limit,
      selectedCity,
      selectedStatus,
      period,
    );

    dispatch(setOrdersPage(0));
  };

  const handleChangePage = (currentPageOrders: number) => {
    dispatch(setOrdersPage(currentPageOrders - 1));
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
