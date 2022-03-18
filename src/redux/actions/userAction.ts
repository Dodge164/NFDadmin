import axios from 'axios';

import { setUser } from '../reducers/userReducer';

const base = window.btoa(
  unescape(encodeURIComponent(`random:${process.env.REACT_APP_SECRET}`)),
);

export type TUserAction = { type: 'SET_USER'; payload: string };

export const login = (username: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login/`,
        {
          username,
          password,
        },
        {
          headers: {
            'X-Api-Factory-Application-Id': process.env
              .REACT_APP_X_API_FACTORY_APPLICATION_ID
              ? process.env.REACT_APP_X_API_FACTORY_APPLICATION_ID
              : '',
            Authorization: `Basic ${base}`,
          },
        },
      );

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      dispatch(setUser(response.data.user_id));
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};

// export const auth = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}auth/auth`,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         }
//       );
//       dispatch(setUser(response.data.user));
//       localStorage.setItem('token', response.data.token);
//     } catch (e) {
//       alert(e.response.data.message);
//       localStorage.removeItem('token');
//     }
//   };
// };
