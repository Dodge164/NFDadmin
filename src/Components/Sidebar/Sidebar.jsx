import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { ReactComponent as LoginLogo } from '../../assets/logo.svg';
import { ReactComponent as Pencil } from '../../assets/pencil.svg';
import { ReactComponent as List } from '../../assets/list.svg';
import { ReactComponent as Order } from '../../assets/order.svg';
import { ReactComponent as Menu4 } from '../../assets/menu4.svg';
import { ReactComponent as Menu5 } from '../../assets/menu5.svg';
import { ReactComponent as Menu6 } from '../../assets/menu6.svg';
import { ReactComponent as Menu7 } from '../../assets/menu7.svg';
import s from './sidebar.module.scss';

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <LoginLogo className={s.svg} />
        <span className={s.name}>Need for drive</span>
      </div>
      <ul className={s.items}>
        <Link to="/admin/carCard">
          <li
            className={cn(s.item, {
              [s.item_active]: true,
            })}
          >
            <div className={s.sidebarSvg}>
              <Pencil />
            </div>
            <span> Карточка автомобиля</span>
          </li>
        </Link>
        <Link to="/admin/carList">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <List />
            </div>
            <span> Список авто</span>
          </li>
        </Link>
        <Link to="/admin/order">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <Order />
            </div>
            <span>Заказы</span>
          </li>
        </Link>
        <Link to="/admin/menu4">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <Menu4 />
            </div>
            <span>Menu 4</span>
          </li>
        </Link>
        <Link to="/admin/menu5">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <Menu5 />
            </div>
            <span>Menu 5</span>
          </li>
        </Link>
        <Link to="/admin/menu6">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <Menu6 />
            </div>
            <span>Menu 6</span>
          </li>
        </Link>
        <Link to="/admin/menu7">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <Menu7 />
            </div>
            <span>Menu 7</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
