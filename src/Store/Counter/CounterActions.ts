export enum CounterActionType {
  INCREMENT = "INCREMENT"
}

export type CounterAction = CounterIncrement;

type CounterIncrement = { type: CounterActionType.INCREMENT; value: number };
export const incrementAction = (value: number): CounterIncrement => ({
  type: CounterActionType.INCREMENT,
  value: value
});
