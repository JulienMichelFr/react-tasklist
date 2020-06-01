import { ADD_TASK, REMOVE_TASK, UPDATE_TASK_STATUS } from "../actions";

const initialState = [];

export function taskReducer(state = initialState, action) {
  switch (action?.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(({ id }) => id !== action.payload);
    case UPDATE_TASK_STATUS:
      return state.map((task) => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return { ...task, status: action.payload.status };
      });
    default:
      return state;
  }
}
