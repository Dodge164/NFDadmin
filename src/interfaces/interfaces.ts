import { CategoryTypes } from '../redux/types/categoryTypes';

// http
export interface IData {
  data: Array<ICategoryId>;
}
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
  name?: string;
}

// States I
export interface IUserState {
  currentUser: ICurrentUser;
  isAuth: boolean;
}
export interface ICarState {
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

// Actions I
export interface ICategoryAction {
  type: CategoryTypes;
  payload: Array<ICategoryId>;
}
