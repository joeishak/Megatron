import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  * as actions from 'actions';

import {  Switch } from '@progress/kendo-react-inputs';


class KendoSwitch extends Component {
    constructor(props){
        super(props);
    }
    
    changeSwitch = (event) =>{
        this.props.updateSwitchFilterValue(event.target.value);
    }
    render(){
        return(
            <Switch onChange={this.changeSwitch} onLabel={this.props.onLabel} offLabel={this.props.offLabel}/>
        );
    }
}

function mapStateToProps(state) {
    return {};
  }
  
  export default connect(mapStateToProps,actions) (KendoSwitch);