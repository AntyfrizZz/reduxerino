import * as React from "react";
import { timeToString } from "../../../services/DateTimeService";
import {
  IInnerChildProps,
  IInnerChildConnectedState,
  IInnerChildConnectedDispatch,
  IInnerChildState
} from "./IInnerChild";
import { Dispatch } from "redux";
import { IState } from "../../../Store/IState";
import { incrementAction } from "../../../Store/Counter/CounterActions";
import { connect } from "react-redux";
import childStyles from "../../Child.module.scss";

class InnerChildComponent extends React.Component<
  IInnerChildProps & IInnerChildConnectedState & IInnerChildConnectedDispatch,
  IInnerChildState
> {
  constructor(
    props: IInnerChildProps &
      IInnerChildConnectedState &
      IInnerChildConnectedDispatch
  ) {
    super(props);

    this.state = {
      localCounter: 0
    };
  }

  public render(): JSX.Element {
    const date = new Date();

    return (
      <div
        className={childStyles.innerChild + " " + childStyles.childContainer}
      >
        <div className={childStyles.title}>{this.props.titleFromParent}</div>
        <div className={childStyles.lasteRenderedTime}>
          {timeToString(date)}
        </div>
        <div className={childStyles.stateInfo}>
          Redux Counter:{" "}
          <span className={childStyles.stateInfoValue}>
            {this.props.counter}
          </span>
        </div>
        <div className={childStyles.stateInfo}>
          Logged In:{" "}
          <span className={childStyles.stateInfoValue}>
            {this.props.loggedIn}
          </span>
        </div>
        <button onClick={this.props.incrementParentCounter}>
          Increment Parent counter
        </button>
      </div>
    );
  }
}

// tslint:disable:typedef
const mapStateToProps = (state: IState): IInnerChildConnectedState => ({
  counter: state.CounterReducer.count,
  loggedIn: state.AuthReducer.isLogedIn ? "Logged In" : "Logged Out"
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IInnerChildConnectedDispatch => ({
  increment(value: number): void {
    dispatch(incrementAction(value));
  }
});

// tslint:disable:typedef
// tslint:disable:variable-name
export const InnerChild = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerChildComponent);
