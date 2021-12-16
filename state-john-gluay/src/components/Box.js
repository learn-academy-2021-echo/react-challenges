import React, { Component } from 'react'


class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
            num: 0,
            colors: ["white", "green", "blue", "yellow", "red", "purple", "orange"],
            color: "white"
      }
}

  colorName = () => {


  this.setState({ num: (this.state.num + 1 < this.state.colors.length ? this.state.num + 1 : 0) })
  this.setState({color: this.state.colors[this.state.num]})


  }//closing tag




  render() {
    return (
     <>
     <div id="square" onClick={this.colorName}>{this.state.color}</div>
     </>
    )
  }
}

export default Box
