import React from 'react';
import './OverlayTimer.css';

const overlayTimer = (props) => {
  let classes = ["overlay-timer"];
  if (!props.active) classes.push("hidden");

  return (
    <div className={classes.join(' ')}>
      <div className="countdown">{props.time}</div>
    </div>
  )
}

export default overlayTimer;
