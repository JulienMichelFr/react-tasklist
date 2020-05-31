import { taskReducer } from "./task.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  tasks: taskReducer,
});
