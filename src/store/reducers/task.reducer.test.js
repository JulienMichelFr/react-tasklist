import { taskReducer as reducer } from "./task.reducer";
import {
  ADD_TASK,
  addTask,
  LOAD_TASK,
  LOAD_TASK_FAILED,
  LOAD_TASK_SUCCESS,
  loadTask,
  loadTaskFailed,
  loadTaskSuccess,
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

let initialState;

const TEST_ERROR = "Not Authorized";

describe("Task reducer", () => {
  beforeEach(() => {
    initialState = {
      tasks: [],
      loading: false,
      error: null,
    };
  });
  it("should return initial state by default", () => {
    const r = reducer();
    expect(r).toEqual(initialState);
  });

  describe(ADD_TASK, () => {
    it("should add task", () => {
      const action = addTask(TODO_TASK);
      const { tasks } = reducer(initialState, action);
      expect(tasks.length).toEqual(1);
      expect(tasks[0].title).toEqual(TODO_TASK.title);
      expect(tasks[0].id).toEqual(TODO_TASK.id);
    });
    it("should add task when state already have tasks", () => {
      const action = addTask(IN_PROGRESS_TASK);
      const { tasks } = reducer(
        { ...initialState, tasks: [TODO_TASK] },
        action
      );
      expect(tasks.length).toEqual(2);
      expect(tasks[1].title).toEqual(IN_PROGRESS_TASK.title);
      expect(tasks[1].id).toEqual(IN_PROGRESS_TASK.id);
    });
  });

  describe(REMOVE_TASK, () => {
    it("should remove task", () => {
      const action = removeTask(IN_PROGRESS_TASK);
      const { tasks } = reducer(
        { ...initialState, tasks: [TODO_TASK, IN_PROGRESS_TASK] },
        action
      );
      expect(tasks.length).toEqual(1);
      expect(tasks.map(({ id }) => id).includes(IN_PROGRESS_TASK.id)).toEqual(
        false
      );
    });

    it("should not remove task if not present", () => {
      const action = removeTask(IN_PROGRESS_TASK);
      const { tasks } = reducer(
        { ...initialState, tasks: [TODO_TASK] },
        action
      );
      expect(tasks.length).toEqual(1);
    });
  });

  describe(UPDATE_TASK_STATUS, () => {
    it("should change status", () => {
      const action = updateTaskStatus(IN_PROGRESS_TASK, TaskStatus.Completed);
      const { tasks } = reducer(
        { ...initialState, tasks: [IN_PROGRESS_TASK] },
        action
      );
      expect(tasks.length).toEqual(1);
      expect(tasks[0].status).toEqual(TaskStatus.Completed);
    });
    it("should not update other tasks status", () => {
      const action = updateTaskStatus(IN_PROGRESS_TASK, TaskStatus.Completed);
      const { tasks } = reducer(
        { ...initialState, tasks: [TODO_TASK, IN_PROGRESS_TASK] },
        action
      );
      expect(tasks[0].status).toEqual(TaskStatus.Todo);
    });
    it("should not update if task is not present", () => {
      initialState = { ...initialState, tasks: [TODO_TASK, IN_PROGRESS_TASK] };
      const action = updateTaskStatus(COMPLETED_TASK, TaskStatus.Todo);
      const r = reducer(initialState, action);
      expect(r).toEqual(initialState);
    });
  });

  describe(LOAD_TASK, () => {
    it("should switch state to loading", () => {
      const action = loadTask();
      const r = reducer(initialState, action);
      expect(r.loading).toEqual(true);
    });
    it("should remove existing errors", () => {
      const action = loadTask();
      const r = reducer({ ...initialState, error: TEST_ERROR }, action);
      expect(r.error).toEqual(null);
    });
  });

  describe(LOAD_TASK_SUCCESS, () => {
    it("should stop loading", () => {
      const action = loadTaskSuccess([]);
      const r = reducer({ ...initialState, loading: true }, action);
      expect(r.loading).toEqual(false);
    });
    it("should correctly add tasks", () => {
      const action = loadTaskSuccess([TODO_TASK]);
      const { tasks } = reducer({ ...initialState, loading: true }, action);
      expect(tasks.length).toEqual(1);
      expect(tasks).toEqual([TODO_TASK]);
    });
  });

  describe(LOAD_TASK_FAILED, () => {
    it("should stop loading", () => {
      const action = loadTaskFailed(TEST_ERROR);
      const r = reducer({ ...initialState, loading: true }, action);
      expect(r.loading).toEqual(false);
    });
    it("should correctly set error", () => {
      const action = loadTaskFailed(TEST_ERROR);
      const { error } = reducer({ ...initialState, loading: true }, action);
      expect(error).toEqual(TEST_ERROR);
    });
  });
});
