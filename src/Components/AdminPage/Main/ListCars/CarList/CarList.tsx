/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
import CustomPagination from '../../../../Pagination/CustomPagination';
import { setSelectedCategory } from '../../../../../redux/actions/categoryAction';
import { setCarListPage } from '../../../../../redux/actions/carListAction';
import Loading from '../../../../../Loading/Loading';

import CarSelect from './CarSelect';
import s from './carList.module.scss';
import Car from './Car';

const CarList: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchCarList, fetchCarListByCategory } = useActions();
  const { error, isLoading, currentPage, limit, carsCount } = useTypedSelector(
    (state) => state.carListReducer,
  );
  const { selectedCategory } = useTypedSelector(
    (state) => state.categoriesReducer,
  );

  useEffect(() => {
    if (selectedCategory) {
      fetchCarListByCategory(currentPage, limit, selectedCategory);
    } else {
      fetchCarList(currentPage, limit);
    }
  }, [currentPage]);

  const handleChangePage = (currentPageCars: number) => {
    dispatch(setCarListPage(currentPageCars - 1));
  };

  const handlerApplyClick = () => {
    if (selectedCategory) {
      fetchCarListByCategory(currentPage, limit, selectedCategory);
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
          <CarSelect />
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
        <Car />
      </div>

      <div className={s.footer}>
        <CustomPagination
          currentPage={currentPage}
          limit={limit}
          counter={carsCount}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default CarList;
