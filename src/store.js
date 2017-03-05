import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Import reducers
import typingTest from './reducers/typing-test';
import auth from './reducers/auth';

const rootReducer = combineReducers({ typingTest, auth });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default store;
