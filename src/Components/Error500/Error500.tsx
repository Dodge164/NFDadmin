import s from './error.module.scss';

function Error500() {
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <div className={s.title}>500</div>
        <div className={s.warning}>Что-то пошло не так</div>
        <div className={s.text}>Попробуйте перезагрузить страницу</div>
        <button type="button">Назад</button>
      </div>
    </div>
  );
}

export default Error500;
