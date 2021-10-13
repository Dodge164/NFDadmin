import classNames from "classnames";
import { getCarCategory } from "../../api/http";
import { CategoryTypes } from "../types/categoryTypes";

// interface IError {
//     message: string;
//     name: string;
//     stack: string;
//     status: number;
// }

export const fetchCategory = () => {
  return async (dispatch: any ) => {
   dispatch({ type: CategoryTypes.FETCH_CATEGORY_START});
   try {
       const  res = await getCarCategory()
       console.log('res:>> ', res);
       dispatch({type: CategoryTypes.FETCH_CATEGORY_SUCCESS, payload: res}) 
       }
       catch (error: any) {
        console.log('error', JSON.stringify(error));
        dispatch({type: CategoryTypes.FETCH_CATEGORY_FAILURE, payload: error.message})
       }
  }}

//   export const getTypesAction = () => {
//     return async (dispatch: Dispatch<ActionTypes>) => {
//       dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
//       try {
//         const response = await req<ITypesRequest>('getPokemonTypes', {});
  
//         dispatch({
//           type: PokemonsActionTypes.FETCH_TYPES_RESOLVE,
//           payload: response,
//         });
//       } catch (error) {
//         // eslint-disable-next-line no-console
//         console.log('error', error);
//         dispatch({
//           type: PokemonsActionTypes.FETCH_TYPES_REJECT,
//           payload: error,
//         });
//       }
//     };
//   };