import { call, put, takeLatest } from "redux-saga/effects";
import { LOAD_TASK, loadTaskFailed, loadTaskSuccess } from "../actions";

const Api = {
  fetchTasks() {
    return fetch("http://localhost:4000/tasks").then((res) => res.json());
  },
};

function* fetchTasks(action) {
  try {
    const tasks = yield call(Api.fetchTasks, action.payload);
    yield put(loadTaskSuccess(tasks));
  } catch (e) {
    yield put(loadTaskFailed(e.message));
  }
}

export default function* FetchTasksSaga() {
  yield takeLatest(LOAD_TASK, fetchTasks);
}
