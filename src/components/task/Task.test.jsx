import { render, unmountComponentAtNode } from "react-dom";
import React from "react";
import Task from "./Task";
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

  it("should correctly render", () => {
    act(() => {
      render(<Task />, container);
    });
    expect(container.textContent).toBe("Hello world");
  });
});
