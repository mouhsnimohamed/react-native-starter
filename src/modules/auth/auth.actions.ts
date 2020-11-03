import {
  CheckAuthType,
  SignInActionType,
  SignOutType,
  SignOutSuccessType,
  SignInSuccessActionType,
  StorageKeysTypes,
  HandleSplashActionType,
} from './auth.types';

export const authActions = {
  SIGNIN: 'AUTH_SIGNIN',
  SIGNOUT: 'AUTH_SIGNOUT',
  SIGNOUT_SUCCESS: 'AUTH_SIGNOUT_SUCCESS',
  CHECK_AUTH: 'CHECK_AUTH',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  HANDLE_SPLASH: 'HANDLE_SPLASH',
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

/* ### HandleSplashAction ### */
export const HandleSplashAction = (
  isLoading: boolean,
): HandleSplashActionType => ({
  type: authActions.HANDLE_SPLASH,
  isLoading,
});
