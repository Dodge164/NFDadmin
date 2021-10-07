import React from 'react';
import SettingsCar from './SettingsCar';
import CardCar from './CardCar';
import s from './carContainer.module.scss';

export default function CarContainer() {
  return (
    <>
      <div className={s.title}>
        <h2>Карточка автомобиля</h2>
      </div>
      <div className={s.cardWrapper}>
        <CardCar />
        <SettingsCar />
      </div>
    </>
  );
}
