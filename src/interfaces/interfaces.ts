import { CategoryTypes } from "../redux/types/categoryTypes";

// http
export interface IData { data : Array<ICategoryId>
}

// settings
export interface IThumbnail {
    path: string;
  }
  
export interface ICategoryId {
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
    colors: Array<string>;
    name: string;
    number: string;
  }

  // carReducer
  export interface IThumbnail {
    path: string;
  }
  
  export interface ICategoryId {
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

  // categoryReducer
  export interface IInitState {
    categories: Array<ICategoryId>;
    isLoading: boolean;
    error: string | null;
}

export interface ICategoryAction {
    type: CategoryTypes;
    payload: Array<ICategoryId>;
}