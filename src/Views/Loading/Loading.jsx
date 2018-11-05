import React, { Component } from 'react'
import styles from './Loading.css';

class Loading extends Component {
    render () {
        return (
            <div className="loading-container">
                <div className="box">
                    <div className="b b1"></div>
                    <div className="b b2"></div>
                    <div className="b b3"></div>
                    <div className="b b4"></div>
                </div>
            </div>
        )
    }
}

export default Loading