import { Dispatch } from 'react';

import { getTableOrder, getTableOrderByParams } from '../../api/http';
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
    } catch (error) {
      dispatch({
        type: TableOrderActionTypes.FETCH_TABLE_ORDER_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export const fetchTableOrderByParams = (
  page: number = 1,
  limit: number = 6,
  selectedCity: string,
  selectedStatus: string,
  createdAt?: number,
) => {
  return async (dispatch: Dispatch<TableOrderAction>) => {
    try {
      dispatch({ type: TableOrderActionTypes.FETCH_TABLE_ORDER });
      const res = await getTableOrderByParams(
        page,
        limit,
        selectedCity,
        selectedStatus,
        createdAt,
      );
      dispatch({
        type: TableOrderActionTypes.FETCH_TABLE_ORDER_SUCCESS,
        payload: res,
      });
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

export function setPeriod(period: number): TableOrderAction {
  return {
    type: TableOrderActionTypes.SET_TABLE_ORDER_PERIOD,
    payload: period,
  };
}
export function setSelectedPeriod(selectedPeriod: string): TableOrderAction {
  return {
    type: TableOrderActionTypes.SELECT_PERIOD,
    payload: selectedPeriod,
  };
}
