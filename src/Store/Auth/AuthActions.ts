// tslint:disable:no-reserved-keywords
// tslint:disable:typedef
export enum AuthActionType {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}

export type AuthAction = IAuthLogin | IAuthLogout;

export interface IAuthLogin { type: AuthActionType.LOG_IN; }
export const loginAction = (): IAuthLogin => ({ type: AuthActionType.LOG_IN });

export interface IAuthLogout { type: AuthActionType.LOG_OUT; }
export const logoutAction = (): IAuthLogout => ({ type: AuthActionType.LOG_OUT });
