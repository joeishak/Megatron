import React from 'react'
import Select from 'react-select'

// Transform the list so that the component can render the drop downs
let transformList = (objList) => {

    let newObjList = [];
        if(objList !== undefined  && objList !== [] && objList.length!==0){
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
const MultiValueSelect = ({ options, defaultValue, onValueChange, values, onMenuClose }) => {
    return (
        <Select
            className="blackText"
            options={transformList(options)}
            values={transformList(values)}
            closeMenuOnSelect={false}
            isMulti
            onMenuClose={(e) => {
                // console.log('Menu Closed',e),
                onMenuClose(e)
            }}
            onMenuOpen={
                (e)=>{
                    console.log('Blurring');
                }
            }
            defaultValue={transformDefaultList(values)} onChange={onValueChange}
            theme={(theme) => ({
                ...theme,
                borderRadius: 3,
                colors: {
                ...theme.colors,
                  primary25: '#3C3C3C',
                  primary: '#2978D9',
                  primary50: 'darkgray'
                },
              })}
        />
    );
};

export default MultiValueSelect;