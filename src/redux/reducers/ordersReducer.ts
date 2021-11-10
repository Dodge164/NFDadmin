import {
  OrdersAction,
  IInitOrdersState,
} from '../../interfaces/selectInterfaces';
import { OrdersActionTypes } from '../types/ordersTypes';

const initialState: IInitOrdersState = {
  orderList: [],
  isLoading: false,
  isChanging: false,
  error: null,
  currentPage: 0,
  limit: 6,
  ordersCount: 0,
  period: 0,
  selectedPeriod: '',
};

const orderReducer = (
  state = initialState,
  action: OrdersAction,
): IInitOrdersState => {
  switch (action.type) {
    case OrdersActionTypes.FETCH_ORDERS: {
      return { ...state, isLoading: true };
    }
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        orderList: action.payload.data,
        ordersCount: action.payload.count,
        isLoading: false,
      };
    }
    case OrdersActionTypes.FETCH_ORDERS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case OrdersActionTypes.SET_ORDERS_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case OrdersActionTypes.SET_ORDERS_PERIOD: {
      return { ...state, period: action.payload };
    }
    case OrdersActionTypes.SELECT_PERIOD: {
      return { ...state, selectedPeriod: action.payload };
    }
    case OrdersActionTypes.FETCH_ORDER_STATUS: {
      return { ...state, isChanging: true };
    }
    case OrdersActionTypes.FETCH_ORDER_STATUS_SUCCESS: {
      return { ...state, isChanging: false };
    }
    case OrdersActionTypes.FETCH_ORDER_STATUS_ERROR: {
      return { ...state, isChanging: false };
    }
    default:
      return state;
  }
};

export default orderReducer;
