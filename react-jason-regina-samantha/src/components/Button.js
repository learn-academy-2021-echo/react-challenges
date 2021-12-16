
import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    addBox = () => {
        alert("Im clicking")
        // this.setState({ index: this.state.index + 1 })
        let newCount = this.state.count + 1
        this.setState({ count: newCount })
    }
    deleteBox = () => {
        alert("Clicking Delete Botton")
    }
    render() {
        let { count } = this.state
        return (
            <>
                <button onClick={this.addBox} >
                    Add a Color Box
                </button>
                <button onClick={this.deleteBox}>
                    Remove a Color Box
                </button>


            </>
        )
    }
}

export default Button


