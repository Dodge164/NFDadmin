import CarOrder from './CarOrder';
import s from './orders.module.scss';

const OrdersContainer = () => {
  return (
    <>
      <div className={s.title}>
        <div>Заказы</div>
      </div>
      <div className={s.carOrder}>
        <CarOrder />
      </div>
    </>
  );
};

export default OrdersContainer;
