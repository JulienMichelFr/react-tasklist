import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tasklist from "./Tasklist";
import React from "react";
import { TASKLIST } from "../../utils/constantes";
import { ALL_TASKS } from "../../tests/fixtures/tasks.fixtures";

let container = null;
describe("<Tasklist>", function () {
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
      render(<Tasklist />, container);
    });
  });

  it("should display empty message", () => {
    act(() => {
      render(<Tasklist />, container);
    });
    const emptyTextMessage = document.querySelector("h3");
    expect(emptyTextMessage.textContent).toEqual(TASKLIST.EMPTY_TASKLIST);
  });

  it("should display tasks", () => {
    act(() => {
      render(<Tasklist tasks={ALL_TASKS} />, container);
    });
    const taskElements = document.querySelectorAll('[data-testid="task"]');
    expect(taskElements.length).toEqual(3);
  });

  it("should dispatch onNewTask event", () => {
    const onNewTask = jest.fn();
    act(() => {
      render(<Tasklist tasks={ALL_TASKS} onNewTask={onNewTask} />, container);
    });
    const addButton = document.querySelector('[data-testid="add-task"]');
    act(() => {
      addButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onNewTask).toHaveBeenCalled();
  });
});
