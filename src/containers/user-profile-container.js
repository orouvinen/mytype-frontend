import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/user';
import UserProfile from '../components/user-profile';
import { loadUser } from '../fetch/user';

class UserProfileContainer extends Component {
  constructor() {
    super();
    /* Just keep the user data in local state for now */
    this.state = {
      profileUser: null,
    };
  }

  componentDidMount() {
    loadUser(this.props.params.userId)
    .then(response => {
      response.json().then(data => this.setState({ profileUser: data.user }));
    });
  }

  render() {
    if (!this.props.loggedIn) {
      return(
        <div>
          Please <Link to='/login'>log in</Link> to access your profile!
        </div>
      );
    }
    if (!this.state.profileUser) {
      return <div>Loading...</div>;
    }
    return <UserProfile user={this.state.profileUser} />
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUser: () => actions.requestUserLoad(),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
