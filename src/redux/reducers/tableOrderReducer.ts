import {
  TableOrderAction,
  IInitTableOrderState,
} from '../../interfaces/selectInterfaces';
import { TableOrderActionTypes } from '../types/tableOrderTypes';

const initialState: IInitTableOrderState = {
  orderList: [],
  isLoading: false,
  error: null,
  currentPage: 0,
  limit: 10,
  ordersCount: 0,
};

const tableOrderReducer = (
  state = initialState,
  action: TableOrderAction,
): IInitTableOrderState => {
  switch (action.type) {
    case TableOrderActionTypes.FETCH_TABLE_ORDER: {
      return { ...state, isLoading: true };
    }
    case TableOrderActionTypes.FETCH_TABLE_ORDER_SUCCESS: {
      return {
        ...state,
        orderList: action.payload.data,
        ordersCount: action.payload.count,
        isLoading: false,
      };
    }
    case TableOrderActionTypes.FETCH_TABLE_ORDER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case TableOrderActionTypes.SET_TABLE_ORDER_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    default:
      return state;
  }
};

export default tableOrderReducer;