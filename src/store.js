import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Import reducers
import typingTest from './reducers/typing-test';
import ui from './reducers/ui';
import auth from './reducers/auth';
import competition from './reducers/competition';
import users from './reducers/users';
import notification from './reducers/notification';
import { reducer as formReducer } from 'redux-form';

import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';
import createFilter from 'redux-persist-transform-filter';
import rootSaga from './sagas/index';

const rootReducer = combineReducers({
  typingTest,
  ui,
  auth,
  competition,
  users,
  notification,
  form: formReducer
});

const env = process.env.NODE_ENV || 'development';

let composeEnhancers = compose;
if (env === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
));

// Only persist loggedIn-status and the possible user object from auth state
const authSubsetFilter = createFilter('auth', ['loggedIn', 'user']);
const compSubsetFilter = createFilter('competition', ['selected', 'competitions']);

persistStore(store, {
  transforms: [ authSubsetFilter, compSubsetFilter ],
  blacklist: ['typingTest', 'form' ],
  storage: asyncSessionStorage,
});

sagaMiddleware.run(rootSaga);
store.dispatch({ type: 'INITIAL_LOAD' });

export default store;
