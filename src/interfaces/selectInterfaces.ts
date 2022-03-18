import { OrdersActionTypes } from '../redux/types/ordersTypes';

import { ICar } from './carListInterfaces';

export interface ITableOrder {
  orderStatusId: IOrderStatusId;
  cityId: ICityId;
  pointId: IPointId;
  carId: ICar;
  color: string;
  dateFrom: Date;
  dateTo: Date;
  rateId: IRateId;
  /* //TODO */
  price: number | null;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface IRateId {
  rateTypeId: { unit: string; name: string };
  /* //TODO */
  price: number | null;
}
export interface IOrderStatusId {
  id: string;
  [key: string]: string | number; // форма записи всех необязательных полей
}
export interface ICityId {
  name: string;
  [key: string]: string | number;
}
export interface IPointId {
  name: string;
  address: string;
  id: string;
}

export interface IOrders {
  data: ITableOrder[];
  count: number;
}

export interface IInitOrdersState {
  orderList: ITableOrder[];
  isLoading: boolean;
  isChanging: boolean;
  error: string | null;
  currentPage: number;
  limit: number;
  ordersCount: number;
  period: number;
  selectedPeriod: string;
}

interface FetchOrdersAction {
  type: OrdersActionTypes.FETCH_ORDERS;
}

interface FetchOrdersActionSuccess {
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS;
  payload: { count: number; data: ITableOrder[] };
}
interface FetchOrdersActionError {
  type: OrdersActionTypes.FETCH_ORDERS_ERROR;
  payload: string;
}
interface SetOrdersPage {
  type: OrdersActionTypes.SET_ORDERS_PAGE;
  payload: number;
}
interface SetOrdersPeriod {
  type: OrdersActionTypes.SET_ORDERS_PERIOD;
  payload: number;
}
interface SelectPeriod {
  type: OrdersActionTypes.SELECT_PERIOD;
  payload: string;
}
interface FetchOrderStatus {
  type: OrdersActionTypes.FETCH_ORDER_STATUS;
}
interface FetchOrderStatusSuccess {
  type: OrdersActionTypes.FETCH_ORDER_STATUS_SUCCESS;
}
interface FetchOrderStatusError {
  type: OrdersActionTypes.FETCH_ORDER_STATUS_ERROR;
  payload: string;
}

export type OrdersAction =
  | FetchOrdersAction
  | FetchOrdersActionError
  | FetchOrdersActionSuccess
  | SetOrdersPage
  | SelectPeriod
  | FetchOrderStatus
  | FetchOrderStatusSuccess
  | FetchOrderStatusError
  | SetOrdersPeriod;
