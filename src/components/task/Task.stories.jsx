import Task, { TaskStatus } from "./Task";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "<Task />",
  component: Task,
  decorators: [withKnobs],
};

function Wrapper({ children }) {
  return (
    <div className="m-2">
      <div style={{ width: 300 }}>{children}</div>
    </div>
  );
}

export const Default = () => (
  <Wrapper>
    <Task title="title" content="content" status={TaskStatus.Todo} />
  </Wrapper>
);

export const Completed = () => (
  <Wrapper>
    <Task title="title" content="content" status="completed" />
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
