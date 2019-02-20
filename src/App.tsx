import React, { Component } from "react";
import styles from "./App.module.scss";
import { ChildThree } from "./components/ChildThree/ChildThree";
import { ChildOne } from "./components/ChildOne/ChildOne";
import { ChildTwo } from "./components/ChildTwo/ChildTwo";
import { ChildFour } from "./components/ChildFour/ChildFour";
import { timeToString } from "./services/DateTimeService";

class App extends Component {
  render() {
    const date: Date = new Date();
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>{timeToString(date)}</div>
        </div>
        <div className={styles.body}>
          <ChildOne titleFromParent="Child one title from parent" />
          <ChildTwo titleFromParent="Child two title from parent" />
          <ChildThree titleFromParent="Child three title from parent" />
          <ChildFour titleFromParent="Child four title from parent" />
        </div>
      </div>
    );
  }
}

export default App;
