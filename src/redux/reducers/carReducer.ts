import { Action } from "../actions/carAction"



export interface ICarState {
  colors: string[],
  name: string,
}
 const initialState = {
   name: '',
   colors: [],
 }

 const carReducer = (state: ICarState = initialState, action: Action) => {
 switch(action.type){
   case 'ADD_COLOR': {
     return {...state, colors: [...state.colors, action.payload]}
   }
   case 'ADD_NAME': {
     return {...state, name: action.payload}
   } 
   default: 
    return state
 }
}
export default carReducer;