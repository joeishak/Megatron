import React from 'react'
import styles from './DropDownFilter.css';
import { DropDownList } from '@progress/kendo-react-dropdowns';

// import React Select
// import ReactSelect from '../../../KendoDialog/Components/ReactSelect';
// import KendoDropDownList from '../../../KendoDropDownList/KendoDropDownList';

const inStyles = {
    background :{
        backgroundColor: '#3c3c3c'
    }
}

const DropDownFilter = (props) => {
    return (
        <div className="dropDownContainerK">
            <p className="dropDownTitle">{props.title}</p>
           {/* <ReactSelect updateFilter={props.updateFilter} defaultValue={props.defaultValue} options={props.options} ></ReactSelect> */}
            <div className="kdropDown">
                {/* <KendoDropDownList type='quarters' defaultItem={props.defaultValue} data={props.options}/> */}
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