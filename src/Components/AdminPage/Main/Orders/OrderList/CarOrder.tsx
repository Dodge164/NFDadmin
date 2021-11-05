import OrderPagination from '../../../../Pagination/OrderPagination';

import s from './carOrder.module.scss';
import Item from './Order';
import OrderSelect from './OrderSelect';

const CarOrder = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <OrderSelect />
        <div className={s.buttonContainer}>
          <button className={s.apply}>Применить</button>
        </div>
      </div>
      <div className={s.main}>
        <Item />
      </div>
      <div className={s.footer}>
        <OrderPagination />
      </div>
    </div>
  );
};

export default CarOrder;
