import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import SelectedCompetition from '../components/selected-competition';
import LinksPanel from '../containers/links-panel-container';
import paginate from '../containers/paginate';
import { randomText } from '../helpers/typing-test-content-gen';
import * as competitionActions from '../actions/competition';
import * as uiActions from '../actions/ui';
import * as layout from '../three-columns';

const competitionsPerPage = 10;

class MainPageContainer extends Component {
  constructor() {
    super();
    this.userCompetitionCount = this.userCompetitionCount.bind(this);
    this.state = { createCompetitionMessage: null };
  }

  createCompetition() {
    if (this.props.auth.loggedIn) {
      if (this.userCompetitionCount() >= 3)
        this.setState({ createCompetitionMessage:
          'You can have maximum of three running competitions at any time. ' +
          'Please wait until one of your created competitions has ended. '
        });
      else
        this.props.createCompetition("eng", randomText(10), this.props.auth.user);
    } else {
      this.setState({ createCompetitionMessage:
        'Please login to create a competition.'
      });
    }
  }

  userCompetitionCount() {
    const { competitions } = this.props.competition;

    return Object.keys(competitions)
      .filter(id => competitions[id].createdBy === this.props.auth.user.id)
      .length;
  }

  render() {
    const PagedCompetitionList =
      paginate(CompetitionList, this.props.ui.competitionListPage, this.props.competitionCount, competitionsPerPage);

    return (
      <div style={layout.layoutWrapper}>
        <div style={layout.leftColumn}>
          <SelectedCompetition {...this.props} />
        </div>
        <div style={layout.centerColumn}>
          <PagedCompetitionList
            onCreateClicked={this.createCompetition.bind(this)}
            createCompetitionMessage={this.state.createCompetitionMessage}            
            {...this.props} />
        </div>
        <div style={layout.rightColumn}><LinksPanel /></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    competition: state.competition,
    competitionCount: Object.keys(state.competition.competitions).length,
    ui: state.ui,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCompetition: (language, content, user) =>
      dispatch(competitionActions.requestCreateCompetition(language, content, user)),
    selectCompetition: id => dispatch(competitionActions.selectCompetition(id)),
    nextPage: () => dispatch(uiActions.competitionListNextPage()),
    prevPage: () => dispatch(uiActions.competitionListPrevPage()),
    setPage: pageNum => dispatch(uiActions.competitionListSetPage(pageNum)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);