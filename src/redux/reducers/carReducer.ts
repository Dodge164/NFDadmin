import { Action } from '../actions/carAction';

interface IThumbnail {
  path: string;
}

interface ICategoryId {
  description?: string;
  id: string;
  name?: string;
}
export interface ICarState {
  priceMax: number;
  priceMin: number;
  thumbnail: IThumbnail;
  description: string;
  categoryId: ICategoryId;
  colors: string[];
  name: string;
  number: string;
}

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

const carReducer = (state: ICarState = initialState, action: Action) => {
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
