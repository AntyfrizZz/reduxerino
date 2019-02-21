import * as React from "react";
import { timeToString } from "../../../services/DateTimeService";
import {
  IInnerChildThreeProps,
  IInnerChildThreeConnectedState,
  IInnerChildThreeConnectedDispatch,
  IInnerChildThreeState
} from "./IInnerChildThree";
import { Dispatch } from "redux";
import { IState } from "../../../Store/IState";
import { incrementAction } from "../../../Store/Counter/CounterActions";
import { connect } from "react-redux";
import childStyles from "../../Child.module.scss";

class InnerChildThreeComponent extends React.Component<
  IInnerChildThreeProps & IInnerChildThreeConnectedState & IInnerChildThreeConnectedDispatch,
  IInnerChildThreeState
> {
  constructor(
    props: IInnerChildThreeProps &
      IInnerChildThreeConnectedState &
      IInnerChildThreeConnectedDispatch
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
        <div className={childStyles.connectedToRedux}>Connected to Redux</div>
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
      </div>
    );
  }
}

// tslint:disable:typedef
const mapStateToProps = (state: IState): IInnerChildThreeConnectedState => ({
  counter: state.CounterReducer.count,
  loggedIn: state.AuthReducer.isLogedIn ? "Logged In" : "Logged Out"
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IInnerChildThreeConnectedDispatch => ({
  increment(value: number): void {
    dispatch(incrementAction(value));
  }
});

// tslint:disable:typedef
// tslint:disable:variable-name
export const InnerChildThree = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerChildThreeComponent);
