import * as React from "react";
import { timeToString } from "../../services/DateTimeService";
import {
  IChildOneProps,
  IChildOneConnectedState,
  IChildOneConnectedDispatch,
  IChildOneState
} from "./IChildOne";
import { Dispatch } from "redux";
import { IState } from "../../Store/IState";
import {
  incrementAction,
} from "../../Store/Counter/CounterActions";
import { connect } from "react-redux";

import childStyles from "../Child.module.scss";

class ChildOneComponent extends React.Component<
  IChildOneProps & IChildOneConnectedState & IChildOneConnectedDispatch,
  IChildOneState
> {
  constructor(
    props: IChildOneProps & IChildOneConnectedState & IChildOneConnectedDispatch
  ) {
    super(props);

    this.state = {
      localCounter: 0
    };
  }

  public render(): JSX.Element {
    const date = new Date();

    return (
      <div className={childStyles.childContainer}>
        <div className={childStyles.title}>{this.props.titleFromParent}</div>
        <div className={childStyles.lasteRenderedTime}>{timeToString(date)}</div>
        <div className={childStyles.stateInfo}>
          Redux Counter: <span className={childStyles.stateInfoValue}>{this.props.counter}</span>
        </div>
        <div className={childStyles.stateInfo}>
          Local Counter: <span className={childStyles.stateInfoValue}>{this.state.localCounter}</span>
        </div>
        <button
          onClick={() =>
            this.setState({ localCounter: this.state.localCounter + 1 })
          }
        >
          Increment Local counter
        </button>
        <button onClick={() => this.props.increment(1)}>
          Increment Redux counter
        </button>
      </div>
    );
  }
}

// tslint:disable:typedef
const mapStateToProps = (state: IState): IChildOneConnectedState => ({
  counter: state.CounterReducer.count
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IChildOneConnectedDispatch => ({
  increment(value: number): void {
    dispatch(incrementAction(value));
  }
});

// tslint:disable:typedef
// tslint:disable:variable-name
export const ChildOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildOneComponent);
