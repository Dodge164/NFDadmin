import { Dispatch } from 'react';

import { CarCardAction, ICar } from '../../interfaces/carListInterfaces';
import { CarCardActionTypes } from '../types/carCardTypes';

export const addColor = (color: string) => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.ADD_COLOR,
      payload: color,
    });
  };
};
export const addName = (name: string) => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.ADD_NAME,
      payload: name,
    });
  };
};
export const setSelectedCar = (car: ICar) => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.SET_SELECTED_CAR,
      payload: car,
    });
  };
};
