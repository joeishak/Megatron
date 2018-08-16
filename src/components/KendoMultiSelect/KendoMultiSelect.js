import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
const sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];

class KendoMultiSelect extends Component {
    state = { value: [] };
    onChange = (event) => {
        this.setState({
            value: [ ...event.target.value ]
        });
    }
    render() {
        return(
            <MultiSelect
                        data={sports}
                        onChange={this.onChange}
                        value={this.state.value}
                    />
        )
    }
}

export default (KendoMultiSelect)