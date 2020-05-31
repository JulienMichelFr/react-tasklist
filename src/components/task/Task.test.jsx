import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Task, { TaskStatus } from "./Task";

describe("<Task>", () => {
  const onStatusChange = jest.fn();

  beforeEach(() => {
    onStatusChange.mockClear();
  });

  it("should render", () => {
    render(
      <Task
        title="title"
        content="content"
        status={TaskStatus.Todo}
        onStatusChange={onStatusChange}
      />
    );
  });

  it("should have correct class on element", () => {
    const { getByTestId } = render(
      <Task
        title="title"
        content="content"
        status={TaskStatus.Todo}
        onStatusChange={onStatusChange}
      />
    );
    const card = getByTestId("task-container");
    expect(card.classList).toContain(TaskStatus.Todo);
  });

  it("should have correct buttons", () => {
    render(
      <Task
        title="title"
        content="content"
        status={TaskStatus.Todo}
        onStatusChange={onStatusChange}
      />
    );

    const buttons = document.querySelectorAll("button");
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toEqual(TaskStatus.Completed);
    expect(buttons[1].textContent).toEqual(TaskStatus.InProgress);
  });

  it("should emit correct event", () => {
    render(
      <Task
        title="title"
        content="content"
        status={TaskStatus.Todo}
        onStatusChange={onStatusChange}
      />
    );

    const [completed, inProgress] = document.querySelectorAll("button");

    fireEvent.click(completed);
    expect(onStatusChange).toHaveBeenCalledWith(TaskStatus.Completed);
    fireEvent.click(inProgress);
    expect(onStatusChange).toHaveBeenCalledWith(TaskStatus.InProgress);
  });
});
