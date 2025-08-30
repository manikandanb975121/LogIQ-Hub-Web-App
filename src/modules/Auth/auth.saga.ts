// modules/auth/sagas.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "@/services/auth.api";
import { loginRequest, loginSuccess, loginFailure } from "./auth.slice";

function* loginHandler(action: ReturnType<typeof loginRequest>): Generator {
  try {
    const response: any = yield call(login, action.payload);
    yield put(
      loginSuccess({
        user: response.data
      })
    );
    localStorage.setItem("access_token", response.data.token);
    localStorage.setItem("session_id", response.data.sessionId);
  } catch (error: any) {
    yield put(loginFailure({message: error.response?.data?.message || "Login failed"}));
  }
}


// Auth Saga
export function* authSaga() {
  yield takeLatest(loginRequest.type, loginHandler);
}
