import * as React from "react";
import { timeToString } from "../../../services/DateTimeService";
import { IInnerChildFiveProps, IInnerChildFiveState } from "./IInnerChildFive";
import childStyles from "../../Child.module.scss";

export class InnerChildFive extends React.Component<IInnerChildFiveProps, IInnerChildFiveState> {
  constructor(props: IInnerChildFiveProps) {
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
          <div className={childStyles.lasteRenderedTime}>{timeToString(date)}</div>
          <div className={childStyles.stateInfo}>
            Local Counter: <span className={childStyles.stateInfoValue}>{this.state.localCounter}</span>
          </div>
          <button onClick={() => this.setState({ localCounter: this.state.localCounter + 1 })}>Increment Local counter</button>
        </div>
      </div>
    );
  }
}
