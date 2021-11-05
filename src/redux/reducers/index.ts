import { combineReducers } from 'redux';

import navReducer from './navReducer';
import userReducer from './userReducer';
import carCardReducer from './carCardReducer';
import categoriesReducer from './categoryReducer';
import carListReducer from './carListReducer';
import tableOrderReducer from './tableOrderReducer';
import statusReducer from './statusReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carCardReducer,
  categoriesReducer: categoriesReducer,
  carListReducer: carListReducer,
  tableOrderReducer: tableOrderReducer,
  statusReducer: statusReducer,
  cityReducer: cityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
