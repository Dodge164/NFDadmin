import React from 'react';
import { useSelector } from 'react-redux';
import CarContainer from '../CardCar/CarContainer';
import Menu from '../Menu';
import Orders from '../Orders';
import ListCars from '../ListCars';

import s from './main.module.scss';
import Error500 from '../../../Error500/Error500';

export default function Main() {
  // const navReducer = useSelector((state) => state.navReducer);
  // const { title } = navReducer.currentNavLink;
  const { title } = useSelector((state) => state.navReducer.currentNavLink);

  return (
    <div className={s.main}>
      {title === 'Карточка автомобиля' && <CarContainer />}
      {title === 'Список авто' && <ListCars />}
      {title === 'Заказы' && <Orders />}
      {title === 'Menu 4' && <Menu />}
      {title === 'Menu 5' && <Menu />}
      {title === 'Menu 6' && <Menu />}
      {title === 'ERROR 500' && <Error500 />}
    </div>
  );
}
