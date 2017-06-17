import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import { randomText } from '../helpers/typing-test-content-gen';
import * as actions from '../actions/competition';


class CompetitionListContainer extends Component {
  createCompetition() {
    this.props.createCompetition("eng", randomText(50));
  }

  render() {
    return (
        <CompetitionList
          onCreateClicked={this.createCompetition.bind(this)}
          {...this.props} />
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
    createCompetition: (language, content) =>
      dispatch(actions.requestCreateCompetition(language, content)),
    
    selectCompetition: id => dispatch(actions.selectCompetition(id))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionListContainer);
