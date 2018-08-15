import { Button } from '@progress/kendo-react-buttons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class KendoButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            primary: this.props.primary ,
            disabled: this.props.disabled 
        }
    }
    buttonIsClicked = (event) =>{
        this.props.buttonEventHandler(event);
    }
    render(){
        return(
            <Button  onClick={this.buttonIsClicked} primary={this.state.primary} disabled={this.state.disabled}>Browse</Button>
        )
    }
}
export default (KendoButton);