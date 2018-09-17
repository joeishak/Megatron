// Npm Modules
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// Custom Components and Styles
import * as actions from 'actions';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { spawn } from 'child_process';
import Select from 'react-select'
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
        console.log('LOGGING THE CURRENT FILTER ARRAY: ',this.props.defaultItem);
        //Binding functions to this
        this.handleFilterChange = this.handleFilterChange.bind(this);
        // this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters)
        
    }
  
    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        this.props.addValueToActiveMultiFilter(event.target.value);
        // this.setState({value: event.target.value});
        // this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters)
        // this.getFilterValue();

    }
    
    render(){
        
        // console.log('Default Item',this.props.defaultItem);

        return(
            <DropDownList 
                style={inStyles.background} 
                textField="value"
                data={this.props.data} 
                onChange={this.handleFilterChange}
                // defaultItem={ this.props.defaultItem[0]}
<<<<<<< HEAD
                value = {this.props.defaultItem[0].value}
=======
                value = {this.props.defaultItem[0]}
>>>>>>> 0b272caaf3ff49344157ccab93088e9e40bf5058
                 />

           
      
        )
    }
}

function mapStateToProps(state) {
    // console.log('Active filters: ',state.activeFilters);
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)