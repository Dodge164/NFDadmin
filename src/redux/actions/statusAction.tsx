import { Dispatch } from 'react';

import { getStatus } from '../../api/http';
import { StatusesAction } from '../../interfaces/status';
import { StatusActionTypes } from '../types/statusTypes';

export const fetchStatuses = () => {
  return async (dispatch: Dispatch<StatusesAction>) => {
    try {
      dispatch({ type: StatusActionTypes.FETCH_STATUS });
      const res = await getStatus();
      dispatch({
        type: StatusActionTypes.FETCH_STATUS_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: StatusActionTypes.FETCH_STATUS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setSelectedStatus(status: string): StatusesAction {
  return { type: StatusActionTypes.SELECT_STATUS, payload: status };
}
