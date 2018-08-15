import { Button } from '@progress/kendo-react-buttons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class KendoButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            primary: props.primary || true,
            disabled: props.disabled || true
        }
    }
    render(){
        return(
            <Button primary={this.state.primary} disabled={this.state.disabled}>Browse</Button>
        )
    }
}
export default (KendoButton);