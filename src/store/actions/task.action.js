export const ADD_TASK = "[Task] Add";
export const REMOVE_TASK = "[Task] Remove";
export const UPDATE_TASK_STATUS = "[Task] Update status";

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
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
