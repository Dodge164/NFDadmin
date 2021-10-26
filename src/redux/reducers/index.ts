import { combineReducers } from 'redux';

import navReducer from './navReducer';
import userReducer from './userReducer';
import carCardReducer from './carCardReducer';
import categoryReducer from './categoryReducer';
import carListReducer from './carListReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carCardReducer,
  categoryReducer: categoryReducer,
  carListReducer: carListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
