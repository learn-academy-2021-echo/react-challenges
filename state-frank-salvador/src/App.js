import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import AddDelete from './components/AddDelete';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddDelete />
      </div>
    )
  }
}

