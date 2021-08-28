import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import favoritesReducer from './reducers/favoritesReducer';

import { compose, applyMiddleware, combineReducers, createStore } from 'redux';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  weatherReducer,
  favoritesReducer
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;