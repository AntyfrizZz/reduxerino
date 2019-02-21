// tslint:disable:no-reserved-keywords
// tslint:disable:typedef
export enum AuthActionType {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}

export type AuthAction = AuthLogin | AuthLogout;

type AuthLogin = { type: AuthActionType.LOG_IN; };
export const loginAction = (): AuthLogin => ({ type: AuthActionType.LOG_IN });

type AuthLogout = { type: AuthActionType.LOG_OUT; };
export const logoutAction = (): AuthLogout => ({ type: AuthActionType.LOG_OUT });
