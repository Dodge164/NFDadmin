import { CitiesAction, IInitCityState } from '../../interfaces/city';
import { CityActionTypes } from '../types/cityTypes';

const initialState: IInitCityState = {
  cityList: [],
  isLoading: false,
  selectedCity: '',
  error: null,
};

const cityReducer = (
  state = initialState,
  action: CitiesAction,
): IInitCityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITIES: {
      return { ...state, isLoading: true };
    }
    case CityActionTypes.FETCH_CITIES_SUCCESS: {
      return {
        ...state,
        cityList: action.payload.data,
      };
    }
    case CityActionTypes.FETCH_CITIES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case CityActionTypes.SELECT_CITY: {
      return { ...state, selectedCity: action.payload };
    }

    default:
      return state;
  }
};

export default cityReducer;
