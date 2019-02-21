import * as React from "react";

import { IChildFourProps, IChildFourConnectedState, IChildFourConnectedDispatch, IChildFourState } from "./IChildFour";
import { Dispatch } from "redux";
import { State } from "../../Store/State";
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../Store/Auth/AuthActions";
import childStyles from "../Child.module.scss";
import { timeToString } from "../../services/DateTimeService";

class ChildFourComponent extends React.Component<IChildFourProps & IChildFourConnectedState & IChildFourConnectedDispatch, IChildFourState> {
  constructor(props: IChildFourProps & IChildFourConnectedState & IChildFourConnectedDispatch) {
    super(props);

    this.state = {
      localCounter: 0
    };
  }

  public render(): JSX.Element {
    const date = new Date();

    return (
      <div className={childStyles.childContainer}>
        <div className={childStyles.content}>
          <div className={childStyles.title}>{this.props.titleFromParent}</div>
          <div className={childStyles.connectedToRedux}>Connected to Redux</div>
          <div className={childStyles.lasteRenderedTime}>{timeToString(date)}</div>
          <div className={childStyles.stateInfo}>
            Logged In: <span className={childStyles.stateInfoValue}>{this.props.loggedIn}</span>
          </div>
          <div className={childStyles.stateInfo}>
            Redux Counter: <span className={childStyles.stateInfoValue}>{this.props.counter}</span>
          </div>
          <button onClick={this.props.login}>Login</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

// tslint:disable:typedef
const mapStateToProps = (state: State): IChildFourConnectedState => ({
  loggedIn: state.AuthReducer.isLogedIn ? "Logged In" : "Logged Out",
  counter: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch: Dispatch): IChildFourConnectedDispatch => ({
  login(): void {
    dispatch(loginAction());
  },
  logout(): void {
    dispatch(logoutAction());
  }
});

// tslint:disable:typedef
// tslint:disable:variable-name
export const ChildFour = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildFourComponent);
