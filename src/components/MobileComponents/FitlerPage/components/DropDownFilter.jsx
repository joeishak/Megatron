import React from 'react'
import styles from './DropDownFilter.css';
import { DropDownList } from '@progress/kendo-react-dropdowns';


const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}

const DropDownFilter = (props) => {
    return (
        <div className="dropDownContainerK">
            <p className="dropDownTitle">{props.title}</p>
         
            <div className="kdropDown">
                <DropDownList 
                    style={inStyles.background} 
                    textField="value"
                    data={props.options} 
                    onChange={props.updateFilter} 
                    />
            </div>
        </div>
    )
}

export default DropDownFilter