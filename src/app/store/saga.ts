import { all, fork } from "redux-saga/effects";

// Auth Saga
import { authSaga } from "@/modules/Auth/auth.saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    // fork(userSaga),
  ]);
}
