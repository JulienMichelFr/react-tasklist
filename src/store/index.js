import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import FetchTasksSaga from "./sagas/task.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(sagaMiddleware);
export const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(FetchTasksSaga);
