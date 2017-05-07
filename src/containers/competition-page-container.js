import React, { Component } from 'react';
import { connect } from 'react-redux';
import TypingTest from './typing-test-container';
import CompetitionResultList from '../components/competition-result-list';
import * as layout from '../two-columns';
import * as actions from '../actions/competition';

class CompetitionPage extends Component {
  componentDidMount() {
    this.props.loadCompetition(this.props.params.competitionId);
  }

  render() {
    if (!this.props.competition.selected)
      return null;

    const id = this.props.params.competitionId;
    const competition = this.props.competition.competitions[id];

    return (<div style={layout.layoutWrapper}>
      <div style={layout.sideBar}>
        <CompetitionResultList {...this.props} /> 
      </div>

      <div style={layout.mainContent}>
        <TypingTest content={competition.content} />
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCompetition: competitionId => dispatch(actions.requestLoadCompetition(competitionId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);