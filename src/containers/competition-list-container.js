import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import * as actions from '../actions/competition';

class CompetitionListContainer extends Component {
  createCompetition() {
    this.props.createCompetition();
  }
  render() {
    return (
        <CompetitionList onCreateClicked={this.createCompetition.bind(this)}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCompetition: () => dispatch(actions.requestCreateCompetition()),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListContainer);
