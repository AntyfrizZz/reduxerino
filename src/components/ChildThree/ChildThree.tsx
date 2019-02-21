import * as React from "react";
import { timeToString } from "../../services/DateTimeService";
import { IChildThreeProps, IChildThreeState } from "./IChildThree";
import childStyles from "../Child.module.scss";
import { InnerChildThree } from "./InnerChildThree/InnerChildThree";

export class ChildThree extends React.Component<
  IChildThreeProps,
  IChildThreeState
> {
  constructor(props: IChildThreeProps) {
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
        <div className={childStyles.lasteRenderedTime}>
          {timeToString(date)}
        </div>
        <div className={childStyles.stateInfo}>
          Local Counter:{" "}
          <span className={childStyles.stateInfoValue}>
            {this.state.localCounter}
          </span>
        </div>
        <button
          onClick={() =>
            this.setState({ localCounter: this.state.localCounter + 1 })
          }
        >
          Increment Local counter
        </button>
        <div>
          <InnerChildThree titleFromParent="Inner child three" />
        </div>
      </div>
    );
  }
}
