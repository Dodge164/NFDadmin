import { combineReducers } from 'redux';

import navReducer from './navReducer';
import userReducer from './userReducer';
import carReducer from './carReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carReducer,
  categoryReducer: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
