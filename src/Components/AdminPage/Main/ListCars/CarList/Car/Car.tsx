import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { ICar } from '../../../../../../interfaces/carListInterfaces';
import { setSelectedCar } from '../../../../../../redux/actions/carCardAction';
import { changeNavLink } from '../../../../../../redux/actions/navLink';

import s from './car.module.scss';

const Car: React.FC = () => {
  const dispatch = useDispatch();

  const { carList } = useTypedSelector((state) => state.carListReducer);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleClickCar = (car: ICar) => {
    dispatch(setSelectedCar(car));
    dispatch(changeNavLink({ title: 'Карточка автомобиля', id: 0 }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Модель</th>
          <th>Фото</th>
          <th>Категория</th>
          <th>Цена мин</th>
          <th>Цена макс</th>
        </tr>
      </thead>
      <tbody>
        {carList.map((car: ICar) => (
          <tr key={car.id} onClick={() => handleClickCar(car)}>
            <td className={s.title}>{car.name}</td>
            <td className={s.col}>
              <img
                className={s.photo}
                src={
                  car?.thumbnail?.path.includes('base64')
                    ? car?.thumbnail?.path
                    : BASE_URL + car?.thumbnail?.path
                }
                alt="car-example"
              />
            </td>
            <td className={s.col}>{car.categoryId?.name}</td>
            <td className={s.col}>{car.priceMin.toLocaleString('ru')}</td>
            <td className={s.col}>{car.priceMax.toLocaleString('ru')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Car;
