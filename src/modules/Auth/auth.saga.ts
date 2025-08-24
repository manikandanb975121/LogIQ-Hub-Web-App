// modules/auth/sagas.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "@/services/auth.api";
import { loginRequest, loginSuccess, loginFailure } from "./auth.slice";

function* handleLogin(action: ReturnType<typeof loginRequest>): Generator {
  try {
    const response: any = yield call(loginApi, action.payload);
    yield put(
      loginSuccess({
        user: response.data.user,
        token: response.data.token,
      })
    );
    localStorage.setItem("access_token", response.data.token);
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
