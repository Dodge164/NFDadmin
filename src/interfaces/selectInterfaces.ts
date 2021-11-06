import { TableOrderActionTypes } from '../redux/types/tableOrderTypes';

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
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface IRateId {
  rateTypeId: { unit: string; name: string };
  price: number;
}
export interface IOrderStatusId {
  name: string;
  id: string;
  [key: string]: string | number;
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

export interface IInitTableOrderState {
  orderList: ITableOrder[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  limit: number;
  ordersCount: number;
  period: number;
  selectedPeriod: string;
}

interface FetchTableOrderAction {
  type: TableOrderActionTypes.FETCH_TABLE_ORDER;
}

interface FetchTableOrderActionSuccess {
  type: TableOrderActionTypes.FETCH_TABLE_ORDER_SUCCESS;
  payload: { count: number; data: ITableOrder[] };
}
interface FetchTableOrderActionError {
  type: TableOrderActionTypes.FETCH_TABLE_ORDER_ERROR;
  payload: string;
}
interface SetTableOrderPage {
  type: TableOrderActionTypes.SET_TABLE_ORDER_PAGE;
  payload: number;
}
interface SetTableOrderPeriod {
  type: TableOrderActionTypes.SET_TABLE_ORDER_PERIOD;
  payload: number;
}
interface SelectPeriod {
  type: TableOrderActionTypes.SELECT_PERIOD;
  payload: string;
}

export type TableOrderAction =
  | FetchTableOrderAction
  | FetchTableOrderActionError
  | FetchTableOrderActionSuccess
  | SetTableOrderPage
  | SelectPeriod
  | SetTableOrderPeriod;
