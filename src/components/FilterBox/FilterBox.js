import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FilterBox.css';
import KendoMultiSelect  from '../KendoMultiSelect/KendoMultiSelect';

class FilterBox extends Component {
    render(){
        return(

            <div className="filterContainer">
                <KendoMultiSelect className="multiSelect" />
            </div>
        )
    }
}

export default (FilterBox)