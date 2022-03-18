import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

// const middleware = [thunk];
// export default createStore(rootReducer, applyMiddleware(...middleware));

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
