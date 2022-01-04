import react, { Component } from 'react'

class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: ["blue", "pink", "green", "orange", "yellow"],
      index : 0,
      color: "blue"
    }
  }
  changeColor = () => {
    if (this.state.index < this.state.colors.length){
    this.setState({index: this.state.index +1})
    this.setState({color: this.state.colors[this.state.index]})

  } else {
    this.setState({index: 0})
  }
    }

  render(){
    return (
      <>
        <div id="square"
          onClick={this.changeColor}
          style={{background: `${this.state.color}`}}

          > {this.state.color}
        </div>
     </>
    )
  }
}

export default Button
