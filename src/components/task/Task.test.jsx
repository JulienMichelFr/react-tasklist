import { render, unmountComponentAtNode } from "react-dom";
import React from "react";
import Task, { TaskStatus } from "./Task";
import { act } from "react-dom/test-utils";

let container = null;
describe("<Task>", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render", () => {
    act(() => {
      render(
        <Task title="title" content="content" status={TaskStatus.Todo} />,
        container
      );
    });
  });

  it("should have correct class on element", () => {
    act(() => {
      render(
        <Task title="title" content="content" status={TaskStatus.Todo} />,
        container
      );
    });
    const card = document.querySelector(".card");
    expect(card.classList).toContain(TaskStatus.Todo);
  });

  it("should have correct buttons", () => {
    act(() => {
      render(
        <Task title="title" content="content" status={TaskStatus.Todo} />,
        container
      );
    });

    const buttons = document.querySelectorAll("button");
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toEqual(TaskStatus.Completed);
    expect(buttons[1].textContent).toEqual(TaskStatus.InProgress);
  });

  it("should emit correct event", () => {
    const onStatusChange = jest.fn();

    act(() => {
      render(
        <Task
          title="title"
          content="content"
          status={TaskStatus.Todo}
          onStatusChange={onStatusChange}
        />,
        container
      );
    });

    const [completed, inProgress] = document.querySelectorAll("button");

    act(() => {
      completed.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onStatusChange).toHaveBeenCalledWith(TaskStatus.Completed);
    act(() => {
      inProgress.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onStatusChange).toHaveBeenCalledWith(TaskStatus.InProgress);
  });
});
