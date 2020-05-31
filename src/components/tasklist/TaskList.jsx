import React from "react";
import PropTypes from "prop-types";
import Task from "../task/Task";
import "./TaskList.css";
import { TaskPropType } from "../../utils/prop-types";

const TaskList = ({ tasks, onTaskChange }) => {
  return (
    <>
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
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(TaskPropType).isRequired,
  onTaskChange: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
