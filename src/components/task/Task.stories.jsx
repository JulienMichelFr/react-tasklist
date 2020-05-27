import Task, { TaskStatus } from "./Task";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Wrapper } from "../../utils/testing";
import {
  COMPLETED_TASK,
  IN_PROGRESS_TASK,
  TODO_TASK,
} from "../../tests/fixtures/tasks.fixtures";

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
      title={IN_PROGRESS_TASK.title}
      status={IN_PROGRESS_TASK.status}
      content={IN_PROGRESS_TASK.content}
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
