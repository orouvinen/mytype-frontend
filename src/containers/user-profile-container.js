import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { loadUsers } from '../fetch/users';

class UserProfileContainer extends Component {
  constructor() {
    super();
    /* Just keep the user data in local state for now */
    this.state = {
      profileUser: null,
      userStats: {
        topPct: 0,
      },
      users: [],
    };
  }

  componentDidMount() {
    loadUsers('wpm', 'desc')
    .then(response => response.json())
    .then(users => {
      const userId = parseInt(this.props.params.userId, 10);

      this.setState({
        profileUser: users.find(u => u.id === userId),
        users,
      }, () => {
        this.setState({ userStats: { topPct: this.userPos() } })
      });
    });
  }

  userPos() {
    let pos;
    pos = this.state.users.indexOf(this.state.profileUser);
    if (pos === -1)
      return "-"; // shouldn't happen
    
    return (pos + 1).toString() + " / " + this.state.users.length;
  }

  render() {
    return <UserProfile user={this.state.profileUser} stats={this.state.userStats} />
  }
}


function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  };
}

export default connect(mapStateToProps)(UserProfileContainer);
