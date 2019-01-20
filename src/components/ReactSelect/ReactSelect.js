import React from 'react'
import Select from 'react-select'

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

    if ( objList !== undefined) {
        if (objList[0] !== undefined) {

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

// Render Component
const ReactSelect = (props) => {
    return (
<<<<<<< HEAD:src/components/KendoDialog/Components/ReactSelect.js
        <Select options={transformList(props.options)}  closeMenuOnSelect={false} onMenuClose={e => { console.log('MENU CLOSED')}} defaultValue={transformDefaultList(props.defaultValue)} onChange={props.updateFilter}/>
=======
        <Select options={transformList(props.options)} closeMenuOnSelect={true}  defaultValue={transformDefaultList(props.defaultValue)} onChange={props.updateFilter}/>
>>>>>>> d40e6d250433df469f05ef84fad8b8b6f0c33cd8:src/components/ReactSelect/ReactSelect.js
    );
};

export default ReactSelect;