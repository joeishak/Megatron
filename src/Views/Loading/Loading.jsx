import React, { Component } from 'react'
import styles from "./Loading.css";

class LoadingScreen extends Component {
    render () {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <div class="loader">
                </div>
            </div>
        )
    }
}

export default LoadingScreen