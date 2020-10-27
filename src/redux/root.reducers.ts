import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { authReducer, AUTH_REDUCER } from '../modules/auth/auth.reducer';

const rootReducers = combineReducers({
  [AUTH_REDUCER]: authReducer,
});

type RootState = ReturnType<typeof rootReducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducers;
