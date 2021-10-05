import React from 'react';
import s from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.menu}>
        <ul>
          <li>Главная страница</li>
          <li>Ссылка</li>
        </ul>
      </div>
      <div className={s.copyright}>Copyright © 2020 Simbirsoft</div>
    </footer>
  );
}
