import React from "react";
import { TASKLIST } from "../../utils/constantes";
import Task, { TaskStatus } from "../task/Task";
import { generateId } from "../../utils/functions";
import "./Tasklist.css";

const Tasklist = ({ tasks, onTaskChange, onNewTask }) => {
  const addTask = () => {
    const task = {
      id: generateId(),
      title: "Task title",
      content: "Task content",
      status: TaskStatus.Todo,
    };
    onNewTask(task);
  };

  function getAddButton() {
    return (
      <button
        data-testid="add-task"
        className="btn btn-primary btn-sm"
        onClick={addTask}
      >
        +
      </button>
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

export default Tasklist;
