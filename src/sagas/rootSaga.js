import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import countSaga from "./countSaga";

export default function* rootSaga() {
  yield all([authSagas(), countSaga()]);
}
