import React, { Component } from 'react'
import Select from 'react-select'


// Transform the list so that the component can render the drop downs
let transformList = (objList) => {
    let newObjList = [];
    if (objList !== undefined) {
        
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
    console.log(newObjList);
    return newObjList;
};

// Render Component
const ReactSelect = (props) => {

    return (
        <Select options={transformList(props.options)} value={props.defaultValue}/>
    );
};

export default ReactSelect;