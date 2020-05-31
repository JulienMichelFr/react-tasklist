import React, { useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskCreator from "./components/task-creator/TaskCreator";
import { CREATE_ROUTE, LIST_ROUTE } from "./utils/constantes";
import { generateId } from "./utils/functions";

const App = () => {
  const history = useHistory();
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (task) => {
    history.push(LIST_ROUTE);
    setTasks([...tasks, { ...task, id: generateId() }]);
  };

  function handleTaskChange(task) {
    const result = tasks.map((t) => {
      if (t.id !== task.id) {
        return t;
      }
      return {
        ...task,
        id: t.id,
      };
    });
    setTasks(result);
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <span className="navbar-brand">TaskList</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={LIST_ROUTE} className="nav-link">
                List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" className="container-fluid">
        <Switch>
          <Route exact path={LIST_ROUTE}>
            <TaskListPage tasks={tasks} onTaskChange={handleTaskChange} />
          </Route>
          <Route exact path={CREATE_ROUTE}>
            <TaskCreator onSubmit={handleSubmit} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
