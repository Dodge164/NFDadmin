import { Dispatch } from 'react';

import { deleteCarById, postNewCar, putCarById } from '../../api/http';
import { AlertAction } from '../../interfaces/alert';
import {
  CarCardAction,
  ICar,
  IValue,
} from '../../interfaces/carListInterfaces';
import { AlertActionType } from '../types/alertTypes';
import { CarCardActionTypes } from '../types/carCardTypes';
import { TypesAlert } from '../types/statusTypes';

export const setSelectedCar = (car: ICar) => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.SET_SELECTED_CAR,
      payload: car,
    });
  };
};
export const resetCar = () => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.RESET_CAR,
    });
  };
};

export const updateCard = (value: IValue) => {
  return async (dispatch: Dispatch<CarCardAction>) => {
    dispatch({
      type: CarCardActionTypes.UPDATE_CARD,
      payload: value,
    });
  };
};

export const fetchUpdateCard = (carId: string, data: ICar) => {
  return async (dispatch: Dispatch<CarCardAction | AlertAction>) => {
    try {
      dispatch({ type: CarCardActionTypes.PUT_CAR_FETCHING });
      const res = await putCarById(carId, data);
      if (res.status !== 200) {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Невалидные данные',
            isShow: true,
            type: TypesAlert.ERROR,
          },
        });
        dispatch({
          type: CarCardActionTypes.PUT_CAR_ERROR,
          payload: 'Произошла ошибка при загрузке',
        });
      } else {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Успех! Машина сохранена',
            isShow: true,
            type: TypesAlert.SUCCESS,
          },
        });
        dispatch({
          type: CarCardActionTypes.PUT_CAR_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: AlertActionType.SET_ALERT,
        payload: {
          message: 'Упc',
          isShow: true,
          type: TypesAlert.ERROR,
        },
      });
      dispatch({
        type: CarCardActionTypes.PUT_CAR_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};

export const fetchNewCard = (data: ICar) => {
  return async (dispatch: Dispatch<CarCardAction | AlertAction>) => {
    try {
      dispatch({ type: CarCardActionTypes.POST_CAR_FETCHING });
      const res = await postNewCar(data);
      if (res.status !== 200) {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Невалидные данные',
            isShow: true,
            type: TypesAlert.ERROR,
          },
        });
        dispatch({
          type: CarCardActionTypes.POST_CAR_ERROR,
          payload: 'Произошла ошибка при загрузке',
        });
      } else {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Успех! Машина сохранена',
            isShow: true,
            type: TypesAlert.SUCCESS,
          },
        });
        dispatch({
          type: CarCardActionTypes.POST_CAR_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: AlertActionType.SET_ALERT,
        payload: {
          message: 'Упc',
          isShow: true,
          type: TypesAlert.ERROR,
        },
      });
      dispatch({
        type: CarCardActionTypes.POST_CAR_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};

export const fetchDeleteCard = (carId: string) => {
  return async (dispatch: Dispatch<CarCardAction | AlertAction>) => {
    try {
      dispatch({ type: CarCardActionTypes.DELETE_CAR_BY_ID_FETCHING });
      const res = await deleteCarById(carId);
      if (res.status !== 200) {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Невалидные данные',
            isShow: true,
            type: TypesAlert.ERROR,
          },
        });
        dispatch({
          type: CarCardActionTypes.DELETE_CAR_BY_ID_ERROR,
          payload: 'Произошла ошибка при загрузке',
        });
      } else {
        dispatch({
          type: AlertActionType.SET_ALERT,
          payload: {
            message: 'Успех! Машина удалена',
            isShow: true,
            type: TypesAlert.SUCCESS,
          },
        });
        dispatch({
          type: CarCardActionTypes.DELETE_CAR_BY_ID_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: AlertActionType.SET_ALERT,
        payload: {
          message: 'Упc',
          isShow: true,
          type: TypesAlert.ERROR,
        },
      });
      dispatch({
        type: CarCardActionTypes.DELETE_CAR_BY_ID_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
