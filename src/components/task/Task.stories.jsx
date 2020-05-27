import Task, { TaskStatus } from "./Task";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Wrapper } from "../../utils/testing";

const TODO_TASK = {
  id: 1,
  title: "Task 1",
  content: "Task 1 content",
  status: TaskStatus.Todo,
};

const INPROGRESS_TASK = {
  id: 2,
  title: "Task 2",
  content: "Task 2 content",
  status: TaskStatus.InProgress,
};

const COMPLETED_TASK = {
  id: 3,
  title: "Task 3",
  content: "Task 3 content",
  status: TaskStatus.Completed,
};

export default {
  title: "<Task>",
  component: Task,
  decorators: [withKnobs],
};

export const Todo = () => (
  <Wrapper>
    <Task
      title={TODO_TASK.title}
      status={TODO_TASK.status}
      content={TODO_TASK.content}
    />
  </Wrapper>
);

export const InProgress = () => (
  <Wrapper>
    <Task
      title={INPROGRESS_TASK.title}
      status={INPROGRESS_TASK.status}
      content={INPROGRESS_TASK.content}
    />
  </Wrapper>
);

export const Completed = () => (
  <Wrapper>
    <Task
      title={COMPLETED_TASK.title}
      status={COMPLETED_TASK.status}
      content={COMPLETED_TASK.content}
    />
  </Wrapper>
);

export const Testable = () => (
  <Wrapper>
    <Task
      title={text("Title", "Task title")}
      content={text("Content", "Task content")}
      status={select("Status", TaskStatus, TaskStatus.Todo)}
      onStatusChange={action("Status Change")}
    />
  </Wrapper>
);
