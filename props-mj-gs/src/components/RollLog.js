import React, { Component } from 'react'
import '../App.css';


export class RollLog extends Component {
    render() {
        return (
            <div>
                <div className="roll-log"> 
                    <p>Rolls</p>
                        <div className = "list"> {this.props.dice.map(value =>
                            <li>{value}</li>)}
                        </div>
                </div>
            </div>
        )
    }
}

export default RollLog
