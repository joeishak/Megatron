// Npm Modules
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// Custom Components and Styles
import * as actions from 'actions';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
// import { spawn } from 'child_process';
import Select from 'react-select'
import styles from './KendoDropDownList.css';

// In Line Styles
const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class KendoDropDownList extends Component {
    //When the component is constructed
    constructor (props) {
        super(props);
        // Initialize state
        this.state = {
            data: this.props.availableFilters.quarters,
            value: 'All Data',
            type: props.type,
            defaultFilters:[
                {index: 0, category: 'quarters', value:1}
            ],
            def: this.props.defaultValue
        }

  
        //Binding functions to this
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.transformList = this.transformList.bind(this);
        this.transformList2 = this.transformList2.bind(this);

    }

  
    //Event handler for when a drop down list item is selected
    handleFilterChange(event){
        // this.props.addValueToActiveMultiFilter(event.target.value);
        // this.setState({value: event.target.value});
        // this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters);
        this.props.addValueToActiveMultiFilter(event);
    }


    transformList = (objList) => {

        let newObjList = [];
        if (objList !== undefined && objList !== []) {
            
            // Iterate through each list of objects and convert
            for (let i = 0; i < objList.length; i++) {
                newObjList.push(
                    {
                        index: objList[i].index,
                        category: objList[i].category,
                        value: objList[i].value,
                        label: objList[i].value
                    }
                )
            }
    
        }
        return newObjList;
    };
    


    transformList2 = (objList) => {

    
        if ( objList !== undefined) {
            if (objList[0] !== undefined) {
                // console.log('TESTING', objList[0]);
                let newObj  = {
                    index: objList[0].index,
                    category: objList[0].category,
                    value: objList[0].value,
                    label: objList[0].value
                };
                return newObj; 
            }
        }
    }

    render(){
        // console.log('debug', this.props.defaultValue);
        return(
            // <DropDownList 
            //     style={inStyles.background} 
            //     textField="value"
            //     data={this.props.data} 
            //     onChange={this.handleFilterChange}
            //     value={this.state.value}
            //     defaultvalue={'All Data'} />
            <Select 
                options={this.transformList(this.props.data)} 
                defaultValue={this.transformList2(this.props.defaultValue)}
                className="dropDown" 
                onChange={this.handleFilterChange}/>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.availableFilters);
    return {activeFilters:state.activeFilters, availableFilters: state.availableFilters};
  }
  
export default connect(mapStateToProps,actions)(KendoDropDownList)