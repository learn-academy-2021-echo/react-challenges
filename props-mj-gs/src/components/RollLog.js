import React, { Component } from 'react'
import '../App.css';


export class RollLog extends Component {
    render() {
        return (
            <div>
                <div className="roll-log"> 
                    <p>Rolls</p>
                    {this.props.dice}
                    
                    
                </div>
            </div>
        )
    }
}

export default RollLog
