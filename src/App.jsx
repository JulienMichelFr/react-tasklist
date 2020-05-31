import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import TasklistPage from "./pages/TasklistPage";
import TaskCreator from "./components/task-creator/TaskCreator";
import { CREATE_ROUTE, LIST_ROUTE } from "./utils/constantes";

const App = () => {
  const history = useHistory();

  const handleSubmit = (task) => {
    console.groupCollapsed("Submitting task ...");
    console.log({ task });
    console.groupEnd();
    history.push(LIST_ROUTE);
  };

  return (
    <Switch>
      <Route exact path={LIST_ROUTE}>
        <TasklistPage />
      </Route>
      <Route exact path={CREATE_ROUTE}>
        <TaskCreator onSubmit={handleSubmit} />
      </Route>
    </Switch>
  );
};

export default App;
