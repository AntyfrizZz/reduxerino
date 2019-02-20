import { IAuthState } from './Auth/IAuthState';
import { ICounterState } from './Counter/ICounterState';

export interface IState {
  AuthReducer: IAuthState;
  CounterReducer: ICounterState;
}
