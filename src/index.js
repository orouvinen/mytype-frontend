import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
//import App from './containers/app-container';
import App from './components/app';
import MainPage from './containers/main-page-container';
import NotFound from './components/not-found';
import CompetitionPage from './containers/competition-page-container';
import SignUp from './containers/sign-up-container';
import Login from './containers/login-container';
import Logout from './containers/logout-container';
import UserProfile from './containers/user-profile-container';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/competition/:competitionId" component={CompetitionPage} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile/:userId" component={UserProfile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
