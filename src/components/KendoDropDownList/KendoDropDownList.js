import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { DropDownList } from '@progress/kendo-react-dropdowns';
const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}
class KendoDropDownList extends Component {
    constructor (props) {
        super(props);
        
    }
    render(){
        return(
            <DropDownList style={inStyles.background} data={this.props.data} defaultValue="Basketball" />
        )
    }
}

export default (KendoDropDownList)