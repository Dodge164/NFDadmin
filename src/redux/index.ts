import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import navReducer from './reducers/navReducer';
import userReducer from './reducers/userReducer';
import carReducer from './reducers/carReducer';



const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
  carReducer: carReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
