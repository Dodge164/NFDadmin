import { CarCardAction, ICar } from '../../interfaces/carListInterfaces';
import { CarCardActionTypes } from '../types/carCardTypes';

const initialState: ICar = {
  name: '',
  categoryId: {
    description: '',
    id: '',
    name: '',
  },
  priceMin: 0,
  priceMax: 0,
  colors: [],
  description: '',
  thumbnail: {
    path: '',
  },
  number: '',
  id: '',
  isCardSaved: false,
  isLoading: false,
};

const carCardReducer = (
  state: ICar = initialState,
  action: CarCardAction,
): ICar => {
  switch (action.type) {
    case CarCardActionTypes.SET_SELECTED_CAR: {
      return action.payload;
    }
    case CarCardActionTypes.RESET_CAR: {
      return initialState;
    }
    case CarCardActionTypes.UPDATE_CARD: {
      return {
        ...state,
        [`${action.payload.key}`]: action.payload.value,
      };
    }
    default:
      return state;
  }
};
export default carCardReducer;
