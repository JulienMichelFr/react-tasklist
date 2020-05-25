import React from "react";
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
    <div className={makeClass()}>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text">{content}</div>
        <hr />
        {statuses.map((s) => (
          <button
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

export default Task;
