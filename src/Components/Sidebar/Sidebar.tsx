import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ReactComponent as LoginLogo } from '../../assets/logo.svg';
import { changeNavLink } from '../../redux/actions/navLink';
import { resetCar } from '../../redux/actions/carCardAction';

import NavLinkData from './NavLinkData';
import s from './sidebar.module.scss';

function Sidebar() {
  const navReducer = useTypedSelector((state) => state.navReducer);
  const car = useTypedSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  function handleClick({ title, id }: any) {
    dispatch(changeNavLink({ title, id }));
    if (car.id) {
      dispatch(resetCar());
    }
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
