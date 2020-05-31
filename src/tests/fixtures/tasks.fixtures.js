import { TaskStatus } from "../../utils/task-status.const";

export const TODO_TASK = {
  id: 1,
  title: "Task 1",
  content: "Task 1 content",
  status: TaskStatus.Todo,
};
export const IN_PROGRESS_TASK = {
  id: 2,
  title: "Task 2",
  content: "Task 2 content",
  status: TaskStatus.InProgress,
};

export const COMPLETED_TASK = {
  id: 3,
  title: "Task 3",
  content: "Task 3 content",
  status: TaskStatus.Completed,
};

export const ALL_TASKS = [TODO_TASK, IN_PROGRESS_TASK, COMPLETED_TASK];
