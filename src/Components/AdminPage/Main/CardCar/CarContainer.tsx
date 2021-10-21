import CardCar from './CardCar';
import { SettingsCar } from './SettingsCar/SettingsCar';
import s from './carContainer.module.scss';

export default function CarContainer() {
  return (
    <>
      <div className={s.title}>
        <div>Карточка автомобиля</div>
      </div>
      <div className={s.cardWrapper}>
        <CardCar />
        <SettingsCar />
      </div>
    </>
  );
}
