import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tasklist from "./Tasklist";
import React from "react";
import { TASKLIST } from "../../utils/constantes";
import { TaskStatus } from "../task/Task";

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
    const tasks = [
      {
        id: 1,
        title: "Task 1",
        content: "Task 1 content",
        status: TaskStatus.Todo,
      },
      {
        id: 2,
        title: "Task 2",
        content: "Task 2 content",
        status: TaskStatus.InProgress,
      },
      {
        id: 3,
        title: "Task 3",
        content: "Task 3 content",
        status: TaskStatus.Completed,
      },
    ];
    act(() => {
      render(<Tasklist />, container);
    });
    const button = document.querySelector("button");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    let taskElements = document.querySelectorAll("[data-test-id=task]");
    const h3 = document.querySelector("h3");
    expect(taskElements.length).toEqual(1);
    expect(h3.textContent).toEqual("Tasks (1)");
  });
});
