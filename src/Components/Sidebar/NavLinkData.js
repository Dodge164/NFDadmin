/* eslint-disable react/jsx-filename-extension */
import { ReactComponent as Pencil } from '../../assets/pencil.svg';
import { ReactComponent as List } from '../../assets/list.svg';
import { ReactComponent as Order } from '../../assets/order.svg';
import { ReactComponent as Menu4 } from '../../assets/menu4.svg';
import { ReactComponent as Menu5 } from '../../assets/menu5.svg';
import { ReactComponent as Menu6 } from '../../assets/menu6.svg';
import { ReactComponent as Menu7 } from '../../assets/menu7.svg';

const NavLinkData = [
  { title: 'Карточка автомобиля', id: 0, picture: <Pencil /> },
  { title: 'Список авто', id: 1, picture: <List /> },
  { title: 'Заказы', id: 2, picture: <Order /> },
  { title: 'Menu 4', id: 3, picture: <Menu4 /> },
  { title: 'Menu 5', id: 4, picture: <Menu5 /> },
  { title: 'Menu 6', id: 5, picture: <Menu6 /> },
  { title: 'ERROR 500', id: 6, picture: <Menu7 /> },
];
export default NavLinkData;
