import { createStore, combineReducers } from 'redux';
import typingTest from './reducers/typing-test';

const rootReducer = combineReducers({ typingTest });

let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
