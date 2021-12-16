// Challenge: Color Box
// User Stories
// As a user, I can see a white square on the screen （done）
// As a user, when I click on the square the name of a color appears in the box（done）
// As a user, each time I click the box I see a new color name（done）
// As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange （done）
// As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// As a user, I can see many color boxes on the page all acting independently of one another
// Stretch
// As a user, I can see a button to add or remove color boxes
// As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
// As a user, when I click the remove button, I can remove one colorbox
import React, { Component } from 'react'

class Colorbox extends Component{
    constructor(props){
      super(props)
      this.state = {
        color: ["green", "blue", "yellow", "red", "purple", "orange"],    
        index: 0,
        background:"white"
      }
    }
    changeName = () => {
        
        this.setState({index: this.state.index + 1})
        // let colorIndex = this.state.count + 1
        // this.setState({color: this.state.color[this.state.index]})
        //this.state({color: color[this.state.index]})
        //background
        //alert("Yo!")
        // #42  <h2>Colorbox: {this.state.color[this.state.index]}</h2>
      }
      addBox = () => {
      alert("Im clicking")
      }
      deleteBox = () => {
        alert("Clicking Delete Botton")
      }
    render(){
      return(
        <>
         <button onClick={this.addBox} >
             Add a Color Box
         </button>
         <button onClick={this.deleteBox}>
             Remove a Color Box
         </button>
         <div id = "square"  onClick = {this.changeName} style={{background: this.state.color[this.state.index]}}>
            
         </div>
         
        </>
      )
    }
  }
  
  export default Colorbox
