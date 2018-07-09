import React from 'react';
import { Link } from 'react-router';

function topResultNotification(notification) {
  return(
    <span>
      {notification.user.name} is ranked <strong>#{notification.ranking+1} </strong>
       with a WPM <strong>{notification.wpm.toFixed(1)}. </strong>
       <Link to={`/competition/${notification.competition}`}>Go to competition</Link>
    </span>
  );
}

function competitionFinishedNotification(notification) {
  return(
    <span>
      <Link to={`/competition/${notification.competition.id}`}>
        Competition
      </Link>&nbsp; you participated in was finished.
    </span>);
}

const Notifications = props =>
  (props.notifications && props.visible) &&
  <div className="notificationBar">
    <section>
      <h3 className="headerBar">Notifications</h3>
      <div className="barContent">
        <a href="#" onClick={props.hideNotifications}>
          <span className="fa fa-close"></span>&nbsp; Close
        </a>
        <ul className="listGroup">
        {props.notifications.length === 0 
          ? <div>No notifications. Go cause some.</div>
          : props.notifications.map((n, i) =>
            <li key={i}>
              {n.type === 'top_result' ? topResultNotification(n) :
              n.type === 'finished' ? competitionFinishedNotification(n) : null}
            </li>
        )}
        </ul>
      </div>
    </section>
  </div>;

export default Notifications;
