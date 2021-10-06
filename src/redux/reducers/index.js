import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import navReducer from './navReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  navReducer: navReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
