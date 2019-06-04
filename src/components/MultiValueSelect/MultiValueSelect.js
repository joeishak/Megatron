import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Picky from "react-picky";


class MultiValueSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options,
            value: this.props.values
        }
    }

    transformList = (objList) => {

        let newObjList = [];
        if (objList !== undefined && objList !== [] && objList.length !== 0) {
            // console.log('The length of the value filters: ',objList);
            // Iterate through each list of objects and convert
            for (let i = 0; i < objList.length; i++) {
                newObjList.push(
                    {
                        index: objList[i].index,
                        category: objList[i].category,
                        value: objList[i].value,
                        label: objList[i].value
                    })
            }
        }

        return newObjList;
    };

    transformDefaultList = (objList) => {

        if (objList !== undefined) {
            if (objList[0] !== undefined) {

                let newObj = {
                    index: objList[0].index,
                    category: objList[0].category,
                    value: objList[0].value,
                    label: objList[0].value
                };



                return newObj;
            }
        }
    }


    render() {
        return (
            // <Select
            //     className="blackText"
            //     options={this.transformList(this.props.options)}
            //     value={this.props.value}
            //     closeMenuOnSelect={false}
            //     isMulti
            //     components={makeAnimated()}
            //     onMenuClose={(e) => { this.props.onMenuClose(e)}}
            //     onChange={(e) => this.props.onValueChange(e)}
            //     theme={(theme) => ({
            //         ...theme,
            //         borderRadius: 3,
            //         colors: {
            //         ...theme.colors,
            //           primary25: '#3C3C3C',
            //           primary: '#2978D9',
            //           primary50: 'darkgray'
            //         },
            //       })}
            // />
            <Picky
                className='pickyDropDown'
                value={this.props.value}
                options={this.props.options}
                onChange={(e) => this.props.onValueChange(e)}
                valueKey="index"
                labelKey="value"
                multiple={true}
                includeSelectAll={true}
                includeFilter={true}
                dropdownHeight={200}
                onClose={(e) => { this.props.onMenuClose(e)}}
            />
        );
    }
}

function mapStateToProps(state) {

    return {
        activePrimary: state.activeCards.primary
    };
}

export default connect(mapStateToProps, actions)(MultiValueSelect)