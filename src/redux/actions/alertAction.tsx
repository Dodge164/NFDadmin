import { Dispatch } from 'react';

import { AlertAction, IInitAlert } from '../../interfaces/alert';
import { AlertActionType } from '../types/alertTypes';

export const setAlert = (alert: IInitAlert) => {
  return async (dispatch: Dispatch<AlertAction>) => {
    dispatch({
      type: AlertActionType.SET_ALERT,
      payload: alert,
    });
  };
};

export const closeAlert = () => {
  return async (dispatch: Dispatch<AlertAction>) => {
    dispatch({
      type: AlertActionType.SET_ALERT_CLOSE,
    });
  };
};
