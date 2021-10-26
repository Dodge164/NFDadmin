import { CarListAction, IInitCarListState } from '../../interfaces/interfaces';
import { CarListActionTypes } from '../types/carListTypes';

const initialState: IInitCarListState = {
  carList: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 7,
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
      return { ...state, carList: action.payload, isLoading: false };
    }
    case CarListActionTypes.FETCH_CARS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case CarListActionTypes.SET_CARLIST_PAGE: {
      return { ...state, page: action.payload };
    }
    default:
      return state;
  }
};
export default carListReducer;
