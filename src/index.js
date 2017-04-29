import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './containers/app-container';
import MainPage from './components/main-page';
import NotFound from './components/not-found';
import CompetitionPage from './components/competition-page';
import SignUp from './containers/sign-up-container';
import Login from './containers/login-container';
import UserProfile from './containers/user-profile-container';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/competition" component={CompetitionPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={UserProfile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
