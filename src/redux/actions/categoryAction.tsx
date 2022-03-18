import { Dispatch } from 'react';

import { getCarCategory } from '../../api/http';
import { CategoriesAction } from '../../interfaces/categoriesInterfaces';
import { CategoriesActionTypes } from '../types/categoryTypes';

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      dispatch({ type: CategoriesActionTypes.FETCH_CATEGORIES });
      const res = await getCarCategory();
      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setSelectedCategory(category: string): CategoriesAction {
  return { type: CategoriesActionTypes.SELECT_CATEGORY, payload: category };
}
