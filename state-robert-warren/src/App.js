//for a successful project, need to import component from react parent
import React, { Component } from 'react';
import './App.css';
import Boxes from './Components/Boxes';
import BoxButton from './Components/BoxButton';


class App extends Component {
  render(){
    return(
    <>
    <h1>We are the best</h1>
    {/* {[ <Boxes />, <Boxes />, <Boxes />]} */}
    {<BoxButton/>}
      
    </>
    )
  }
}
export default App