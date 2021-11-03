/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';

import noPhoto from '../../../../../../assets/noPhoto.png';
import { useActions } from '../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { ITableOrder } from '../../../../../../interfaces/selectInterfaces';
import Loading from '../../../../../../Loading/Loading';
import Buttons from '../Buttons';
import Checkbox from '../Checkbox';
// import Buttons from '../Buttons';
// import Checkbox from '../Checkbox';

import s from './item.module.scss';

const Item: React.FC = () => {
  const { orderList, error, isLoading, currentPage, limit } = useTypedSelector(
    (state) => state.tableOrderReducer,
  );

  const { fetchTableOrder } = useActions();

  useEffect(() => {
    fetchTableOrder(currentPage, limit);
  }, [currentPage]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h2 className={s.warning}>{error}</h2>;
  }

  return (
    <>
      {console.log('orderList :>> ', orderList)}
      {orderList?.map((order: ITableOrder) => (
        <div key={order.carId?.id} className={s.order}>
          <div className={s.photoContainer}>
            <img
              className={s.photo}
              src={
                order.carId?.thumbnail?.path
                  ? order.carId?.thumbnail?.path.includes('base64')
                    ? order.carId?.thumbnail?.path
                    : BASE_URL + order.carId?.thumbnail?.path
                  : noPhoto
              }
              alt="car-example"
            />
          </div>
          <div className={s.info}>
            <div className={s.item}>
              <div className={s.model}>
                {order?.carId?.name ?? 'Запись не найдена'}
              </div>
              <span>в</span>
              <div className={s.city}>{order?.cityId?.name ?? 'Не задан'},</div>
              <div className={s.point}>
                {order?.pointId?.address ?? 'Не задан'}
              </div>
            </div>
            <div className={s.time}>
              {order?.dateFrom} — {order?.dateTo}
            </div>
            <div className={s.color}>
              Цвет: <span>{order.color ?? 'Не задан'}</span>
            </div>
          </div>
          <div className={s.extends}>
            <Checkbox checked={order.isFullTank} label="Полный бак" />
            <Checkbox checked={order.isNeedChildChair} label="Детское кресло" />
            <Checkbox checked={order.isRightWheel} label="Правый руль" />
          </div>
          <div className={s.price}>
            {order.price.toLocaleString('ru') + ' ₽' ?? 'Не задана'}
          </div>
          <Buttons />
        </div>
      ))}
      ахтунг
    </>
  );
  //   <div className={s.order}>
  //   <div className={s.photoContainer}>
  //     <img className={s.photo} src={carPhoto} alt="car-example" />
  //   </div>
  //   <div className={s.info}>
  //     <div className={s.item}>
  //       <div className={s.model}>Model</div>
  //       <span>в</span>
  //       <div className={s.city}>City,</div>
  //       <div className={s.point}>Point</div>
  //     </div>
  //     <div className={s.time}>12.06.2019 12:00 — 13.06.2019 12:00</div>
  //     <div className={s.color}>
  //       Цвет: <span>color</span>
  //     </div>
  //   </div>
  //   <div className={s.extends}>
  //     <Checkbox />
  //   </div>
  //   <div className={s.price}>TotalPrice</div>
  //   <Buttons />
  // </div>
};

export default Item;
