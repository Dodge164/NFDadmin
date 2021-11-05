import cn from 'classnames';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import CarList from './CarList';
import s from './list.module.scss';

export default function CarContainer() {
  const { isLoading } = useTypedSelector((state) => state.carListReducer);

  return (
    <>
      <div className={s.title}>
        <div>Список авто</div>
      </div>
      <div
        className={cn(s.carList, {
          [s.blankLoading]: isLoading === true,
        })}
      >
        <CarList />
      </div>
    </>
  );
}
