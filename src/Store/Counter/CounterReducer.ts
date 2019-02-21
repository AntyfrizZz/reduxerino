import clone from "clone";
import { CounterState } from "./CounterState";
import { CounterAction, CounterActionType } from "./CounterActions";

export const CounterInitialState: CounterState = {
  count: 0
};

export const CounterReducer = (
  state: CounterState = CounterInitialState,
  action: CounterAction
): CounterState => {
  const newState: CounterState = clone(state);

  switch (action.type) {
    case CounterActionType.INCREMENT:
      newState.count += action.value;
      break;
    default:
      return state;
  }

  return newState;
};
