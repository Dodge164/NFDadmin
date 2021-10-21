import s from './buttons.module.scss';

const Buttons = () => {
  return (
    <div className={s.buttons}>
      <button className={s.buttonDone}>Готово</button>
      <button className={s.buttonCancel}>Отмена</button>
      <button className={s.buttonEdit}>Изменить</button>
    </div>
  );
};

export default Buttons;
