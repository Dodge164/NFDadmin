import { CityActionTypes } from '../redux/types/cityTypes';

export interface ICity {
  name: string;
  id: string;
}

export interface ICities {
  data: ICity[];
}

export interface IInitCityState {
  cityList: ICity[];
  isLoading: boolean;
  error: null | string;
  selectedCity: string;
}

interface FetchCityAction {
  type: CityActionTypes.FETCH_CITIES;
}
interface SelectCityAction {
  type: CityActionTypes.SELECT_CITY;
  payload: string;
}

interface FetchCityActionSuccess {
  type: CityActionTypes.FETCH_CITIES_SUCCESS;
  payload: { data: ICity[] };
}
interface FetchCityActionError {
  type: CityActionTypes.FETCH_CITIES_ERROR;
  payload: string;
}

export type CitiesAction =
  | FetchCityAction
  | SelectCityAction
  | FetchCityActionSuccess
  | FetchCityActionError;
