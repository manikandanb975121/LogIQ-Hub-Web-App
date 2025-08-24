import { all, fork } from "redux-saga/effects";
// Example: import authSaga from "@/modules/auth/sagas";

export default function* rootSaga() {
  yield all([
    // fork(authSaga),
    // fork(userSaga),
  ]);
}
