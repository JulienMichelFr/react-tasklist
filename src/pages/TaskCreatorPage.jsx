import React from "react";
import TaskCreator from "../components/task-creator/TaskCreator";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import { useHistory } from "react-router";
import { LIST_ROUTE } from "../utils/constantes";

const TaskCreatorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnSubmit = (task) => {
    dispatch(addTask(task));
    history.push(LIST_ROUTE);
  };

  return <TaskCreator onSubmit={handleOnSubmit} />;
};

export default TaskCreatorPage;
