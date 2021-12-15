// We're using React and destructuring Component from the React library
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Favorites from './components/Favorites'


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

export default App
