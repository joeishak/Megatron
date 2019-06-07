// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Custom Components and Styles
import styles from './FilterPillBox.css';
import * as actions from 'actions';

class FilterPillBox extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            // value: this.props.data.value
        }

        //Binding functions to this
    }

   
    render() {
        return (

            <span className="filterText" >{this.props.data.value}</span>

        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, actions)(FilterPillBox)