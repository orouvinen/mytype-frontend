import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserProfile from '../components/user-profile';

class UserProfileContainer extends Component {
  render() {
    if (!this.props.loggedIn) {
      return(
        <div>
          Please <Link to='/login'>log in</Link> to access your profile!
        </div>
      );
    }
    return <UserProfile user={this.props.user} />
      
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
  };
}

export default connect(mapStateToProps)(UserProfileContainer);
