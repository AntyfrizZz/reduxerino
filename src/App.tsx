import React from "react";
import styles from "./App.module.scss";
import { ChildThree } from "./components/ChildThree/ChildThree";
import { ChildOne } from "./components/ChildOne/ChildOne";
import { ChildTwo } from "./components/ChildTwo/ChildTwo";
import { ChildFour } from "./components/ChildFour/ChildFour";
import { ChildFive } from "./components/ChildFive/ChildFive";
import { timeToString } from "./services/DateTimeService";
import { IAppProps, IAppState } from "./IApp";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      localCounter: 0,
    };
  }

  render() {
    const date: Date = new Date();
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.title}>Не знам, брат, ти си знаеш &reg;</div>
          <div>{timeToString(date)}</div>
          <div>
            Local Counter: <span>{this.state.localCounter}</span>
          </div>
          <button onClick={() => this.setState({ localCounter: this.state.localCounter + 1 })}>
            Increment Local counter
          </button>
        </div>
        <div className={styles.body}>
          <ChildOne titleFromParent="Child one title from parent" />
          <ChildTwo titleFromParent="Child two title from parent" />
          <ChildThree titleFromParent="Child three title from parent" />
          <ChildFour titleFromParent="Child four title from parent" />
          <ChildFive titleFromParent="Child five title from parent" />
        </div>
      </div>
    );
  }
}

export default App;
