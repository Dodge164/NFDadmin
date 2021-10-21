import CarList from './CarList';
import s from './list.module.scss';

export default function CarContainer() {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <div>Список авто</div>
      </div>
      <div className={s.carList}>
        <CarList />
      </div>
    </div>
  );
}
