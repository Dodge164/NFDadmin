import React from 'react';
import cn from 'classnames';
import { ReactComponent as LoginLogo } from '../../assets/logo.svg';
import NavLinkData from './NavLinkData';
import { useDispatch } from 'react-redux';
import { changeNavLink } from '../../redux/actions/navLink';
import s from './sidebar.module.scss';
import { useSelector } from 'react-redux';

function Sidebar() {
  const navReducer = useSelector((state) => state.navReducer);
  const dispatch = useDispatch();

  function handleClick({ title, id }) {
    dispatch(changeNavLink({ title, id }));
  }

  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <LoginLogo className={s.svg} />
        <span className={s.name}>Need for car</span>
      </div>
      <ul className={s.items}>
        {NavLinkData.map((item) => (
          <li
            onClick={() => handleClick({ title: item.title, id: item.id })}
            key={item.id}
            className={cn(s.item, {
              [s.item_active]: navReducer.currentNavLink?.title === item.title,
            })}
          >
            <div
              className={cn(s.sidebarSvg, {
                [s.active]: navReducer.currentNavLink?.title === item.title,
              })}
            >
              {item.picture}
            </div>
            <span> {item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
