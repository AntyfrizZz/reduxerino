export interface IChildTwoProps {
  titleFromParent: string;
}

export interface IChildTwoConnectedState {
  counter: number;
}

export interface IChildTwoConnectedDispatch {
  increment(value: number): void;
}

export interface IChildTwoState {
    localCounter: number;
}
