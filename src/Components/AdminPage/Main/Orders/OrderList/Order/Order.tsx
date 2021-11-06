import moment from 'moment';

import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { ITableOrder } from '../../../../../../interfaces/selectInterfaces';
import noPhoto from '../../../../../../assets/noPhoto.png';
import Buttons from '../Buttons';
import Checkbox from '../Checkbox';
import { putOrderStatusById } from '../../../../../../api/http';

import s from './order.module.scss';

const Order: React.FC = () => {
  const { orderList } = useTypedSelector((state) => state.tableOrderReducer);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleDone = (orderId: string) => {
    putOrderStatusById(orderId, {
      orderStatusId: {
        id: '5e26a1f0099b810b946c5d8b',
      },
    });
  };
  const handleCancel = (orderId: string) => {
    console.log('handleCancel :>> ', orderId);
  };
  const handleRestore = (orderId: string) => {
    console.log('handleRestore :>> ', orderId);
  };

  return (
    <>
      {orderList?.map((order: ITableOrder) => (
        <div key={order?.id} className={s.order}>
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
              {moment(order?.dateFrom).format('DD.MM.YYYY h:mm')}
              &nbsp;&#9472;&nbsp;
              {moment(order?.dateTo).format('DD.MM.YYYY h:mm')}
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
            {order?.price?.toLocaleString('ru') + ' ₽' ?? 'Не задана'}
          </div>
          <Buttons
            onClickDone={handleDone}
            onClickCancel={handleCancel}
            onClickRestore={handleRestore}
            orderId={order?.id}
          />
        </div>
      ))}
    </>
  );
};

export default Order;
