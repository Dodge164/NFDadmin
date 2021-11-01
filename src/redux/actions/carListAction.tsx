import { Dispatch } from 'react';

import { getCarList, getCarListByCategory } from '../../api/http';
import { CarListAction } from '../../interfaces/carListInterfaces';
import { CarListActionTypes } from '../types/carListTypes';

export const fetchCarList = (page: number = 1, limit: number = 7) => {
  return async (dispatch: Dispatch<CarListAction>) => {
    try {
      dispatch({ type: CarListActionTypes.FETCH_CARS });
      const res = await getCarList(page, limit);
      dispatch({ type: CarListActionTypes.FETCH_CARS_SUCCESS, payload: res });
    } catch (error) {
      dispatch({
        type: CarListActionTypes.FETCH_CARS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export const fetchCarListByCategory = (
  page: number = 1,
  limit: number = 7,
  categoryId: string,
) => {
  return async (dispatch: Dispatch<CarListAction>) => {
    try {
      dispatch({ type: CarListActionTypes.FETCH_CARS });
      const res = await getCarListByCategory(page, limit, categoryId);
      dispatch({ type: CarListActionTypes.FETCH_CARS_SUCCESS, payload: res });
    } catch (error) {
      dispatch({
        type: CarListActionTypes.FETCH_CARS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setCarListPage(page: number): CarListAction {
  return { type: CarListActionTypes.SET_CARLIST_PAGE, payload: page };
}
