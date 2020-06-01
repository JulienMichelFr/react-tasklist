import { generateId } from "../../utils/functions";

function makeAction(action) {
  return `[Task] ${action}`;
}

export const ADD_TASK = makeAction("Add");
export const REMOVE_TASK = makeAction("Remove");
export const UPDATE_TASK_STATUS = makeAction("Update status");
export const LOAD_TASK = makeAction("Load");
export const LOAD_TASK_SUCCESS = makeAction("Load success");
export const LOAD_TASK_FAILED = makeAction("Load failed");

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: {
      id: generateId(),
      ...task,
    },
  };
}

export function removeTask({ id }) {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
}

export function updateTaskStatus({ id }, status) {
  return {
    type: UPDATE_TASK_STATUS,
    payload: {
      id,
      status,
    },
  };
}

export function loadTask() {
  return { type: LOAD_TASK };
}

export function loadTaskSuccess(tasks) {
  return { type: LOAD_TASK_SUCCESS, payload: tasks };
}

export function loadTaskFailed(error) {
  return { type: LOAD_TASK_FAILED, payload: error };
}
