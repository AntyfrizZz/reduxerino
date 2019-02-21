export interface IInnerChildOneProps {
  titleFromParent: string;
}

export interface IInnerChildOneConnectedState {
  counter: number;
}

export interface IInnerChildOneConnectedDispatch {
  increment(value: number): void;
}

export interface IInnerChildOneState {
    localCounter: number;
}
