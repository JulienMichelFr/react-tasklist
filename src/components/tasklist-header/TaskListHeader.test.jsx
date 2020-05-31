import TaskListHeader from "./TaskListHeader";
import React from "react";
import { render } from "@testing-library/react";
import { TASKLIST } from "../../utils/constantes";
import { ALL_TASKS } from "../../tests/fixtures/tasks.fixtures";

describe("<TaskListHeader>", () => {
  it("should display empty text", () => {
    render(<TaskListHeader tasks={[]} />);
    const h3 = document.querySelector("h3");
    expect(h3.textContent).toEqual(TASKLIST.EMPTY_TASKLIST);
  });

  it("should display correct task count", () => {
    render(<TaskListHeader tasks={ALL_TASKS} />);
    const h3 = document.querySelector("h3");
    expect(h3.textContent).toEqual("Tasks (1/3)");
  });
});
