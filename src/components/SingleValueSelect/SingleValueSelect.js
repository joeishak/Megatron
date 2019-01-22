import React from 'react'
import Select from 'react-select'
import * as styles from './SingleValueSelect.css';
// Transform the list so that the component can render the drop downs
let transformList = (objList) => {

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
                })
        }
    }
    return newObjList;
};

let transformDefaultList = (objList) => {

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

// Render Component
const SingleValueSelect = ({options, activeFilters, defaultValue,onValueChange, onMenuClose}) => {
    return (
        <Select
        className="blackText"
            // value={transformList(activeFilters)}
            options={transformList(options)}
            closeMenuOnSelect={true}
            onMenuClose={(e) => {
                console.log('Menu Closed',e),
                onMenuClose(e)
            }}
            defaultValue={transformDefaultList(defaultValue)} onChange={onValueChange} 
            />
    );
};

export default SingleValueSelect;