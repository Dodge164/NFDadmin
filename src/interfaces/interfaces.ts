import { CarListActionTypes } from '../redux/types/carListTypes';
import { CategoryTypes } from '../redux/types/categoryTypes';

// http
export interface ICategories {
  data: Array<ICategoryId>;
}
export interface ICars {
  data: Array<ICar>;
}
// export interface ICars2 {
//   data: Array<IInitCarListState>;
// }

// objects I
export interface ICurrentUser {
  user_id: string | null;
}
export interface IThumbnail {
  path: string;
}
export interface ICategoryId {
  description?: string;
  id: string;
  name: string | null;
}

// States I
export interface IUserState {
  currentUser: ICurrentUser;
  isAuth: boolean;
}
export interface ICar {
  priceMax: number;
  priceMin: number;
  thumbnail: IThumbnail;
  description: string | null;
  categoryId: ICategoryId;
  colors: string[];
  name: string | null;
  number: string | null;
}
export interface IInitState {
  categories: Array<ICategoryId>;
  isLoading: boolean;
  error: string | null;
}
export interface IInitCarListState {
  carList: ICar[];
  isLoading: boolean;
  error: string | null;
  page: number;
  limit: number;
  // currentPage:1,
  // perPage:10,
  // totalCount:0
}

// Actions I
export interface ICategoryAction {
  type: CategoryTypes;
  payload: Array<ICategoryId>;
}
export interface ICarListAction {
  type: CarListActionTypes;
  payload: Array<ICar>;
}

// обрабатываем carList
// export interface CarListState {
//   cars: any[];
//   loading: boolean;
//   error: null | string;
//   page: number;
//   limit: number;
// }

interface FetchCarListAction {
  type: CarListActionTypes.FETCH_CARS;
}
interface FetchCarListActionSuccess {
  type: CarListActionTypes.FETCH_CARS_SUCCESS;
  payload: any[];
}
interface FetchCarListActionError {
  type: CarListActionTypes.FETCH_CARS_ERROR;
  payload: string;
}
interface SetCarListPage {
  type: CarListActionTypes.SET_CARLIST_PAGE;
  payload: number;
}

export type CarListAction =
  | FetchCarListAction
  | FetchCarListActionError
  | FetchCarListActionSuccess
  | SetCarListPage;
