import React, { useEffect } from "react";
import TaskList from "../components/tasklist/TaskList";
import { CREATE_ROUTE } from "../utils/constantes";
import TaskListHeader from "../components/tasklist-header/TaskListHeader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadTask, updateTaskStatus } from "../store/actions";
import { selectTasks } from "../store/selectors";

const TaskListPage = () => {
  const loading = useSelector((state) => state.tasks.loading);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTask());
  }, [dispatch]);

  const handleTaskStatusChange = ({ id, status }) => {
    dispatch(updateTaskStatus({ id }, status));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <TaskListHeader tasks={tasks} />
          <Link
            to={CREATE_ROUTE}
            data-testid="add-task"
            className="btn btn-primary btn-sm"
          >
            +
          </Link>
        </div>
      </div>
      {loading && <>Loading ...</>}
      {tasks.length > 0 && (
        <TaskList tasks={tasks} onTaskChange={handleTaskStatusChange} />
      )}
    </>
  );
};

export default TaskListPage;
