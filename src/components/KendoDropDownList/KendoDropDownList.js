// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Custom Components and Styles
import * as actions from 'actions';
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
        // console.log('LOGGING THE CURRENT FILTER ARRAY: ',this.props.defaultItem);
        //Binding functions to this
        this.handleFilterChange = this.handleFilterChange.bind(this);
        // this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters)
        
    }
  
    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        this.props.addValueToActiveMultiFilter(event.target.value);
    }
    
    render(){
        
        // console.log('Default Item',this.props.defaultItem);

        return(
            <DropDownList 
                style={inStyles.background} 
                textField="value"
                data={this.props.data} 
                onChange={this.handleFilterChange} 
                 />

            // <select style={{color:'black'}} onChange = {this.handleFilterChange} value={this.props.defaultItem[0]}>
            // {this.props.data.map(item=>{
            //     if(this.props.defaultItem[0] === item){
            //         return ( <option onChange = {this.handleFilterChange} selected value={item}>{item.value}</option>)
            //     } else{
            //         return(<option onSelect = {this.handleFilterChange}  value={item}>{item.value}</option> )
            //     }
            // }) }</select>

           
      
        )
    }
}

function mapStateToProps(state) {
    // console.log('Active filters: ',state.activeFilters);
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)