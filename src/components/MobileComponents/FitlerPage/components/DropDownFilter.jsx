import React from 'react'
import styles from './DropDownFilter.css';

// import React Select
import ReactSelect from '../../../KendoDialog/Components/ReactSelect';

const DropDownFilter = (props) => {
    return (
        <div className="dropDownContainer">
            <p className="dropDownTitle">{props.title}</p>
            {/* React Select takes updateFilter={this.updateActiveFiltersHandler}, defaultVaue={this.props.activeFilters}, and options={this.props.availableFilters.quarters} */}
           <ReactSelect updateFilter={props.updateFilter} defaultValue={props.defaultValue} options={props.options} ></ReactSelect>
        </div>
    )
}

export default DropDownFilter