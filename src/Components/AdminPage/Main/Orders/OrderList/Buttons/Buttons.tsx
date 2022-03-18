import s from './buttons.module.scss';

interface IProps {
  onClickDone: (orderId: string) => void;
  onClickCancel: (orderId: string) => void;
  onClickRestore: (orderId: string) => void;
  orderId: string;
}

const Buttons = (props: IProps) => {
  const { onClickDone, onClickCancel, onClickRestore, orderId } = props;
  return (
    <div className={s.buttons}>
      <button onClick={() => onClickDone(orderId)} className={s.buttonDone}>
        Готово
      </button>
      <button onClick={() => onClickCancel(orderId)} className={s.buttonCancel}>
        Отмена
      </button>
      <button onClick={() => onClickRestore(orderId)} className={s.buttonEdit}>
        Вернуть
      </button>
    </div>
  );
};

export default Buttons;
