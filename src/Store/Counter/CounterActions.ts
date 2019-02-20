export enum CounterActionType {
  INCREMENT = "INCREMENT",
}

export type CounterAction = ICounterIncrement;

export interface ICounterIncrement {
  type: CounterActionType.INCREMENT;
  value: number;
}
export const incrementAction = (value: number): ICounterIncrement => ({
  type: CounterActionType.INCREMENT,
  value: value
});
