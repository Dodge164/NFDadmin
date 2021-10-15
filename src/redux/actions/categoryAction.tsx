import { getCarCategory } from '../../api/http';
import { CategoryTypes } from '../types/categoryTypes';

// interface IError {
//     message: string;
//     name: string;
//     stack: string;
//     status: number;
// }

export const fetchCategory = () => {
  return async (dispatch) => {
    dispatch({ type: CategoryTypes.FETCH_CATEGORY_START });
    try {
      const res = await getCarCategory();
      dispatch({ type: CategoryTypes.FETCH_CATEGORY_SUCCESS, payload: res });
    } catch (error: any) {
      dispatch({
        type: CategoryTypes.FETCH_CATEGORY_FAILURE,
        payload: error.message,
      });
    }
  };
};
