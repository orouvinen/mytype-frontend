import React from 'react';
import CommonData from './common-data';
import * as layout from '../three-columns';
import colors from '../colors';
import LinksPanel from '../containers/links-panel-container';

const profileWrapper = {
  padding: "10px",
  border: `1px solid ${colors.primary1}`,
  borderRadius: "1px",
  width: "100%",
};

const profileBody = {
  fontSize: "1.2em",
  marginTop: "10px",
  color: colors.primary3,
  padding: "10px",
  backgroundColor: colors.complementary1,
  boxShadow: `2px 3px 13px ${colors.primary4}`,
};

const UserProfile = ({ user, stats }) => {
  if (!user || !stats) {
    return(
    <div style={layout.layoutWrapper}>
      <div style={profileWrapper}>Fetching user data...</div>
    </div>);
  }
  return (
    <div style={layout.layoutWrapper}>
      <div style={{...layout.rightColumn, marginLeft: "15px"}}>
        <LinksPanel />
      </div>
      <div style={layout.centerColumn}>
        <div className="borderedContainer">
          <h1 className="headerBar"><span className="fa fa-user-o"></span>&nbsp;{user.name}</h1>
          <div style={profileBody}>
            <CommonData heading="Ranking">{stats.topPct}</CommonData>
            <CommonData heading="WPM">{user.avgWpm.toFixed(1)}</CommonData>
            <CommonData heading="Accuracy">{user.avgAcc.toFixed(0)}%</CommonData>
            <CommonData heading="Typing tests typed">{user.numTypingTests}</CommonData>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
