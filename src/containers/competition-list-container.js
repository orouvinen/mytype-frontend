import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import * as actions from '../actions/competition';

class CompetitionListContainer extends Component {
  createCompetition() {
    this.props.createCompetition();
  }

  competitionClicked(id) {
    this.props.selectCompetition(id);
  }

  render() {
    return (
        <CompetitionList
          competition={this.props.competition}
          competitionClicked={this.competitionClicked.bind(this)}
          onCreateClicked={this.createCompetition.bind(this)} />
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
    selectCompetition: id => dispatch(actions.selectCompetition(id))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListContainer);
