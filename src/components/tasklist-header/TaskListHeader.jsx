import React from "react";
import PropTypes from "prop-types";
import { TASKLIST } from "../../utils/constantes";
import { TaskPropType } from "../../utils/prop-types";
import { TaskStatus } from "../../utils/task-status.const";

const TaskListHeader = ({ tasks }) => {
  if (!tasks.length) {
    return <h3>{TASKLIST.EMPTY_TASKLIST}</h3>;
  }

  const getTaskByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <h3>
      {!tasks.length ? (
        TASKLIST.EMPTY_TASKLIST
      ) : (
        <>
          Tasks ({getTaskByStatus(TaskStatus.Completed).length}/{tasks.length})
        </>
      )}
    </h3>
  );
};

TaskListHeader.propTypes = {
  tasks: PropTypes.arrayOf(TaskPropType).isRequired,
};
export default TaskListHeader;
