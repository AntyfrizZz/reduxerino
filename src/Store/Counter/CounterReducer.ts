import clone from "clone";
import { ICounterState } from "./ICounterState";
import { CounterAction, CounterActionType } from "./CounterActions";

export const CounterInitialState: ICounterState = {
  count: 0
};

export const CounterReducer = (
  state: ICounterState = CounterInitialState,
  action: CounterAction
): ICounterState => {
  const newState: ICounterState = clone(state);

  switch (action.type) {
    case CounterActionType.INCREMENT:
      newState.count += action.value;
      break;
    default:
      return state;
  }

  return newState;
};
