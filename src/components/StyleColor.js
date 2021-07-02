import './StyleColor.css'
import React, { Component } from 'react'

const StyleColor = class extends Component {

    cons
    dte = new Date();

    value = this.dte.toISOString();

    user = "Gokul Jaeger";
    clr = "red";

    render() {
        return (
            <div className="rainbow">
                <div>
                    <h1>My First Component </h1>
                    <hr/>
                    <h3>User: {this.user}</h3>
                    <hr/>
                    <h5>Date: {this.value}</h5>
                    <hr/>
                </div>
                {/* <br/>
                <div className="gradient-border" id="box">
                    
                </div>
                <br/>
                <div className="gradient-border" id="box">
                    
                </div> */}
            </div>
        )
    }
}

export default StyleColor;
