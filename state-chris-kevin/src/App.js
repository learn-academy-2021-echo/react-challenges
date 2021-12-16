import React , { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "white"
    }
  }

nameColor = () =>{
  let newColor = this.state.color
   this.setState({color: newColor})
}


render(){
  
  
  return (
    <>
    <button onClick = {this.nameColor}>
    </button>
    
    
    
    </>
  )
  }
}



export default App;
