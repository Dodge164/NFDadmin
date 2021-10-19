import Pagination from '../../../../Pagination';

import s from './carOrder.module.scss';

const CarOrder = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.selectGroup}>
          <select className={s.select} name="period" id="period">
            <option value="period">За час</option>
            <option value="period">За сутки</option>
            <option value="period">За неделю</option>
            <option value="period">За месяц</option>
          </select>
          <select className={s.select} name="model" id="model">
            <option value="model">Model.1</option>
            <option value="model">Model.2</option>
            <option value="model">Model.3</option>
            <option value="model">Model.4</option>
          </select>
          <select className={s.select} name="city" id="city">
            <option value="city">City.1</option>
            <option value="city">City.2</option>
            <option value="city">City.3</option>
            <option value="city">City.4</option>
          </select>
          <select className={s.select} name="status" id="status">
            <option value="status">Status.1</option>
            <option value="status">Status.2</option>
            <option value="status">Status.3</option>
            <option value="status">Status.4</option>
          </select>
        </div>
        <div className={s.buttonContainer}>
          <button className={s.apply}>Применить</button>
        </div>
      </div>
      <div className={s.main}>
        <div className={s.photo}>Photo</div>
        <div className={s.info}>
          <div className={s.item}>
            <div>Model</div>
            <span>в</span>
            <div>City</div>
            <div>Point</div>
          </div>
          <div className={s.time}>TimeFrom - TimeTo</div>
          <div className={s.color}>Color</div>
        </div>
        <div className={s.extends}>Extends</div>
        <div>TotalPrice</div>
        <div>
          <button>Готово</button>
          <button>Отмена</button>
          <button>Изменить</button>
        </div>
      </div>
      <div className={s.footer}>
        <Pagination />
      </div>
    </div>
  );
};

export default CarOrder;
