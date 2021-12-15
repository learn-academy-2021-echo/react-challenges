import React, { Component } from "react";
import Header from './components/Header.js'
import Profile from './components/Profile.js'
import Favorites from './components/Favorites.js'
import Footer from './components/Footer.js'

import './App.css';

class App extends Component{
  render(){
    return(
      <>
      <Header />
      <Profile />
      <Favorites />
      <Footer />
      </>
      
      
    )
  }
}

export default App;






// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Deon & D
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }