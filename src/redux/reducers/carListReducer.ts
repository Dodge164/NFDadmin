import { ICarListAction, IInitCarListState } from '../../interfaces/interfaces';
import { CarListTypes } from '../types/carListTypes';

const initialState: IInitCarListState = {
  carList: [],
  isLoading: false,
  error: null,
};

const carListReducer = (
  state: IInitCarListState = initialState,
  action: ICarListAction,
) => {
  switch (action.type) {
    case CarListTypes.FETCH_CARLIST_START: {
      return { ...state, isLoading: true };
    }
    case CarListTypes.FETCH_CARLIST_SUCCESS: {
      return { ...state, carList: action.payload, isLoading: false };
    }
    case CarListTypes.FETCH_CARLIST_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
export default carListReducer;
