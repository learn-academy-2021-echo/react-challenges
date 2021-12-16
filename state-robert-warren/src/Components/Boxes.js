class Boxes extends Component {
    constructor(props){
      super(props)
      this.state = {
        color: "white",
        colorText: "white",
        background: "black",
  
      }
  
      var changeColor = () => {
        //on click for button1 needs to change color of button
        //need this.setState to change both color and color text
        this.setState({background: this.state.background = "white"})
      }
    }
    render(){
      return(
      <>
      <h1>this is our start</h1>
      <button id = "button1" onClick={this.changeColor} style = {{color: this.state.color, background: this.state.background, width: 200, height: 200}}>button</button>
      <div id = "box1"></div>
      </>
      )}
  }
  export default Boxes