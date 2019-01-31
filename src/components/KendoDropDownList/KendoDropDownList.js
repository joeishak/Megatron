// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Custom Components and Styles
import * as actions from 'actions';
import styles from './KendoDropDownList.css';
import { DropDownList } from '@progress/kendo-react-dropdowns';
// In Line Styles
const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}

class KendoDropDownList extends Component {
    //When the component is constructed
    constructor (props) {
        super(props);
        // Initialize state
        this.state = {
            data: this.props.availableFilters.quarters,
            type: props.type,
            val: this.props.defaultItem
            
        }
        //Binding functions to this
        this.handleFilterChange = this.handleFilterChange.bind(this);
        
    }
  
    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        this.props.addValueToActiveMultiFilter(event.target.value);
    }
    
    render(){
        return(
            <div className="kdropDownLaptop">
                <DropDownList 
                    style={inStyles.background} 
                    textField="value"
                    data={this.props.data} 
                    onChange={this.handleFilterChange} 
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)