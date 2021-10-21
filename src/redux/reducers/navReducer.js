const SET_NAVLINK = 'SET_NAVLINK';

const defaultState = {
  currentNavLink: {
    title: 'Карточка автомобиля',
    id: 0,
  },
};

export default function navReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NAVLINK:
      return {
        ...state,
        currentNavLink: action.payload,
      };

    default:
      return state;
  }
}

// action ?? reducer
export const setNavLink = (link) => ({
  type: SET_NAVLINK,
  payload: link,
});
