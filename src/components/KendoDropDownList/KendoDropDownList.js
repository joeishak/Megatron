import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { DropDownList } from '@progress/kendo-react-dropdowns';
class KendoDropDownList extends Component {
    contructor (props){
        super(props);
        
    }
    sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];
    render(){
        return(
            <DropDownList data={this.sports} defaultValue="Basketball" />
        )
    }
}

export default (KendoDropDownList)