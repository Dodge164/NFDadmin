import { ICategoryAction, IInitState } from '../../interfaces/interfaces';
import { CategoryTypes } from '../types/categoryTypes';

const initialState: IInitState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoryReducer = (
  state: IInitState = initialState,
  action: ICategoryAction,
) => {
  switch (action.type) {
    case CategoryTypes.FETCH_CATEGORY_START: {
      return { ...state, isLoading: true };
    }
    case CategoryTypes.FETCH_CATEGORY_SUCCESS: {
      return { ...state, categories: action.payload, isLoading: false };
    }
    case CategoryTypes.FETCH_CATEGORY_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
export default categoryReducer;
