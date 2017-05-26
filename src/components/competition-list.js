import React from 'react';
import CompetitionControls from './competition-controls';
import colors from '../colors';


const competitionControlsWrapper = {
  margin: "5px 0 5px 0",
  paddingRight: "1px",
  textAlign: "right",
};

const competitionListWrapper = {
  padding: "5px",
  background: colors.primary4,
  borderRadius: "1px",
};

const competitionListRowStyle = {
  backgroundColor: colors.primary3,
};

const selectedCompetitionStyle = {
  ...competitionListRowStyle,
  backgroundColor: "#a8bb40",
  color: colors.secondary4,
  fontWeight: "bold",
};

const competitionTableStyle = {
  width: "100%",
  margin: "10px 0 auto 0",
  /*border: `1px solid ${colors.secondary1}`,
  borderRadius: "3px",*/
};

const headerStyle = {
  padding: "10px",
  background: "linear-gradient(" + colors.primary1 + ", " + colors.primary3 + ")",
  borderRadius: "4px",
};

const timerDigits = value => ((value < 10) ? "0" : "") + Math.floor(value).toFixed(0);

const timeLeft = competition => {
  // Get creation time
  const start = new Date(competition.createdAt);
  // Work out end time
  const end = new Date(start);
  end.setDate(start.getDate() + (competition.duration / 24));

  const msLeft = end.getTime() - Date.now();
  const secsLeft = msLeft / 1000;
  let minsLeft = secsLeft / 60;
  const hoursLeft = minsLeft / 60;

  // Construct the timer string
  return timerDigits(hoursLeft) + ":" + timerDigits(minsLeft % 60);
};


const CompetitionList = props => {
  const competitions = props.competition.competitions;
  const ids = Object.keys(competitions);
  return (
    <div>
      <div style={competitionListWrapper}>
        <h2 style={headerStyle}>Competitions</h2>
        {ids.length === 0 ? <div><strong>No competitions running. Create one to get started!</strong></div> : null}
        <table style={competitionTableStyle}>
          <thead>
            <tr>
              <th>Language</th>
              <th>Time left</th>
              <th>Leader</th>
            </tr>
          </thead>
          <tbody>
            {ids.map(id => {
              const competition = competitions[id];
              return (
                <tr onClick={() => props.selectCompetition(id)}
                  key={id}
                  className="competitionListRow"
                  style={props.competition.selected === id
                    ? selectedCompetitionStyle
                    : competitionListRowStyle}>
                  <td>{competition.language}</td>
                  <td>{timeLeft(competition)}</td>
                  <td>{competition.results.length > 0 ?
                    competition.results[0].user.name + ` (${competition.results[0].wpm.toFixed(1)} WPM)` :
                    "-"}
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
      <div style={competitionControlsWrapper}>
        <CompetitionControls onCreateClicked={props.onCreateClicked} />
      </div>
    </div>);
}

export default CompetitionList;