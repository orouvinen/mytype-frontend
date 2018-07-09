import React, { Component } from 'react';
import { connect } from 'react-redux';
import TypingTest from './typing-test-container';
import CompetitionResultList from '../components/competition-result-list';
import LinksPanel from '../containers/links-panel-container';
import * as layout from '../three-columns';
import * as actions from '../actions/competition';

class CompetitionPageContainer extends Component {
  componentDidMount() {
    // this.props.selectCompetition(this.props.params.competitionId);
    this.props.loadCompetition(this.props.params.competitionId);
  }

  componentWillUpdate(prevProps) {
    if (prevProps.params.competitionId !== this.props.params.competitionId)
      this.props.selectCompetition(this.props.params.competitionId);
  }

  render() {
    const id = this.props.params.competitionId;
    const competition = this.props.competition.competitions[id];
    if (!competition)
      return <div>Couldn't load the requested competition</div>;

    return (<div style={layout.layoutWrapper}>
      <div style={layout.leftColumn}>
        {/*<CompetitionResultList {...this.props} /> */}
        <CompetitionResultList competition={competition} />
      </div>

      <div style={layout.centerColumn}>
        <TypingTest content={competition.content} />
      </div>

      <div style={layout.rightColumn}>
        <LinksPanel />
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
    selectCompetition: competitionId => dispatch(actions.selectCompetition(competitionId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPageContainer);