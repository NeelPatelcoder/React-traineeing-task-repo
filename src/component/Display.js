import React, { Component } from 'react';
import "./Display.css";

class Display extends Component {
    render() {
        return (
            <>
                <div className="text" ><h1>Simple Calculator</h1>
                </div>
                <div className="Display">

                    <span> Result: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        {this.props.data}</span>

                </div>
            </>
        );
    }
}

export default Display;