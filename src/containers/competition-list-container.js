import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';


class CompetitionListContainer extends Component {
  render() {
    return <CompetitionList />
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(CompetitionListContainer);
