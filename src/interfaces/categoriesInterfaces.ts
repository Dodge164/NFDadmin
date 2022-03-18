import { CategoriesActionTypes } from '../redux/types/categoryTypes';

export interface ICategoryId {
  description?: string;
  id: string;
  name: string | null;
}

export interface ICategories {
  data: ICategoryId[];
}

export interface IInitCategoriesState {
  categories: ICategoryId[];
  isLoading: boolean;
  error: string | null;
  selectedCategory: string;
}

interface FetchCategoriesAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES;
}
interface SelectCategoryAction {
  type: CategoriesActionTypes.SELECT_CATEGORY;
  payload: string;
}

interface FetchCategoriesActionSuccess {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: { data: ICategoryId[] };
}
interface FetchCategoriesActionError {
  type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

export type CategoriesAction =
  | FetchCategoriesAction
  | SelectCategoryAction
  | FetchCategoriesActionSuccess
  | FetchCategoriesActionError;
