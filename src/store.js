import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Import reducers
import typingTest from './reducers/typing-test';
import index from './reducers/index';
import { authSaga } from './sagas/auth-saga';

const rootReducer = combineReducers({ typingTest, auth });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga);

export default store;
