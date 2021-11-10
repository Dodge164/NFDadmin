import noPhoto from '../../../../../assets/noPhoto.png';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

import s from './card.module.scss';

function CardCar() {
  const car = useTypedSelector((state) => state.carReducer);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <div className={s.wrapper}>
      <div className={s.mobileWrapper}>
        <img
          // className={s.photo}
          src={
            car?.thumbnail?.path
              ? car?.thumbnail?.path.includes('base64')
                ? car?.thumbnail?.path
                : BASE_URL + car?.thumbnail?.path
              : noPhoto
          }
          alt="car-example"
        />
        <div className={s.name}>Модель</div>
        <div className={s.type}>Тип</div>
        <div className={s.file}>
          <input type="file" className={s.input} id="customFile" />
          <label className={s.label} htmlFor="customFile">
            <span className={s.textt}>Выберите файл...</span>
            <span className={s.button}>Обзор</span>
          </label>
        </div>
      </div>
      <div className={s.mobileWrapper}>
        <div className={s.progress}>
          <div className={s.progressInfo}>
            <div>Заполнено</div>
            <div>0%</div>
          </div>
          <div className={s.progressBar}>
            <div className={s.bar}></div>
          </div>
        </div>

        <div className={s.description}>
          <div className={s.title}>Описание</div>
          <div className={s.text}>Описание автомобиля...</div>
        </div>
      </div>
    </div>
  );
}

export default CardCar;
