import { setNavLink } from '../reducers/navReducer';

export const changeNavLink = (navItem) => {
  return async (dispatch) => {
    dispatch(setNavLink(navItem));
  };
};
