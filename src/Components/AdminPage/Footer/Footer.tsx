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
      <div className={s.copyright}>
        <div>Copyright © 2020 </div>
        <div>Simbirsoft</div>
      </div>
    </footer>
  );
}
