import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FilterBox.css';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

class FilterBox extends Component {
    render(){
        return(

            <div className="filterContainer">
                <MultiSelect className="multiSelect" />
            </div>
        )
    }
}

export default (FilterBox)