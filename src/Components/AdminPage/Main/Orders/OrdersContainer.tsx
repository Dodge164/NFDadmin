import cn from 'classnames';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import OrderList from './OrderList';
import s from './orders.module.scss';

export default function OrdersContainer() {
  const { isLoading } = useTypedSelector((state) => state.ordersReducer);

  return (
    <>
      <div className={s.title}>
        <div>Заказы</div>
      </div>
      <div
        className={cn(s.carOrder, {
          [s.blankLoading]: isLoading === true,
        })}
      >
        <OrderList />
      </div>
    </>
  );
}
