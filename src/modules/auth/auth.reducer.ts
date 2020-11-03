import { authActions } from './auth.actions';
import { AuthActionstypes, AuthState } from './auth.types';
export const AUTH_REDUCER = 'AUTH_REDUCER';

const initState: AuthState = {
  isSignedIn: false,
  isSigningOut: false,
  isLoading: true,
  token: undefined,
};

export function authReducer(state = initState, action: AuthActionstypes) {
  switch (action.type) {
    case authActions.HANDLE_SPLASH:
      return { ...state, isLoading: false };
    case authActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        token: action.token,
      };
    case authActions.SIGNOUT_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        token: undefined,
        isSigningOut: true,
        /* 
        ! we use this just for animation transaction between screen
        ? only when use logout  
        */
      };
    default:
      return state;
  }
}
