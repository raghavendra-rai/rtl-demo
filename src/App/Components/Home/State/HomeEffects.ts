import { put, takeEvery } from "redux-saga/effects";
import { getGridData } from "../../../Service";
import { HomeActions, HomeActionType } from "./HomeActions";

export function* loadData() {
  try {
    yield put(HomeActions.loadDataRequest());
    const response = yield getGridData();
    yield put(HomeActions.loadDataSuccess(response));
  } catch (error) {
    yield put(HomeActions.loadDataError(error));
  }
}

export function* HomeEffects() {
  yield takeEvery(HomeActionType.LOADDATA, loadData);
}
