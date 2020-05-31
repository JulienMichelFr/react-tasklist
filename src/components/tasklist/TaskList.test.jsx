import TaskList from "./TaskList";
import React from "react";
import { ALL_TASKS } from "../../tests/fixtures/tasks.fixtures";
import { fireEvent, render } from "@testing-library/react";

describe("<Tasklist>", function () {
  const onTaskChange = jest.fn();
  const onNewTask = jest.fn();
  beforeEach(() => {
    onTaskChange.mockClear();
    onNewTask.mockClear();
  });

  afterEach(() => {});

  it("should display tasks", () => {
    const { getAllByTestId } = render(
      <TaskList tasks={ALL_TASKS} onTaskChange={onTaskChange} />
    );
    const taskElements = getAllByTestId("task");
    expect(taskElements.length).toEqual(3);
  });

  it("should dispatch onTaskChange event", () => {
    const { getAllByTestId } = render(
      <TaskList tasks={ALL_TASKS} onTaskChange={onTaskChange} />
    );
    const addButton = getAllByTestId("change-status-button-completed");
    fireEvent(addButton[0], new MouseEvent("click", { bubbles: true }));

    expect(onTaskChange).toHaveBeenCalled();
  });
});
