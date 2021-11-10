import { combineReducers } from 'redux';

import navReducer from './navReducer';
import userReducer from './userReducer';
import carCardReducer from './carCardReducer';
import categoriesReducer from './categoryReducer';
import carListReducer from './carListReducer';
import ordersReducer from './ordersReducer';
import statusReducer from './statusReducer';
import cityReducer from './cityReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carCardReducer,
  categoriesReducer: categoriesReducer,
  carListReducer: carListReducer,
  ordersReducer: ordersReducer,
  statusReducer: statusReducer,
  cityReducer: cityReducer,
  alertReducer: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
