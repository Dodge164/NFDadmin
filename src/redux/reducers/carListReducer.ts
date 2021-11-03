import {
  CarListAction,
  IInitCarListState,
} from '../../interfaces/carListInterfaces';
import { CarListActionTypes } from '../types/carListTypes';

const initialState: IInitCarListState = {
  carList: [],
  isLoading: false,
  error: null,
  currentPage: 0,
  limit: 5,
  carsCount: 0,
};

const carListReducer = (
  state = initialState,
  action: CarListAction,
): IInitCarListState => {
  switch (action.type) {
    case CarListActionTypes.FETCH_CARS: {
      return { ...state, isLoading: true };
    }
    case CarListActionTypes.FETCH_CARS_SUCCESS: {
      return {
        ...state,
        carList: action.payload.data,
        carsCount: action.payload.count,
        isLoading: false,
      };
    }
    case CarListActionTypes.FETCH_CARS_ERROR: {
      return {
        ...state,
        isLoading: false,
        // isLoading: true,
        error: action.payload,
      };
    }
    case CarListActionTypes.SET_CARLIST_PAGE: {
      return { ...state, currentPage: action.payload };
    }

    default:
      return state;
  }
};
export default carListReducer;
