import React, { Component } from 'react'
import "./square.css"

export default class Square extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: ["white", "green", "blue", "yellow", "red", "purple", "orange"],
            index: 0,
            color: "white"
        }
    }
    colorToggle = () => {
        this.setState({ index: (this.state.index + 1 < this.state.colors.length ? this.state.index + 1 : 0) })
        this.setState({ color: this.state.colors[this.state.index] })
    }




    render() {
        return (
            <div>
                <div
                    className="box" onClick={this.colorToggle} style={{ background: `${this.state.color}` }}>
                    {this.state.color}
                </div>

            </div>

        )
    }
}
