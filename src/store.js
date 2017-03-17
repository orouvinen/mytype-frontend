import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Import reducers
import typingTest from './reducers/typing-test';
import index from './reducers/index';
import auth from './reducers/auth'
import { reducer as formReducer } from 'redux-form';

import rootSaga from './sagas/index';

const rootReducer = combineReducers({
  typingTest,
  index,
  auth,
  form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
