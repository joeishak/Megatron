import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { DropDownList } from '@progress/kendo-react-dropdowns';
class KendoDropDownList extends Component {
    constructor (props) {
        super(props);
        
    }
    render(){
        return(
            <DropDownList data={this.props.data} defaultValue="Basketball" />
        )
    }
}

export default (KendoDropDownList)