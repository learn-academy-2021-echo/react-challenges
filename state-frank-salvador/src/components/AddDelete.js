import React, { Component } from 'react'
import Square from './Square'

export default class AddDelete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boxesList: []

        }
    }

    addBoxes = () => {
        this.setState({
            boxesList: [...this.state.boxesList, <Square />]
        })
    }

    deleteBoxes = () => {
        let array = [...this.state.boxesList]
        array.pop()
        this.setState({ boxesList: array })
    }
    render() {
        return (
            <div>
                <button onClick={this.addBoxes}>add box</button>
                <button onClick={this.deleteBoxes}>delete box</button>
                {this.state.boxesList}
            </div>
        )
    }
}
