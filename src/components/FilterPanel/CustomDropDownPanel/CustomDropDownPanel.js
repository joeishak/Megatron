// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
// Custom Components and Styles
import * as actions from 'actions';
import styles from './CustomDropDownPanel.css';
import KendoDropDownList from '../../KendoDropDownList/KendoDropDownList'
import ReactSelect from '../../KendoDialog/Components/ReactSelect';

class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            isOpen: false,
            isClosed: true,
            showSlide: this.props.showSlide,
            showContainer: this.props.showContainer,
            activeFil: this.props.activeFilters,
            selectedFilters: [],
            
        }
    }
    updateActiveFiltersHandler = (e) => {
        this.props.addValueToActiveMultiFilter(e);
    }
    render() {
        const { availableFilters } = this.props;
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
                <div className={quarterFilterContainer} >
                    <p> Quarter</p>
                    <KendoDropDownList type='quarters'
                        defaultItem={this.props.activeFilters.quarters} data={this.props.availableFilters.quarters} />
                </div>
                <div className={quarterFilterContainer} >
                    <p> Geo</p>
                    {/* <KendoDropDownList type='geos' defaultItem={this.props.activeFilters.geos} 
                            data={availableFilters.geos}/> */}
                    <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.geos[0]}
                        options={this.props.availableFilters.geos}></ReactSelect>

                </div>
                <div className={quarterFilterContainer} >
                    <p> Market Area</p>
                    {/* <KendoDropDownList 
                                type='markets' 
                                defaultItem={this.props.activeFilters.markets} 
                                data={availableFilters.marketAreas} /> */}
                    <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.markets[0]}
                        options={this.props.availableFilters.marketAreas}
                        >
                        
                        </ReactSelect>
                </div>
                <div className={quarterFilterContainer} >
                    <p>  Route To Market</p>
                    {/* <KendoDropDownList 
                                type='routes' 
                                defaultItem={this.props.activeFilters.routes} 
                                data={availableFilters.routeToMarkets}/> */}
                    <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.routes[0]}
                        options={this.props.availableFilters.routeToMarkets}></ReactSelect>
                </div>
                <div className={quarterFilterContainer} >
                    <p> Segment</p>
                    <KendoDropDownList
                        type='segments'
                        defaultItem={this.props.activeFilters.segments}
                        data={availableFilters.segments} />

                </div>
                <div className={quarterFilterContainer} >
                    <p> Subscription Offering</p>
                    {/* <KendoDropDownList
                        type='subscriptions'
                        defaultItem={this.props.activeFilters.subscriptions}
                        data={availableFilters.subscriptionOfferings} /> */}
                    <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.subscriptions[0]}
                        options={this.props.availableFilters.subscriptionOfferings}></ReactSelect>
                </div>
                <div className={quarterFilterContainer} >
                    <p> Product Name</p>
                    {/* <KendoDropDownList
                        type='products'
                        defaultItem={this.props.activeFilters.products}
                        data={availableFilters.products} /> */}
                    <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.products[0]}
                        options={this.props.availableFilters.products}></ReactSelect>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return { availableFilters: state.availableFilters, activeFilters: state.activeFilters };
}
export default connect(mapStateToProps, actions)(CustomDropDownPanel)