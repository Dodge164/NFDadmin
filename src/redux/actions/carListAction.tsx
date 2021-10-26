import { getCarList } from '../../api/http';
import { CarListTypes } from '../types/carListTypes';

// interface IError {
//     message: string;
//     name: string;
//     stack: string;
//     status: number;
// }

export const fetchCarList = () => {
  return async (dispatch: any) => {
    dispatch({ type: CarListTypes.FETCH_CARLIST_START });
    try {
      const res = await getCarList();
      dispatch({ type: CarListTypes.FETCH_CARLIST_SUCCESS, payload: res });
    } catch (error: any) {
      dispatch({
        type: CarListTypes.FETCH_CARLIST_FAILURE,
        payload: error.message,
      });
    }
  };
};
