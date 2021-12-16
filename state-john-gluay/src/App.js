import React, { Component } from 'react'
import Header from './components/Header'
import Box from './components/Box'
import './App.css'


class App extends Component {
  render() {
    return (
     <>
     <Header />
     <div id="bigDiv">
     <Box />
     <Box />
     <Box />
     <Box />
     <Box />
     <Box />
     <Box />
     <Box />

     </div>
     </>
    )
  }
}

export default App
