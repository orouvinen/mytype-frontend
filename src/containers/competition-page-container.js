import React, { Component } from 'react';
import { connect } from 'react-redux';
import TypingTest from './typing-test-container';
import * as layout from '../two-columns';

class CompetitionPage extends Component {
  render() {
    if (!this.props.competition.selected)
      return null;

    const id = this.props.params.competitionId;
    const competition = this.props.competition.competitions.find(c => c.id.toString() === id);

    return (<div style={layout.layoutWrapper}>
      <div style={layout.sideBar}>
        {/* result list */}
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
  }
}

export default connect(mapStateToProps)(CompetitionPage);