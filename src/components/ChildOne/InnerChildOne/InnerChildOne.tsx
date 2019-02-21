import * as React from "react";
import { timeToString } from "../../../services/DateTimeService";
import { IInnerChildOneProps, IInnerChildOneConnectedState, IInnerChildOneConnectedDispatch, IInnerChildOneState } from "./IInnerChildOne";
import { Dispatch } from "redux";
import { State } from "../../../Store/State";
import { incrementAction } from "../../../Store/Counter/CounterActions";
import { connect } from "react-redux";

import childStyles from "../../Child.module.scss";

class InnerChildOneComponent extends React.Component<
  IInnerChildOneProps & IInnerChildOneConnectedState & IInnerChildOneConnectedDispatch,
  IInnerChildOneState
> {
  constructor(props: IInnerChildOneProps & IInnerChildOneConnectedState & IInnerChildOneConnectedDispatch) {
    super(props);

    this.state = {
      localCounter: 0
    };
  }

  public render(): JSX.Element {
    const date = new Date();

    return (
      <div className={childStyles.content}>
        <div className={childStyles.innerChild + " " + childStyles.childContainer}>
          <div className={childStyles.title}>{this.props.titleFromParent}</div>
          <div className={childStyles.connectedToRedux}>Connected to Redux</div>
          <div className={childStyles.lasteRenderedTime}>{timeToString(date)}</div>
          <div className={childStyles.stateInfo}>
            Redux Counter: <span className={childStyles.stateInfoValue}>{this.props.counter}</span>
          </div>
          <div className={childStyles.stateInfo}>
            Local Counter: <span className={childStyles.stateInfoValue}>{this.state.localCounter}</span>
          </div>
          <button onClick={() => this.setState({ localCounter: this.state.localCounter + 1 })}>Increment Local counter</button>
          <button onClick={() => this.props.increment(1)}>Increment Redux counter</button>
        </div>
      </div>
    );
  }
}

// tslint:disable:typedef
const mapStateToProps = (state: State): IInnerChildOneConnectedState => ({
  counter: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch: Dispatch): IInnerChildOneConnectedDispatch => ({
  increment(value: number): void {
    dispatch(incrementAction(value));
  }
});

// tslint:disable:typedef
// tslint:disable:variable-name
export const InnerChildOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerChildOneComponent);
