import TaskCreator from "./TaskCreator";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TaskStatus } from "../task/Task";

function getInputs() {
  const title = document.getElementById("title");
  const status = document.getElementById("status");
  const content = document.getElementById("content");
  return { title, status, content };
}

describe("<TaskCreator>", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it("should disable submit button when form is invalid", () => {
    const { getByTestId } = render(<TaskCreator onSubmit={onSubmit} />);
    const add = getByTestId("add-task");

    expect(add).toBeDisabled("disabled");
  });

  describe("Submit", () => {
    beforeEach(() => {
      const { getByTestId } = render(<TaskCreator onSubmit={onSubmit} />);
      const add = getByTestId("add-task");
      const { title, status, content } = getInputs();

      fireEvent.change(title, { target: { value: "title" } });
      fireEvent.change(content, { target: { value: "content" } });
      fireEvent.change(status, { target: { value: TaskStatus.InProgress } });
      fireEvent.click(add);
    });
    it("should send correct data", () => {
      expect(onSubmit).toHaveBeenCalledWith({
        title: "title",
        content: "content",
        status: TaskStatus.InProgress,
      });
    });

    it("should reset form after submit", () => {
      const { title, status, content } = getInputs();
      expect(title.value).toEqual("");
      expect(content.value).toEqual("");
      expect(status.value).toEqual(TaskStatus.Todo);
    });
  });

  describe("Reset", () => {
    it("should reset form", () => {
      const { getByTestId } = render(<TaskCreator onSubmit={onSubmit} />);
      const reset = getByTestId("reset-task");
      const { title, status, content } = getInputs();

      fireEvent.change(title, { target: { value: "title" } });
      fireEvent.change(content, { target: { value: "content" } });
      fireEvent.change(status, { target: { value: TaskStatus.InProgress } });
      fireEvent.click(reset);
      expect(title.value).toEqual("");
      expect(content.value).toEqual("");
      expect(status.value).toEqual(TaskStatus.Todo);
    });
  });
});
