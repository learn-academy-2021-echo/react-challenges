import React, { Component } from "react"
import './App.css';
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";
import KanyeBot from "./components/KanyeBot";
import Dude from "./dude.svg"

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {  
        userInput: [],

      }
      
    }

    handleChange = (e) => {
      console.log(e.target);
      console.log(e.target.value);
      this.setState({ userInput: e.target.value });
      console.log(e);
    }



    render() { 
      return ( 
        <>
        <h1>Robo Active Listening</h1>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-astronaut" class="svg-inline--fa fa-user-astronaut fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>
        <input type="test" 
        // value={this.state.userInput}
        onChange={this.handleChange}
        />
        <GoodRobot value={this.state.userInput}/>
        <BadRobot value={this.state.userInput}
        onChange={this.handleChange}
        />
        <KanyeBot value={this.state.userInput}/>



        </>
       
       );
       
    }
  }
 

export default App;
