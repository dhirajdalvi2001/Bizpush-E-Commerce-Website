import React from "react";
import "./Actions.styles.css";

function Actions(props) {
  return (
    <div id="actions">
      <div className="time">{props.time}</div>
      <div className="action-title">{props.title}</div>
      <div className="action-content">{props.content}</div>
    </div>
  );
}

export default Actions;
