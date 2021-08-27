import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';

import { compose, applyMiddleware, combineReducers, createStore } from 'redux';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  weatherReducer
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;