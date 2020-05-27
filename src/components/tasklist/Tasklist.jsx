import React, { useState } from "react";
import { TASKLIST } from "../../utils/constantes";
import Task, { TaskStatus } from "../task/Task";
import { generateId } from "../../utils/functions";
import "./Tasklist.css";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const task = {
      id: generateId(),
      title: "Task title",
      content: "Task content",
      status: TaskStatus.Todo,
    };
    setTasks([...tasks, task]);
  };

  function getAddButton() {
    return (
      <button className="btn btn-primary btn-sm" onClick={addTask}>
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

  const handleTaskStatusChange = (task, status) => {
    setTasks(
      tasks.map((t) => {
        if (t.id !== task.id) {
          return t;
        }
        return {
          ...t,
          status,
        };
      })
    );
  };

  return (
    <div>
      <div>
        <h3>Tasks ({tasks.length})</h3>
        {getAddButton()}
      </div>
      <div>
        {tasks.map((task) => (
          <div data-test-id="task" className="m-b" key={task.id}>
            <Task
              status={task.status}
              content={task.content}
              title={task.title}
              onStatusChange={(status) => handleTaskStatusChange(task, status)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
