import { CarCardActionTypes } from '../redux/types/carCardTypes';
import { CarListActionTypes } from '../redux/types/carListTypes';

import { ICategoryId } from './categoriesInterfaces';

export interface ICar {
  name: string | null;
  categoryId: ICategoryId;
  priceMin: number;
  priceMax: number;
  colors: string[];
  description: string | null;
  thumbnail: IThumbnail;
  number: string | null;
  id: string | undefined;
  isCardSaved: boolean;
  isLoading: boolean;
  [key: string | number]: any;
}

export interface IThumbnail {
  path: string;
  size?: number;
  originalname?: string;
  mimetype?: string;
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

export interface IValue {
  key: string;
  value: string | number | string[] | IThumbnail | ICategoryId[] | ICategoryId;
}
interface SetSelectedCar {
  type: CarCardActionTypes.SET_SELECTED_CAR;
  payload: ICar;
}
interface ResetCar {
  type: CarCardActionTypes.RESET_CAR;
}

interface UpdateCard {
  type: CarCardActionTypes.UPDATE_CARD;
  payload: IValue;
}
interface PutCarFetching {
  type: CarCardActionTypes.PUT_CAR_FETCHING;
}
interface PutCarSuccess {
  type: CarCardActionTypes.PUT_CAR_SUCCESS;
}
interface PutCarError {
  type: CarCardActionTypes.PUT_CAR_ERROR;
  payload: string;
}
interface PostCarFetching {
  type: CarCardActionTypes.POST_CAR_FETCHING;
}
interface PostCarSuccess {
  type: CarCardActionTypes.POST_CAR_SUCCESS;
}
interface PostCarError {
  type: CarCardActionTypes.POST_CAR_ERROR;
  payload: string;
}
interface DeleteCarByIdFetching {
  type: CarCardActionTypes.DELETE_CAR_BY_ID_FETCHING;
}
interface DeleteCarByIdSuccess {
  type: CarCardActionTypes.DELETE_CAR_BY_ID_SUCCESS;
}
interface DeleteCarByIdError {
  type: CarCardActionTypes.DELETE_CAR_BY_ID_ERROR;
  payload: string;
}
//TODO
export type CarCardAction =
  | SetSelectedCar
  | ResetCar
  | UpdateCard
  | PutCarFetching
  | PutCarSuccess
  | PutCarError
  | PostCarFetching
  | PostCarSuccess
  | PostCarError
  | DeleteCarByIdFetching
  | DeleteCarByIdSuccess
  | DeleteCarByIdError;
