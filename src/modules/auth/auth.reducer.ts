import { authActions } from './auth.actions';
import { AuthActionstypes, AuthState } from './auth.types';
export const AUTH_REDUCER = 'AUTH_REDUCER';

const initState: AuthState = {
  isSignedIn: false,
  isSigningOut: false,
  isLoading: true,
};

export function authReducer(state = initState, action: AuthActionstypes) {
  switch (action.type) {
    case authActions.SIGNIN:
      return state;
    case authActions.HANDLE_SPLASH:
      return { ...state, isLoading: false };
    case authActions.SIGNIN_SUCCESS:
      return { ...state, isSignedIn: true, isLoading: false };
    default:
      return state;
  }
}
