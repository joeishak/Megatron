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
        
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event){

        console.log(event);
        this.props.addValueToActiveMultiFilter({
            category: this.props.category,
            value: event.target.value
        });
    }
    render(){
        return(
            <DropDownList 
                style={inStyles.background} 
                data={this.props.data} 
                onChange={this.handleFilterChange}/>
        )
    }
}

function mapStateToProps(state) {
    return {};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)