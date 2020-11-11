import { authActions } from './auth.actions';

export interface StorageKeysTypes {
  TOKEN: string;
}

export interface AuthState {
  isSignedIn: boolean;
  isSigningOut: boolean;
  isLoading: boolean;
  isChecking: boolean;
  token: string | undefined;
}

export type SignInPayloadTypes = {
  email: string;
  password: string;
};

export interface SignInActionType {
  type: typeof authActions.SIGNIN;
  payload: SignInPayloadTypes;
}

export interface SignOutType {
  type: typeof authActions.SIGNOUT;
}
export interface SignOutSuccessType {
  type: typeof authActions.SIGNIN_SUCCESS;
}

export interface CheckAuthType {
  type: typeof authActions.CHECK_AUTH;
}

export interface SignInSuccessActionType {
  type: typeof authActions.SIGNIN_SUCCESS;
  token: string;
}

export interface SignInFailerActionType {
  type: typeof authActions.SIGNIN_FAILER;
}

export interface HandleSplashActionType {
  type: typeof authActions.HANDLE_SPLASH;
  isChecking: boolean;
}

export type AuthActionstypes =
  | SignInActionType
  | SignOutType
  | CheckAuthType
  | SignInSuccessActionType
  | SignInFailerActionType
  | HandleSplashActionType;
