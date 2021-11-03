/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
import CustomPagination from '../../../../Pagination/CustomPagination';
import CustomSelect from '../../../../Select';
import { setSelectedCategory } from '../../../../../redux/actions/categoryAction';
import { ICar } from '../../../../../interfaces/carListInterfaces';
import { setCarListPage } from '../../../../../redux/actions/carListAction';
import Loading from '../../../../../Loading/Loading';

import s from './carList.module.scss';

const CarList: React.FC = () => {
  const dispatch = useDispatch();

  const { carList, error, isLoading, currentPage, limit } = useTypedSelector(
    (state) => state.carListReducer,
  );
  const { selected } = useTypedSelector((state) => state.categoriesReducer);
  const { fetchCarList, fetchCarListByCategory } = useActions();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (selected) {
      fetchCarListByCategory(currentPage, limit, selected);
    } else {
      fetchCarList(currentPage, limit);
    }
  }, [currentPage]);

  const handlerApplyClick = () => {
    if (selected) {
      fetchCarListByCategory(currentPage, limit, selected);
    } else {
      fetchCarList(currentPage, limit);
    }
    dispatch(setCarListPage(0));
  };

  const handlerResetClick = () => {
    fetchCarList(currentPage, limit);
    dispatch(setSelectedCategory(''));
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h2 className={s.warning}>{error}</h2>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.filter}>
          <CustomSelect />
        </div>
        <div className={s.buttonGroup}>
          <button onClick={handlerResetClick} className={s.reset}>
            Reset
          </button>
          <button onClick={handlerApplyClick} className={s.apply}>
            Apply
          </button>
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
            {console.log('carList :>> ', carList)}
            {carList.map((car: ICar) => (
              <tr key={car.id}>
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
        <CustomPagination />
      </div>
    </div>
  );
};

export default CarList;
