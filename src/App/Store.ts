import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { HomeEffects } from "./Components/Home/State/HomeEffects";
import HomeReducer from "./Components/Home/State/HomeReducer";
import { IHomeState } from "./Components/Home/State/IHomeState";
import { ILoginState } from "./Components/Login/State/ILoginState";
import { LoginEffects } from "./Components/Login/State/LoginEffects";
import LoginReducer from "./Components/Login/State/LoginReducer";

export interface IRootState {
  homeState: IHomeState;
  loginState: ILoginState;
}

export const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  homeState: HomeReducer,
  loginState: LoginReducer,
});

export const store: Store<IRootState, AnyAction> = createStore(
  combinedReducers,
  applyMiddleware(sagaMiddleware)
);

export function* rootEffetcs() {
  yield all([HomeEffects(), LoginEffects()]);
}
