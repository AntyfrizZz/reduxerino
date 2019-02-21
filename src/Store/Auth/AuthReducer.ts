import { AuthAction, AuthActionType } from './AuthActions';
import { AuthState } from './AuthState';

import clone from 'clone';

export const authInitialState: AuthState = {
  isLogedIn: false,
};

export const AuthReducer: (state: AuthState | undefined, action: AuthAction) => AuthState = (
  state: AuthState = authInitialState,
  action: AuthAction,
): AuthState => {
  const newState: AuthState = clone(state);

  switch (action.type) {
    case AuthActionType.LOG_IN:
      newState.isLogedIn = true;
      break;
    case AuthActionType.LOG_OUT:
      newState.isLogedIn = false;
      break;
    default:
      return state;
  }

  return newState;
};
