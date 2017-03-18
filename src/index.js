import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import MainLayout from './components/main-layout';
import NotFound from './components/not-found';
import SignUp from './containers/sign-up-container';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainLayout} />
        <Route path="/signup" component={SignUp}></Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
