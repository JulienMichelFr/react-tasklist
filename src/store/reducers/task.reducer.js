import {
  ADD_TASK,
  LOAD_TASK,
  LOAD_TASK_FAILED,
  LOAD_TASK_SUCCESS,
  REMOVE_TASK,
  UPDATE_TASK_STATUS,
} from "../actions";

const initialState = {
  loading: false,
  error: null,
  tasks: [],
};

export function taskReducer(state = initialState, action) {
  switch (action?.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload),
      };
    case UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return { ...task, status: action.payload.status };
        }),
      };
    case LOAD_TASK:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case LOAD_TASK_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        tasks: action.payload,
      };
    case LOAD_TASK_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
