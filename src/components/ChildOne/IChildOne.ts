export interface IChildOneProps {
  titleFromParent: string;
}

export interface IChildOneConnectedState {
  counter: number;
}

export interface IChildOneConnectedDispatch {
  increment(value: number): void;
}

export interface IChildOneState {
    localCounter: number;
}
