/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
// import Pagination from '../../../../Pagination';
import Pagination2 from '../../../../Pagination/Pagination copy';

import s from './carList.module.scss';

const CarList: React.FC = () => {
  const { carList, error, isLoading, currentPage, limit } = useTypedSelector(
    (state) => state.carListReducer,
  );
  const { fetchCarList } = useActions();
  // const { fetchCarList, setCarListPage } = useActions();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchCarList(currentPage, limit);
  }, [currentPage]);

  if (isLoading) {
    return <h2>Идет загрузка...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.selectGroup}>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_01">filter_01.1</option>
            <option value="filter_01">filter_01.2</option>
            <option value="filter_01">filter_01.3</option>
            <option value="filter_01">filter_01.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_02">filter_02.1</option>
            <option value="filter_02">filter_02.2</option>
            <option value="filter_02">filter_02.3</option>
            <option value="filter_02">filter_02.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_03">filter_03.1</option>
            <option value="filter_03">filter_03.2</option>
            <option value="filter_03">filter_03.3</option>
            <option value="filter_03">filter_03.4</option>
          </select>
          <select className={s.select} name="filter_01" id="filter_01">
            <option value="filter_04">filter_04.1</option>
            <option value="filter_04">filter_04.2</option>
            <option value="filter_04">filter_04.3</option>
            <option value="filter_04">filter_04.4</option>
          </select>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.reset}>Reset</button>
          <button className={s.apply}>Apply</button>
        </div>
      </div>
      <div className={s.main}>
        <table>
          <thead>
            <tr>
              <th>Модель</th>
              <th>Фото</th>
              <th>Категория</th>
              <th>Цена мин</th>
              <th>Цена макс</th>
            </tr>
          </thead>
          <tbody>
            {carList.map((car) => (
              <tr key={car.thumbnail?.path}>
                <td className={s.title}>{car.name}</td>
                <td className={s.col}>
                  <img
                    className={s.photo}
                    src={
                      car?.thumbnail?.path.includes('base64')
                        ? car?.thumbnail?.path
                        : BASE_URL + car?.thumbnail?.path
                    }
                    alt="car-example"
                  />
                </td>
                <td className={s.col}>{car.categoryId?.name}</td>
                <td className={s.col}>{car.priceMin.toLocaleString('ru')}</td>
                <td className={s.col}>{car.priceMax.toLocaleString('ru')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={s.footer}>
        {/* <Pagination /> */}
        <Pagination2 />
      </div>
    </div>
  );
};

export default CarList;
