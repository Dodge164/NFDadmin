import { ICar } from '../../interfaces/carListInterfaces';
import { TCarCardAction } from '../actions/carCardAction';

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
  id: '',
};

const carCardReducer = (state: ICar = initialState, action: TCarCardAction) => {
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
export default carCardReducer;
