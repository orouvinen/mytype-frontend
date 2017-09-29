import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoard from '../components/leaderboard';
import { loadUsersRequest } from '../actions/user-data';

const showTopUsersCount = 50;

class LeaderBoardContainer extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return <LeaderBoard users={this.props.users.slice(0, showTopUsersCount)} />;
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