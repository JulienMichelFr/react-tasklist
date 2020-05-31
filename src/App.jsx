import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import { CREATE_ROUTE, LIST_ROUTE } from "./utils/constantes";
import TaskCreatorPage from "./pages/TaskCreatorPage";

const App = () => {
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
            <TaskListPage />
          </Route>
          <Route exact path={CREATE_ROUTE}>
            <TaskCreatorPage />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
