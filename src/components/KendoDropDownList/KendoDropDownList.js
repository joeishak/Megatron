// Npm Modules
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// Custom Components and Styles
import * as actions from 'actions';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { spawn } from 'child_process';

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
        this.getNewValue = this.getNewValue.bind(this);
    }
  
   shouldComponentUpdate(){
       return true;
   }
  
   getNewValue(){


    switch(this.props.type){
        case 'quarters':
            this.setState({val: this.activeFilters.quarters[0]});
    }
   }

    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        this.props.addValueToActiveMultiFilter(event.target.value);
        // this.setState({value: event.target.value});
        this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters)
        // this.getFilterValue();

    }
    render(){
        return(
            <DropDownList 
                style={inStyles.background} 
                textField="value"
                data={this.props.data} 
                onChange={this.handleFilterChange}
                defaultItem={ this.state.val}
                defaultvalue={'All Data'} />
           
      
        )
    }
}

function mapStateToProps(state) {
    // console.log('Active filters: ',state.activeFilters);
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)