import React, { useState } from "react";
import Tasklist from "../components/tasklist/Tasklist";
import { generateId } from "../utils/functions";

const TasklistPage = () => {
  const [tasks, setTasks] = useState([]);

  function handleNewTask(task) {
    setTasks([...tasks, { ...task, id: generateId() }]);
  }

  function handleTaskChange(task) {
    const result = tasks.map((t) => {
      if (t.id !== task.id) {
        return t;
      }
      return {
        ...task,
        id: t.id,
      };
    });
    setTasks(result);
  }

  return (
    <div className="container">
      <Tasklist
        tasks={tasks}
        onNewTask={handleNewTask}
        onTaskChange={handleTaskChange}
      />
    </div>
  );
};

export default TasklistPage;
