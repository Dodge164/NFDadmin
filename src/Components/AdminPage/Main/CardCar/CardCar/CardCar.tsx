/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from 'react-redux';

import noPhoto from '../../../../../assets/noPhoto.png';
import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { IThumbnail } from '../../../../../interfaces/carListInterfaces';
import CustomProgress from '../../../../ProgressBar';

import s from './card.module.scss';

export default function CardCar() {
  const dispatch = useDispatch();
  const car = useTypedSelector((state) => state.carReducer);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { updateCard } = useActions();

  function convertBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleSelectFile = async (event: any) => {
    const file = event.target.files[0];
    // console.log('file :>> ', file);
    // console.log('e.t.f :>> ', event.target.files);
    // console.log('event :>> ', event);
    const base64 = await convertBase64(file);
    const path: IThumbnail = {
      path: base64 as string,
      size: file.size,
      originalname: file.name,
      mimetype: file.type,
    };
    updateCard({ key: 'thumbnail', value: path });
  };

  const handleProgress = () => {
    let progress = 0;
    if (car.name) {
      progress += 10;
    }
    if (car?.categoryId?.id) {
      //TODO check ?
      progress += 15;
    }
    if (car.priceMin && car.priceMin !== 0) {
      progress += 15;
    }
    if (car.priceMax !== 0) {
      progress += 15;
    }
    if (car.colors.length !== 0) {
      progress += 15;
    }
    if (car.description) {
      progress += 15;
    }
    if (car?.thumbnail?.path) {
      //TODO
      progress += 15;
    }
    return progress;
  };
  return (
    <div className={s.wrapper}>
      <div className={s.mobileWrapper}>
        <img
          src={
            car?.thumbnail?.path
              ? car?.thumbnail?.path.includes('base64')
                ? car?.thumbnail?.path
                : BASE_URL + car?.thumbnail?.path
              : noPhoto
          }
          alt="car-example"
        />
        <div className={s.name}>{car?.name}</div>
        <div className={s.type}>{car?.categoryId?.name}</div>
        <div className={s.file}>
          <input
            type="file"
            className={s.input}
            id="customFile"
            onChange={(event) => {
              handleSelectFile(event);
            }}
          />
          <label className={s.label} htmlFor="customFile">
            <span className={s.textt}>Выберите файл...</span>
            <span className={s.button}>Обзор</span>
          </label>
        </div>
      </div>
      <div className={s.mobileWrapper}>
        <CustomProgress progress={handleProgress()} />
        <div className={s.description}>
          <div className={s.title}>Описание</div>
          <div className={s.text}>{car?.description}</div>
        </div>
      </div>
    </div>
  );
}
