import TaskCreator from "./TaskCreator";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "<TaskCreator>",
  component: TaskCreator,
};

export const Default = () => <TaskCreator onSubmit={action("onSubmit")} />;
