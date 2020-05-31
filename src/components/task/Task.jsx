import React from "react";
import PropTypes from "prop-types";
import "./Task.css";

export const TaskStatus = {
  Todo: "todo",
  Completed: "completed",
  InProgress: "in-progress",
};

const Task = ({ title, content, status, onStatusChange }) => {
  function makeClass() {
    return ["card", status].join(" ");
  }
  const statuses = getActions(status);

  return (
    <div data-testid="task-container" className={makeClass()}>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text">{content}</div>
        <hr />
        {statuses.map((s) => (
          <button
            data-testid={`change-status-button-${s}`}
            className="btn btn-primary btn-sm card-link"
            key={s}
            onClick={() => onStatusChange(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

function getActions(status) {
  return Object.values(TaskStatus).filter((v) => v !== status);
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  status: PropTypes.oneOf(Object.values(TaskStatus)).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default Task;
