import { AuthAction, AuthActionType } from './AuthActions';
import { IAuthState } from './IAuthState';

import clone from 'clone';

export const authInitialState: IAuthState = {
  isLogedIn: false,
};

export const AuthReducer: (state: IAuthState | undefined, action: AuthAction) => IAuthState = (
  state: IAuthState = authInitialState,
  action: AuthAction,
): IAuthState => {
  const newState: IAuthState = clone(state);

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
