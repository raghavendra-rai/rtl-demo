import { put, takeEvery } from "redux-saga/effects";
import { login } from "../../../Service";
import { LoginActions, LoginActionTypes } from "./LoginActions";

function* loginEffect(action: any) {
  try {
    const { username, password } = action.payload;
    yield put(LoginActions.loginRequest());
    const response = yield login(username, password);
    yield put(LoginActions.loginSuccess(response));
  } catch (error) {
    yield put(LoginActions.loginError(error));
  }
}

export function* LoginEffects() {
  yield takeEvery(LoginActionTypes.LOGIN, loginEffect);
}
