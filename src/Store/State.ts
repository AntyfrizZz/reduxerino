import { AuthState } from "./Auth/AuthState";
import { CounterState } from "./Counter/CounterState";

export type State = {
  AuthReducer: AuthState;
  CounterReducer: CounterState;
};
