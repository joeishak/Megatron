import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import { DropDownList } from '@progress/kendo-react-dropdowns';
const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}
class KendoDropDownList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: props.data,
            value: props.data[0]
            
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        // console.log(this.state.data[0])
    }

     
    handleFilterChange(event){
        this.setState({value: event.target.value});
        this.props.addValueToActiveMultiFilter(event.target.value);
    }
    render(){
        return(
            <DropDownList 
                style={inStyles.background} 
                textField="value"
                data={this.state.data} 
                onChange={this.handleFilterChange}
                value={this.state.value}
                defaultvalue={this.state.data[0]}
                />
        )
    }
}

function mapStateToProps(state) {
    return {activeFilters:state.activeFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)