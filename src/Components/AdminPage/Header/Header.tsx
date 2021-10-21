import profilePhoto from '../../../assets/profilePhoto.png';
import { ReactComponent as Search } from '../../../assets/search.svg';
import { ReactComponent as Notification } from '../../../assets/notification.svg';
import { ReactComponent as Dropdown } from '../../../assets/dropdown.svg';

import s from './header.module.scss';

export default function Header() {
  return (
    <header className={s.wrapper}>
      <div className={s.search}>
        <Search className={s.searchLogo} />
        <input type="text" placeholder="Поиск ..." />
      </div>
      <div className={s.account}>
        <div className={s.notification}>
          <Notification />
          <div className={s.newAlert}>2</div>
        </div>
        <div className={s.user}>
          <img src={profilePhoto} alt="ProfilePhoto" />
          <span>Admin</span>
          <Dropdown className={s.dropdown} />
        </div>
      </div>
    </header>
  );
}
