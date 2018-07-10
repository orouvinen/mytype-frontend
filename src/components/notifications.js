import React from 'react';
import { Link } from 'react-router';

function topResultNotification(notification) {
  return(
    <span>
      Rank <strong>#{notification.ranking+1}</strong> by <Link to={`/profile/${notification.user.id}`}>{notification.user.name}</Link> with
       WPM <strong>{notification.wpm.toFixed(1)}. </strong>
       <Link to={`/competition/${notification.competition}`}>Show competition</Link>
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
        <div>
          <a href="#" onClick={() => props.acknowledge(props.notifications.map(n => n.notificationId))}>
            <span className="fa fa-check-circle"></span> Remove all notifications
          </a>
        </div>
        <ul className="listGroup">
        {props.notifications.length === 0 
          ? <div>No notifications. Go cause some.</div>
          : props.notifications.map((n, i) =>
            <li key={i}>
              <a href="#" onClick={() => props.acknowledge([n.notificationId])}>
                <span className="fa fa-check" title="Acknowledge"></span>&nbsp;
              </a>
              {n.type === 'top_result' ? topResultNotification(n) :
              n.type === 'finished' ? competitionFinishedNotification(n) : null}
            </li>
        )}
        </ul>
      </div>
    </section>
  </div>;

export default Notifications;
