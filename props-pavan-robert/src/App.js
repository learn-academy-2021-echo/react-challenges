import React, { Component } from "react";
import Dice from "./components/Dice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div class="Dice">
          <Dice />
        </div>
        <div class="Roll"></div>
      </>
    );
  }
}

export default App;
