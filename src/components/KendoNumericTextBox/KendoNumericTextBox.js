import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NumericTextBox } from '@progress/kendo-react-inputs';

class KendoNumericTextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    ChangeKilometers = (e) => {
        this.setState({
            value: e.value
        });
    }

    ChangeMiles = (e) => {
        this.setState({
            value: e.value !== null ? e.value * 1.609344 : null
        });
    }
    render(){
        return(
            <div>
            <label>
                <NumericTextBox
                    placeholder="please enter value"
                    value={this.state.value}
                    onChange={this.ChangeKilometers}
                /> Kilometers
            </label>
            <br />
            <label>
                <NumericTextBox
                    placeholder="please enter value"
                    value={this.state.value == null ? null : this.state.value / 1.609344}
                    onChange={this.ChangeMiles}
                /> Miles
            </label>
        </div>
        )
    }
}

export default (KendoNumericTextBox)