import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Import reducers
import typingTest from './reducers/typing-test';
import index from './reducers/index';
import auth from './reducers/auth'
import competition from './reducers/competition';
import { reducer as formReducer } from 'redux-form';

import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import rootSaga from './sagas/index';

const rootReducer = combineReducers({
  typingTest,
  index,
  auth,
  competition,
  form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
));

// Only persist loggedIn-status and the possible user object from auth state
const authSubsetFilter = createFilter('auth', ['loggedIn', 'user']);

persistStore(store, {
  transforms: [ authSubsetFilter ],
  blacklist: ['typingTest', 'form']
});

sagaMiddleware.run(rootSaga);

export default store;
