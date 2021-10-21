import carPhoto from '../../../../../../assets/carPhoto.png';
import Buttons from '../Buttons';
import Checkbox from '../Checkbox';

import s from './item.module.scss';

const Item = () => {
  return (
    <div className={s.order}>
      <div className={s.photoContainer}>
        <img className={s.photo} src={carPhoto} alt="car-example" />
      </div>
      <div className={s.info}>
        <div className={s.item}>
          <div className={s.model}>Model</div>
          <span>в</span>
          <div className={s.city}>City,</div>
          <div className={s.point}>Point</div>
        </div>
        <div className={s.time}>12.06.2019 12:00 — 13.06.2019 12:00</div>
        <div className={s.color}>
          Цвет: <span>color</span>
        </div>
      </div>
      <div className={s.extends}>
        <Checkbox />
      </div>
      <div className={s.price}>TotalPrice</div>
      <Buttons />
    </div>
  );
};

export default Item;
