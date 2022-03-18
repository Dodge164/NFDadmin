import { Dispatch } from 'react';

import { getCityList } from '../../api/http';
import { CitiesAction } from '../../interfaces/city';
import { CityActionTypes } from '../types/cityTypes';

export const fetchCities = () => {
  return async (dispatch: Dispatch<CitiesAction>) => {
    try {
      dispatch({ type: CityActionTypes.FETCH_CITIES });
      const res = await getCityList();
      dispatch({
        type: CityActionTypes.FETCH_CITIES_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: CityActionTypes.FETCH_CITIES_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setSelectedCity(city: string): CitiesAction {
  return { type: CityActionTypes.SELECT_CITY, payload: city };
}
