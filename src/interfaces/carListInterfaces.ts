import { CarCardActionTypes } from '../redux/types/carCardTypes';
import { CarListActionTypes } from '../redux/types/carListTypes';

import { ICategoryId } from './categoriesInterfaces';

export interface ICar {
  priceMax: number;
  priceMin: number;
  thumbnail: IThumbnail;
  description: string | null;
  categoryId: ICategoryId;
  colors: string[];
  name: string | null;
  number: string | null;
  id: string;
}

export interface IThumbnail {
  path: string;
}

export interface ICars {
  data: ICar[];
  count: number;
}

export interface IInitCarListState {
  carList: ICar[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  limit: number;
  carsCount: number;
}

interface FetchCarListAction {
  type: CarListActionTypes.FETCH_CARS;
}

interface FetchCarListActionSuccess {
  type: CarListActionTypes.FETCH_CARS_SUCCESS;
  payload: { count: number; data: ICar[] };
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

interface AddColor {
  type: CarCardActionTypes.ADD_COLOR;
  payload: string;
}
interface AddName {
  type: CarCardActionTypes.ADD_NAME;
  payload: string | null;
}
interface SetSelectedCar {
  type: CarCardActionTypes.SET_SELECTED_CAR;
  payload: ICar;
}

export type CarCardAction = AddColor | AddName | SetSelectedCar;
