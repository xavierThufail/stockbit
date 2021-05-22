import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './Reducers';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

  return store;
};

export default configureStore;
