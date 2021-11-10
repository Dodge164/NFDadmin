import { CarCardAction, ICar } from '../../interfaces/carListInterfaces';
import { CarCardActionTypes } from '../types/carCardTypes';

const initialState: ICar = {
  priceMax: 0,
  priceMin: 0,
  thumbnail: {
    path: '',
  },
  description: '',
  categoryId: {
    description: '',
    id: '',
    name: '',
  },
  name: '',
  colors: [],
  number: '',
  id: '',
};

const carCardReducer = (
  state: ICar = initialState,
  action: CarCardAction,
): ICar => {
  switch (action.type) {
    case CarCardActionTypes.ADD_COLOR: {
      return { ...state, colors: [...state.colors, action.payload] };
    }
    case CarCardActionTypes.ADD_NAME: {
      return { ...state, name: action.payload };
    }
    case CarCardActionTypes.SET_SELECTED_CAR: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default carCardReducer;
