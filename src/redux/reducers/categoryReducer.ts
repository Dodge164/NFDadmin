import {
  CategoriesAction,
  IInitCategoriesState,
} from '../../interfaces/categoriesInterfaces';
import { CategoriesActionTypes } from '../types/categoryTypes';

const initialState: IInitCategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
  selectedCategory: '',
};

const categoriesReducer = (
  state = initialState,
  action: CategoriesAction,
): IInitCategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES: {
      return { ...state, isLoading: true };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS: {
      return { ...state, categories: action.payload.data, isLoading: false };
    }
    case CategoriesActionTypes.FETCH_CATEGORIES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case CategoriesActionTypes.SELECT_CATEGORY: {
      return { ...state, selectedCategory: action.payload };
    }
    default:
      return state;
  }
};
export default categoriesReducer;
