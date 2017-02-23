import { createStore, combineReducers } from 'redux';
import typingTest from './reducers/typing-test';
import auth from './reducers/auth';

const rootReducer = combineReducers({ typingTest, auth });

let store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
