import { combineReducers } from 'redux';

import navReducer from './navReducer';
import userReducer from './userReducer';
import carCardReducer from './carCardReducer';
import categoriesReducer from './categoryReducer';
import carListReducer from './carListReducer';
import tableOrderReducer from './tableOrderReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carCardReducer,
  categoriesReducer: categoriesReducer,
  carListReducer: carListReducer,
  tableOrderReducer: tableOrderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
