import OrderPagination from '../../../../Pagination/OrderPagination';

import s from './carOrder.module.scss';
import Select from './Select';
import Item from './Item';

const CarOrder = () => {
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
        <OrderPagination />
      </div>
    </div>
  );
};

export default CarOrder;
