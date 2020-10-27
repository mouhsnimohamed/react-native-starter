import {
  authActions,
  HandleSplashAction,
  SignInSuccessAction,
  STORAGE_KEYS,
} from './auth.actions';
import { takeLatest, delay, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* CheckAuthSaga() {
  try {
    yield delay(3000);
    const token = yield AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
    console.log(token, token === null);
    if (token === null) {
      yield put(HandleSplashAction(false));
    } else {
      /* validate token here */
      yield put(SignInSuccessAction());
    }
  } catch (error) {
    console.log('somthing went wrong', error);
  }
}

function* WatchCheckAuth() {
  yield takeLatest(authActions.CHECK_AUTH, CheckAuthSaga);
}

export default [WatchCheckAuth];
