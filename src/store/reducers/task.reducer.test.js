import { taskReducer as reducer } from "./task.reducer";
import {
  ADD_TASK,
  addTask,
  REMOVE_TASK,
  removeTask,
  UPDATE_TASK_STATUS,
  updateTaskStatus,
} from "../actions";
import {
  COMPLETED_TASK,
  IN_PROGRESS_TASK,
  TODO_TASK,
} from "../../tests/fixtures/tasks.fixtures";
import { TaskStatus } from "../../utils/task-status.const";

describe("Task reducer", () => {
  it("should return initial state by default", () => {
    const r = reducer();
    expect(r).toEqual([]);
  });

  describe(ADD_TASK, () => {
    it("should add task", () => {
      const action = addTask(TODO_TASK);
      const r = reducer([], action);
      expect(r.length).toEqual(1);
      expect(r[0].title).toEqual(TODO_TASK.title);
      expect(r[0].id).toEqual(TODO_TASK.id);
    });
    it("should add task when state already have tasks", () => {
      const action = addTask(IN_PROGRESS_TASK);
      const r = reducer([TODO_TASK], action);
      expect(r.length).toEqual(2);
      expect(r[1].title).toEqual(IN_PROGRESS_TASK.title);
      expect(r[1].id).toEqual(IN_PROGRESS_TASK.id);
    });
  });

  describe(REMOVE_TASK, () => {
    it("should remove task", () => {
      const action = removeTask(IN_PROGRESS_TASK);
      const r = reducer([TODO_TASK, IN_PROGRESS_TASK], action);
      expect(r.length).toEqual(1);
      expect(r.map(({ id }) => id).includes(IN_PROGRESS_TASK.id)).toEqual(
        false
      );
    });

    it("should not remove task if not present", () => {
      const action = removeTask(IN_PROGRESS_TASK);
      const r = reducer([TODO_TASK], action);
      expect(r.length).toEqual(1);
    });
  });

  describe(UPDATE_TASK_STATUS, () => {
    it("should change status", () => {
      const action = updateTaskStatus(IN_PROGRESS_TASK, TaskStatus.Completed);
      const r = reducer([IN_PROGRESS_TASK], action);
      expect(r.length).toEqual(1);
      expect(r[0].status).toEqual(TaskStatus.Completed);
    });
    it("should not update other tasks status", () => {
      const action = updateTaskStatus(IN_PROGRESS_TASK, TaskStatus.Completed);
      const r = reducer([TODO_TASK, IN_PROGRESS_TASK], action);
      expect(r[0].status).toEqual(TaskStatus.Todo);
    });
    it("should not update if task is not present", () => {
      const initialState = [TODO_TASK, IN_PROGRESS_TASK];
      const action = updateTaskStatus(COMPLETED_TASK, TaskStatus.Todo);
      const r = reducer(initialState, action);
      expect(r).toEqual(initialState);
    });
  });
});
