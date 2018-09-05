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
            value: 'All Data',
            type: props.type
        }

        //Binding functions to this
        this.handleFilterChange = this.handleFilterChange.bind(this);

    }
  
    componentDidMount(){
        
    }
    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        
        this.setState({value: event.target.value});
        //Call action from props to add a new filter to the active filters
        this.props.addValueToActiveMultiFilter(event.target.value);
    }
    render(){
      
        
        return(
            <DropDownList 
                style={inStyles.background} 
                textField="value"
                data={this.props.data} 
                onChange={this.handleFilterChange}
                value={this.state.value}
                defaultvalue={'All Data'} />
      
        )
    }
}

function mapStateToProps(state) {
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)