import { TUserAction } from '../actions/userAction';
import { ICurrentUser, IUserState } from '../../interfaces/interfaces';

const SET_USER = 'SET_USER';
// const LOGOUT = 'LOGOUT';

const defaultState = {
  currentUser: {
    user_id: '',
  },
  isAuth: false,
  // isAuth: true,
};

export default function userReducer(
  state: IUserState = defaultState,
  action: TUserAction,
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: { user_id: action.payload },
        isAuth: true,
      };
    // case LOGOUT:
    //   localStorage.removeItem('token');
    //   return {
    //     ...state,
    //     currentUser: {},
    //     isAuth: false,
    //   };
    default:
      return state;
  }
}

export const setUser = (user: ICurrentUser) => ({
  type: SET_USER,
  payload: user,
});
// export const logout = () => ({ type: LOGOUT });
