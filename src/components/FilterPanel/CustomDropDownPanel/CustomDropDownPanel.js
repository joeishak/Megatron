// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
// Custom Components and Styles
import * as actions from 'actions';
import styles from './CustomDropDownPanel.css';
import { Button } from '@progress/kendo-react-buttons';
import KendoDropDownList from '../../KendoDropDownList/KendoDropDownList'
import SingleValueSelect from '../../SingleValueSelect/SingleValueSelect';
import MultiValueSelect from '../../MultiValueSelect/MultiValueSelect';
import * as _ from 'lodash';
import { writeSync } from 'fs';
class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            isButtonHighlighted: false,
            showContainer: this.props.showContainer,
            selectedFilters: [...this.props.filters.quarters.valueFilters, ...this.props.filters.segments.valueFilters],
            activeDataFilters: [],
        }
    }

    componentDidUpdate() {
        // console.log('UPDATING');
        // console.log(this.props.filters);
        // // console.log('Updated Filters. . .', this.state.selectedFilters);
        // if(this.props.filters.quarters.valueFilters.length!==0){
        //     this.setState({selectedFilters: [...this.state.selectedFilters, ...this.props.filters.quarters.valueFilters]})
        // }
        // if(this.props.filters.segments.valueFilters.length!==0){
        //     this.setState({selectedFilters: [...this.state.selectedFilters, ...this.props.filters.segments.valueFilters]})
        // }
    }
    updateSingleValue = (e) => {
        // console.log('Updating SingleValue',e);
        let copy = this.state.selectedFilters;
        if (this.state.selectedFilters.length === 0) {
            this.setState({ selectedFilters: [e] })
        } else {

            //Find any with the same category
            _.remove(copy, item => { return item.category === e.category });
            _.remove(copy, item => { return item.index === e.index });
            if (copy.length === 0) {
                this.setState({ selectedFilters: [e] })
            } else {
                this.setState({ selectedFilters: [...copy, e] })

            }

        }

        this.setState({ isButtonHighlighted: true });

    }
    updateMultiValue = (e, type) => {
        // console.log('Updating MultiValue',e,type);
        let copy = this.state.selectedFilters;
        if (e.length === 0) {
            _.remove(copy, item => { return item.category === type });
            this.setState({ selectedFilters: [...copy] })

        } else {
            _.remove(copy, item => { return item.category === e[0].category });
            this.setState({ selectedFilters: [...copy, ...e] })
        }

        this.setState({ isButtonHighlighted: true });


    }
    componentWillUnmount() {
        this.setState({ selectedFilters: [] })
    }
    closeSingleValue = (e) => {
        // console.log('Closing Single Value',e);
    }
    closeMultiValue = (e) => {
        // console.log('Closing Multivalue',e);
    }
    updateActiveFiltersHandler = (e) => {
        if (!_.find(this.state.selectedFilters, (item => { return item.index === e.index }))) {
            this.setState({ selectedFilters: [...this.state.selectedFilters, e] })
        }
        // this.props.addValueToActiveMultiFilter(e);
    }

    closed = (e) => {
        // console.log('Hello', this.state.selectedFilters);
    }
    submitFilters = (e) => {
        // console.log('Submitting Filters . . . ');
        this.setState({ isButtonHighlighted: false })
        let newFilters = {
            quarters: [],
            segments: [],
            products: [],
            markets: [],
            routes: [],
            subscriptions: [],
            geos: []
        };

        Object.keys(newFilters).forEach(item => {

            switch (item) {
                case 'quarters':
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === 'quarters' })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === 'quarters' }))] : /* Else */
                        [...this.props.filters.quarters.valueFilters];
                    break;
                case 'segments':
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === 'segments' })) ?
                        [_.find(this.state.selectedFilters, (item => { return item.category === 'segments' }))] :
                        [...this.props.filters.segments.valueFilters];
                    break;
                default:
                    let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category === item }));
                    // console.log(grouped);
                    if (grouped.false !== this.state.selectedFilters.length) {

                        if (grouped.true !== undefined) {
                            newFilters[item] = grouped.true
                        } else {
                            newFilters[item] = [];
                        }
                    } else {
                        newFilters[item] = [];
                    }
                    break;
            }

        });


        this.setState({ selectedFilters: [] })

        this.props.submitFilters(newFilters);
        //  this.props.getSummaryData(newFilters);
        this.props.handleClose();
    }
    getGlobalSubFilters(filters, quarterFilterContainer) {
        switch (this.props.summaryData.primary[this.props.activeCards.primary].index) {
            case 0:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 1</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Global Sub Filter 2</p>
                            <SingleValueSelect
                                activeFilters={filters.quarters.valueFilters}
                                options={filters.quarters.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        const { filters } = this.props;
        const isGlowing = this.state.isButtonHighlighted ? 'myGlower' : '';

        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelBarContainer-open': (this.props.showContainer) ? true : false,
            'panelBarContainer-closed': (this.props.showContainer) ? false : true
        });
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
            'quarterFilterContainer-open': (this.props.showContainer) ? true : false,
            'quarterFilterContainer-closed': (this.props.showContainer) ? false : true
        });
        return (
            <div className={panelDropDownContainer} >
                <div className={quarterFilterContainer + ' col-lg-2'} >
                    <p> Quarter</p>
                    <SingleValueSelect
                        activeFilters={filters.quarters.valueFilters}
                        options={filters.quarters.availableFilters}
                        onValueChange={this.updateSingleValue}
                        onMenuClose={this.closeSingleValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-3'} >
                    <p> Geo</p>
                    {/* <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.geos[0]}
                        onClose={(e) => { this.closed(e) }}
                        options={this.props.availableFilters.geos}></ReactSelect> */}
                    <MultiValueSelect
                        options={filters.geos.availableFilters}
                        onValueChange={(e) => { let type = 'geos'; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />

                </div>
                <div className={quarterFilterContainer + ' col-lg-4'} >
                    <p> Market Area</p>
                    <MultiValueSelect
                        options={filters.markets.availableFilters}
                        onValueChange={(e) => { let type = 'markets'; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                        values={_.groupBy(this.state.selectedFilters, (item => { return item.category === 'markets' }))}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-3'} >
                    <p>  Route To Market</p>
                    <MultiValueSelect
                        options={filters.routes.availableFilters}
                        onValueChange={(e) => { let type = 'routes'; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-2'} >
                    <p> Segment</p>
                    <SingleValueSelect
                        activeFilters={filters.segments.valueFilters}
                        options={filters.segments.availableFilters}
                        onValueChange={this.updateSingleValue}
                        onMenuClose={this.closeSingleValue}
                    />

                </div>
                <div className={quarterFilterContainer + ' col-lg-5'} >
                    <p> Subscription Offering</p>
                    <MultiValueSelect
                        options={filters.subscriptions.availableFilters}
                        onValueChange={(e) => { let type = 'subscriptions'; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-5'} >
                    <p> Product Category</p>
                    <MultiValueSelect
                        options={filters.products.availableFilters}
                        onValueChange={(e) => { let type = 'products'; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div>
                {this.getGlobalSubFilters(filters, quarterFilterContainer)}
                <div className={quarterFilterContainer + ' col-lg-12'}>
                    <input className={`button ` + isGlowing} type={'button'} onClick={this.submitFilters} value="Submit" />
                </div>


            </div>
        )
    }
}
function mapStateToProps(state) {
    return { filters: state.filters, summaryData: state.summaryData, activeCards: state.activeCards };
}
export default connect(mapStateToProps, actions)(CustomDropDownPanel)