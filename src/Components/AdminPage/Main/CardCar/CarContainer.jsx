import React from 'react';

import CardCar from './CardCar';
import s from './carContainer.module.scss';
import { SettingsCar } from './SettingsCar/SettingsCar';
// import { CardOfCar } from './SettingsCar/SettingsCar.tsx';

export default function CarContainer() {
  return (
    <>
      <div className={s.title}>
        <h2>Карточка автомобиля</h2>
      </div>
      <div className={s.cardWrapper}>
        <CardCar />
        <SettingsCar />
        {/* <CardOfCar /> */}
      </div>
    </>
  );
}
