import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { connect } from 'react-redux';
import  * as actions from 'actions';

const sports = [  ];

class KendoMultiSelect extends Component {


    onChange = (event) => {
        this.props.updateMultiFilterValues(event.target.value);
       
    }
    
    render() {
        return(
            <MultiSelect
                        data={sports}
                        onChange={this.onChange}
                        value={this.props.filters.values}
                    />
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {filters: state.filters};
  }
  
  export default connect(mapStateToProps,actions)(KendoMultiSelect)