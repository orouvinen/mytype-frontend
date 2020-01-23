import React from 'react';
import colors from '../colors';


const competitionListWrapper = {
  padding: "5px",
  background: colors.primary2,
  border: `1px solid ${colors.primary1}`,
  borderRadius: "1px",
};

const competitionListRowStyle = {
};

const selectedCompetitionStyle = {
  ...competitionListRowStyle,
  backgroundColor: colors.complementary1,
};

const competitionTableStyle = {
  width: "100%",
  margin: "10px 0 auto 0",
};

const timerDigits = value => ((value < 10) ? "0" : "") + Math.floor(value).toFixed(0);

const timeLeft = competition => {
  const end = new Date(competition.finishAt);

  const msLeft = end.getTime() - Date.now();
  const secsLeft = msLeft / 1000;
  const minsLeft = secsLeft / 60;
  const hoursLeft = minsLeft / 60;

  return timerDigits(hoursLeft) + ":" + timerDigits(minsLeft % 60);
};


const CompetitionList = props => {
  const competitions = props.competition.competitions;
  const { page, itemsPerPage } = props;
  const firstItem = page * itemsPerPage; // First item (index) to show
  const ids =
    Object.keys(competitions)
      .map(Number)
      .slice(firstItem, firstItem + itemsPerPage);

  return (
    <div>
      <div style={competitionListWrapper}>
        <h2 className="headerBar">Competitions</h2>
        {ids.length === 0 ? <div><strong>No competitions running. Create one to get started!</strong></div> : null}
        <table style={competitionTableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Leader</th>
              <th>Time left</th>
            </tr>
          </thead>
          <tbody>
            {ids.map((id, i) => {
              const competition = competitions[id];
              return (
                <tr onClick={() => props.selectCompetition(id)}
                  key={id}
                  className="competitionListRow"
                  style={props.competition.selected === id
                    ? selectedCompetitionStyle
                    : competitionListRowStyle}>
                  <td>{firstItem + i + 1}</td>
                  <td>{competition.results.length > 0 ?
                    competition.results[0].user.name + ` (${competition.results[0].wpm.toFixed(1)} WPM)` :
                    "-"}
                  </td>
                  <td>{timeLeft(competition)}</td>
                </tr>);
            })}
          </tbody>
        </table>
        <button
          type="button"
          style={{width: "calc(100% - 10px)", margin: "10px 5px 5px 5px"}}
          onClick={props.onCreateClicked}>
          <span className="fa fa-plus"></span>&nbsp;Create competition
        </button>
        <span>{props.createCompetitionMessage ? props.createCompetitionMessage : ''}</span>
      </div>
    </div>);
}

export default CompetitionList;