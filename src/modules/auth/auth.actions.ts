import {
  CheckAuthType,
  SignInActionType,
  SignOutType,
  SignOutSuccessType,
  SignInSuccessActionType,
  StorageKeysTypes,
  HandleSplashActionType,
  SignInFailerActionType,
} from './auth.types';

export const authActions = {
  SIGNIN: 'AUTH_SIGNIN',
  SIGNOUT: 'AUTH_SIGNOUT',
  SIGNOUT_SUCCESS: 'AUTH_SIGNOUT_SUCCESS',
  CHECK_AUTH: 'AUTH_CHECK_AUTH',
  SIGNIN_SUCCESS: 'AUTH_SIGNIN_SUCCESS',
  SIGNIN_FAILER: 'AUTH_SIGNIN_FAILER',
  HANDLE_SPLASH: 'AUTH_HANDLE_SPLASH',
};

export const STORAGE_KEYS: StorageKeysTypes = {
  TOKEN: 'BES_TOKEN',
};

/* ### SignInAction ### */
export const SignInAction = (payload: {
  email: string;
  password: string;
}): SignInActionType => ({
  type: authActions.SIGNIN,
  payload,
});

/* ### SignOutType ### */
export const SignOutAction = (): SignOutType => ({
  type: authActions.SIGNOUT,
});

/* ### SignOutSuccessType ### */
export const SignOutSuccessAction = (): SignOutSuccessType => ({
  type: authActions.SIGNOUT_SUCCESS,
});

/* ### CheckAuthType ### */
export const CheckAuthAction = (): CheckAuthType => ({
  type: authActions.CHECK_AUTH,
});

/* ### SignInSuccessAction ### */
export const SignInSuccessAction = (
  token: string,
): SignInSuccessActionType => ({
  type: authActions.SIGNIN_SUCCESS,
  token,
});

/* ### SignInSuccessAction ### */
export const SignInFailerAction = (): SignInFailerActionType => ({
  type: authActions.SIGNIN_FAILER,
});

/* ### HandleSplashAction ### */
export const HandleSplashAction = (
  isChecking: boolean,
): HandleSplashActionType => ({
  type: authActions.HANDLE_SPLASH,
  isChecking,
});
