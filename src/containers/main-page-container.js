import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import CompetitionResultList from '../components/competition-result-list';
import SelectedCompetition from '../components/selected-competition';
import { randomText } from '../helpers/typing-test-content-gen';
import * as competitionActions from '../actions/competition';
import * as layout from '../three-columns';


class MainPageContainer extends Component {
  createCompetition() {
    this.props.createCompetition("eng", randomText(50));
  }

  render() {
    return (
      <div style={layout.layoutWrapper}>
        <div style={layout.leftColumn}>
          <SelectedCompetition {...this.props} />
          <CompetitionResultList competition={this.props.competition} /> 
        </div>
        <div style={layout.centerColumn}>
          <CompetitionList
            onCreateClicked={this.createCompetition.bind(this)}
            {...this.props} />
        </div>
        <div style={layout.rightColumn}></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCompetition: (language, content) =>
      dispatch(competitionActions.requestCreateCompetition(language, content)),

    selectCompetition: id => dispatch(competitionActions.selectCompetition(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);