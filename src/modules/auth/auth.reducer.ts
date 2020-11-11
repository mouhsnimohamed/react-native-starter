import { authActions } from './auth.actions';
import { AuthActionstypes, AuthState } from './auth.types';
export const AUTH_REDUCER = 'AUTH_REDUCER';

const initState: AuthState = {
  isSignedIn: false,
  isSigningOut: false,
  isChecking: true,
  isLoading: false,
  token: undefined,
};

export function authReducer(state = initState, action: AuthActionstypes) {
  switch (action.type) {
    case authActions.HANDLE_SPLASH:
      return { ...state, isChecking: false };
    case authActions.SIGNIN:
      return { ...state, isLoading: true };
    case authActions.SIGNIN_FAILER:
      return { ...state, isLoading: false };
    case authActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isChecking: false,
        isLoading: false,
        token: action.token,
      };
    case authActions.SIGNOUT_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        token: undefined,
        isSigningOut: true,
        /* 
        ! we use this just for animation transition between screen
        ? only when use logout  
        */
      };
    default:
      return state;
  }
}
