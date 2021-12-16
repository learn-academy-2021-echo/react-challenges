//for a successful project, need to import component from react parent
import React, { Component } from 'react';
import './App.css';
import Boxes from './Components/Boxes';

class App extends Component {
  render(){
    return(
    <>
    <Boxes />
    {/* <h1>this is our start</h1>
    <button id = "button1" onClick={this.changeColor} style = {{color: this.state.color, background: this.state.background, width: 200, height: 200}}>button</button>
    <div id = "box1"></div> */}
    </>
    )
  }
}
export default App