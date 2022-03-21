import { incrementCount } from "actions/Count";
import { INCREMENT_COUNT } from "actions/Count/actionTypes";
import { all, put, select, takeEvery, takeLatest } from "redux-saga/effects";

//worker
function* handleIncrementCount(actions) {
  let count = yield select((state) => state.count);
  console.log(count);
  // yield put(getListSuccess(response.data));
  // yield put(incrementCount(count + 1));
  yield console.log(actions);
}

//watcher
function* watcherCountIncrement() {
  yield takeEvery(INCREMENT_COUNT, handleIncrementCount);
}

export default function* countSaga() {
  yield all([watcherCountIncrement()]);
}
