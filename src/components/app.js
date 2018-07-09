import React from 'react';
import { Link } from 'react-router';
import colors from '../colors';
import Notifications from '../containers/notifications-container';

const headerStyle = {
  background: `linear-gradient(${colors.secondary1}, ${colors.secondary2})`,
  fontWeight: "bold",
  color: "white",
  padding: "10px",
  margin: "0 auto 10px auto",
  fontSize: "1.2em",
  height: "60px",
};

const titleWrapper = {
  float: "left",
};

const headerLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.2em",
};

const headerAppTitle = "mytype";

function notAcknowledgedNotificationCount(notifications) {
  return notifications
    .filter(n => !n.acknowledged)
    .length;
}

const App = props => (
  <div>
    <header style={headerStyle}>
      <div style={titleWrapper}>
        <h2><Link style={headerLinkStyle} to="/">{headerAppTitle}</Link></h2>
        <div style={{ fontSize: "0.75em", color: "white" }}>
          <a href="#" onClick={props.showNotifications}>Notifications ({notAcknowledgedNotificationCount(props.notifications)})</a>
        </div>
      </div>
    </header>
    <Notifications />
    {React.cloneElement(props.children, props)}
  </div>
);

export default App;
