import { ICarState } from '../../interfaces/interfaces';
import { TCarAction } from '../actions/carAction';

const initialState = {
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
};

const carReducer = (state: ICarState = initialState, action: TCarAction) => {
  switch (action.type) {
    case 'ADD_COLOR': {
      return { ...state, colors: [...state.colors, action.payload] };
    }
    case 'ADD_NAME': {
      return { ...state, name: action.payload };
    }
    default:
      return state;
  }
};
export default carReducer;
