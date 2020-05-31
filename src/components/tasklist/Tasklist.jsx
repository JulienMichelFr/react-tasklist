import React from "react";
import PropTypes from "prop-types";
import { CREATE_ROUTE, TASKLIST } from "../../utils/constantes";
import Task, { TaskStatus } from "../task/Task";
import "./Tasklist.css";
import { Link } from "react-router-dom";

const Tasklist = ({ tasks, onTaskChange, onNewTask }) => {
  function getAddButton() {
    return (
      <Link
        data-testid="add-task"
        className="btn btn-primary btn-sm"
        to={CREATE_ROUTE}
      >
        +
      </Link>
    );
  }

  if (!tasks?.length) {
    return (
      <>
        <h3>{TASKLIST.EMPTY_TASKLIST}</h3>
        {getAddButton()}
      </>
    );
  }

  return (
    <div>
      <div>
        <h3>Tasks ({tasks.length})</h3>
        {getAddButton()}
      </div>
      <div>
        {tasks.map((task) => (
          <div data-testid="task" className="m-b" key={task.id}>
            <Task
              status={task.status}
              content={task.content}
              title={task.title}
              onStatusChange={(status) => onTaskChange({ ...task, status })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Tasklist.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      status: PropTypes.oneOf(Object.values(TaskStatus)).isRequired,
    })
  ).isRequired,
  onTaskChange: PropTypes.func.isRequired,
};

export default Tasklist;
