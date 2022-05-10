import {
  authActions,
  HandleSplashAction,
  SignInFailerAction,
  SignInSuccessAction,
  SignOutSuccessAction,
  STORAGE_KEYS,
} from "./auth.actions";
import { takeLatest, put, call, delay } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInActionType } from "./auth.types";
import { navigate } from "navigations/RootNavigation";
import request from "../request";
import { LOGIN_URL } from "../request/api_constants";

function* handleSignIn(token: string) {
  try {
    yield AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
    yield put(SignInSuccessAction(token));
  } catch (error) {
    console.log("cant store token ", error);
  }
}

function* CheckAuthSaga() {
  try {
    yield delay(2000);
    const token: string | null = yield AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
    if (token === null) {
      yield put(HandleSplashAction(false));
    } else {
      /* validate token here */

      yield put(SignInSuccessAction(token));
    }
  } catch (error) {
    console.log("somthing went wrong", error);
  }
}

function* WatchCheckAuth() {
  yield takeLatest(authActions.CHECK_AUTH, CheckAuthSaga);
}

function* SigninSaga(action: SignInActionType) {
  try {
    if (
      action.payload.email.toLowerCase() !== "test@test.com" ||
      action.payload.password.toLowerCase() !== "000000"
    ) {
      /*
        ? Remove loader and rediredt to warning screen
      */
      yield put(SignInFailerAction());
      navigate("Warning");
    } else {
      console.log("############# REQUEST ");
      const result = yield call(request, {
        url: LOGIN_URL,
        method: "POST",
        data: action.payload,
      });
      // set user authonticated
      console.log("############# RESULT ", result.data);
      yield handleSignIn("USER_FAKE_TOKEN");
    }
  } catch (error) {
    console.log("somthing went wrong......", error);
    yield SignInFailerAction();
  }
}

function* WatchSignin() {
  yield takeLatest(authActions.SIGNIN, SigninSaga);
}

function* signOutSaga() {
  try {
    AsyncStorage.removeItem(STORAGE_KEYS.TOKEN);
    yield put(SignOutSuccessAction());
  } catch (e) {
    yield put(SignOutSuccessAction());
  }
}

function* WatchSignOut() {
  yield takeLatest(authActions.SIGNOUT, signOutSaga);
}

export default [WatchCheckAuth, WatchSignin, WatchSignOut];
