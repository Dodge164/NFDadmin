import { Dispatch } from 'react';

import { getTableOrder } from '../../api/http';
import { TableOrderAction } from '../../interfaces/selectInterfaces';
import { TableOrderActionTypes } from '../types/tableOrderTypes';

export const fetchTableOrder = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<TableOrderAction>) => {
    try {
      dispatch({ type: TableOrderActionTypes.FETCH_TABLE_ORDER });
      const res = await getTableOrder(page, limit);
      dispatch({
        type: TableOrderActionTypes.FETCH_TABLE_ORDER_SUCCESS,
        payload: res,
      });
      console.log('test :>> ');
    } catch (error) {
      dispatch({
        type: TableOrderActionTypes.FETCH_TABLE_ORDER_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setTableOrderPage(page: number): TableOrderAction {
  return { type: TableOrderActionTypes.SET_TABLE_ORDER_PAGE, payload: page };
}
