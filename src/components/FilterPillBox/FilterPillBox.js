import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FilterPillBox.css';
import KendoMultiSelect  from '../KendoMultiSelect/KendoMultiSelect';

class FilterPillBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter:{
                filterCategory: "",
                value: ""
            }
           
        }
    }
    
    render(){
        return(
            <span className="filterText" >{this.state.filter.value}<span className="xButton" onClick={this.props.removefilter}>x</span></span>
        )
    }
}

export default (FilterPillBox)