import {
  CheckAuthType,
  SignInActionType,
  SignOutType,
  SignInSuccessActionType,
  StorageKeysTypes,
  HandleSplashActionType,
} from './auth.types';

export const authActions = {
  SIGNIN: 'AUTH_SIGNIN',
  SIGNOUT: 'AUTH_SIGNOUT',
  CHECK_AUTH: 'CHECK_AUTH',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  HANDLE_SPLASH: 'HANDLE_SPLASH',
};

export const STORAGE_KEYS: StorageKeysTypes = {
  TOKEN: 'BES_TOKEN',
};

/* ### SignInAction ### */
export const SignInAction = (
  email: string,
  phone: string,
): SignInActionType => ({
  type: authActions.SIGNIN,
  email,
  phone,
});

/* ### SignOutType ### */
export const SignOutAction = (): SignOutType => ({
  type: authActions.SIGNOUT,
});

/* ### CheckAuthType ### */
export const CheckAuthAction = (): CheckAuthType => ({
  type: authActions.CHECK_AUTH,
});

/* ### SignInSuccessAction ### */
export const SignInSuccessAction = (): SignInSuccessActionType => ({
  type: authActions.SIGNIN_SUCCESS,
});

export const HandleSplashAction = (
  isLoading: boolean,
): HandleSplashActionType => ({
  type: authActions.HANDLE_SPLASH,
  isLoading,
});
