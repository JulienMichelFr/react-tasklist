import TaskList from "./TaskList";
import React from "react";
import { Wrapper } from "../../utils/testing";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { ALL_TASKS } from "../../tests/fixtures/tasks.fixtures";
import { action } from "@storybook/addon-actions";

const onNewTask = action("onNewTask");
const onTaskChange = action("onTaskChange");

export default {
  title: "<Tasklist>",
  component: TaskList,
};

export const Empty = () => (
  <Wrapper>
    <TaskList onNewTask={onNewTask} onTaskChange={onTaskChange} />
  </Wrapper>
);

export const WithTasks = () => (
  <Wrapper>
    <TaskList
      tasks={ALL_TASKS}
      onNewTask={onNewTask}
      onTaskChange={onTaskChange}
    />
  </Wrapper>
);
