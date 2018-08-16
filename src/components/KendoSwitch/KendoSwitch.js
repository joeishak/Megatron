import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {  Switch } from '@progress/kendo-react-inputs';


class KendoSwitch extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Switch onLabel={this.props.onLabel} offLabel={this.props.offLabel}/>
        );
    }
}

export default (KendoSwitch);