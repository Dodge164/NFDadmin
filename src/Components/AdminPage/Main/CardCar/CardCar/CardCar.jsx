import React from 'react';
import carPhoto from '../../../../../assets/carPhoto.png';

import s from './card.module.scss';

function CardCar() {
  return (
    <div className={s.wrapper}>
      <div className={s.mobileWrapper}>
        <img src={carPhoto} alt="car-example" />
        <div className={s.name}>Hyundai, i30 N</div>
        <div className={s.type}>Компакт-кар</div>
        <div className={s.file}>
          <input type="file" className={s.input} id="customFile" />
          <label className={s.label} htmlFor="customFile">
            <span className={s.textt}>Выберите файл...</span>
            <span className={s.button}>Обзор</span>
          </label>
        </div>
      </div>
      <div className={s.mobileWrapper}>
        <div className={s.progress}>
          <div className={s.progressInfo}>
            <div>Заполнено</div>
            <div>74%</div>
          </div>
          <div className={s.progressBar}>
            <div className={s.bar}></div>
          </div>
        </div>

        <div className={s.description}>
          <div className={s.title}>Описание</div>
          <div className={s.text}>
            Lоrem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
            quidem, commodi soluta qui quae quod dolorum sint alias, possimus
            illum assumenda eligendi cumque?
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCar;
