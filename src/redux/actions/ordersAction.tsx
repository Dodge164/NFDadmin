import { Dispatch } from 'react';

import {
  getOrders,
  getOrdersByParams,
  IData,
  putOrderStatusById,
} from '../../api/http';
import { AlertAction } from '../../interfaces/alert';
import { OrdersAction } from '../../interfaces/selectInterfaces';
import { AlertActionType } from '../types/alertTypes';
import { OrdersActionTypes } from '../types/ordersTypes';
import { TypesAlert } from '../types/statusTypes';

export const fetchOrderStatus = (orderId: string, data: IData) => {
  return async (dispatch: Dispatch<OrdersAction | AlertAction>) => {
    try {
      dispatch({ type: OrdersActionTypes.FETCH_ORDER_STATUS });
      const res = await putOrderStatusById(orderId, data);
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
          type: OrdersActionTypes.FETCH_ORDER_STATUS_ERROR,
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
          type: OrdersActionTypes.FETCH_ORDER_STATUS_SUCCESS,
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
        type: OrdersActionTypes.FETCH_ORDER_STATUS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};
export const fetchOrders = (page: number = 1, limit: number = 6) => {
  return async (dispatch: Dispatch<OrdersAction>) => {
    try {
      dispatch({ type: OrdersActionTypes.FETCH_ORDERS });
      const res = await getOrders(page, limit);
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export const fetchOrdersByParams = (
  page: number = 1,
  limit: number = 6,
  selectedCity: string,
  selectedStatus: string,
  createdAt?: number,
) => {
  return async (dispatch: Dispatch<OrdersAction>) => {
    try {
      dispatch({ type: OrdersActionTypes.FETCH_ORDERS });
      const res = await getOrdersByParams(
        page,
        limit,
        selectedCity,
        selectedStatus,
        createdAt,
      );
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};

export function setOrdersPage(page: number): OrdersAction {
  return { type: OrdersActionTypes.SET_ORDERS_PAGE, payload: page };
}

export function setPeriod(period: number): OrdersAction {
  return {
    type: OrdersActionTypes.SET_ORDERS_PERIOD,
    payload: period,
  };
}
export function setSelectedPeriod(selectedPeriod: string): OrdersAction {
  return {
    type: OrdersActionTypes.SELECT_PERIOD,
    payload: selectedPeriod,
  };
}
