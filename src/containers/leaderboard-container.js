import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoard from '../components/leaderboard';
import { loadUsersRequest } from '../actions/user-data';

class LeaderBoardContainer extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return <LeaderBoard users={this.props.users} />;
  }
}

function mapStateToProps(state) {
  return { users: state.users.users };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsersRequest('wpm', 'desc')),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LeaderBoardContainer);