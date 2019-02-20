export interface IChildFourProps {
  titleFromParent: string;
}

export interface IChildFourConnectedState {
  loggedIn: string;
  counter: number;
}

export interface IChildFourConnectedDispatch {
  login(): void;
  logout(): void;
}

export interface IChildFourState {
  localCounter: number;
}
