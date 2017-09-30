import React from 'react';
import * as layout from '../three-columns';
import { layoutWrapper } from '../layout-wrapper';
import LinksPanel from '../containers/links-panel-container';

const leaderBoardTableStyle = {
  width: "85%", 
  margin: "10px auto",
};

const topTenStyle = {
  fontSize: "1.3em",
  fontWeight: "bold",
};


const LeaderBoard = ({ users }) => {
  return (
    <div style={layoutWrapper}>
      <div style={layout.rightColumn}>
        <LinksPanel />
      </div>
      <div style={layout.centerColumn}>
        <h1 className="headerBar">Leaderboard</h1>
        <div className="borderedContainer">
          <h2>Fastest typists</h2>
          <table className="borderedContainer" style={leaderBoardTableStyle}>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>WPM</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => {
                const rowStyle = i < 10 ? topTenStyle : {};
                return (
                  <tr style={rowStyle} key={i}>
                    <td>{i + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.avgWpm.toFixed(1)}</td>
                  </tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>);
};

export default LeaderBoard;