import React, { Component } from 'react';
import styles from './FilterPage.css';
import * as _ from 'lodash';
import * as actions from 'actions';
import { connect } from 'react-redux';
import DropDownFilter from './components/DropDownFilter.jsx';
import classNames from 'classnames';
import { Button } from '@progress/kendo-react-buttons';
import { DIMENSIONS } from '../../../Constants/consts';

import {
    PRIMARY,
    MOBILE_FILTER_PAGE
} from '../../../Constants/consts';
import SingleValueSelect from '../../SingleValueSelect/SingleValueSelect';
import MultiValueSelect from '../../MultiValueSelect/MultiValueSelect';
class FilterPage extends Component {

    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            showContainer: this.props.showContainer,
            selectedFilters: [...this.props.filters.quarter.valueFilters,
                ...this.props.filters.geo.valueFilters,
                ...this.props.filters.market.valueFilters],
            activeDataFilters: [],
        }
    }
  
    closeSingleValue = (e) => {
        // console.log('Closing Single Value',e);
    }
    closeMultiValue = (e) => {
        // console.log('Closing Multivalue',e);
    }
    generateFilterList = (filterList) => {

        let filterObjectList = Object.keys(filterList).map((ele) => { return filterList[ele]; });
        let arrs = filterObjectList.map((ele) => { return ele; }) // combine the arrays
        let items = _.uniq(_.flatten(arrs)); // flatten the array
        let allDataRemoved = items.map((ele) => {
            if (ele.value !== 'All Data') { return ele }
        });

        return _.pull(allDataRemoved, undefined);
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


    }

    submitFilters = (e) => {
        const { GEO,
              MARKET,
              PRODUCT,
              SEGMENT,
              SUBSCRIPTION,
              QUARTER,
              ROUTE,
              VISITSTATUS,
              SIGNSOURCE,
              SIGNAPP,
              PRODUCTCAT,
              WEBSEGMENT,
              PVW,
              CATEGORY,
              LTC,
              NEWVSREPEAT,
              MOBILEVSDESKTOP,
              CONVERSION,
              VISITS,
              SIGNCAT
          } = DIMENSIONS;
          this.setState({ isButtonHighlighted: false })
          let newFilters = {
              quarter: [],
              segment: [],
              product: [],
              market: [],
              route: [],
              subscription: [],
              geo: [],
              signupCategory:[],
              nonDMSegment:[]
  
          };
          Object.keys(newFilters).forEach(item => {
              switch (item) {
                  case QUARTER:
                      newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === QUARTER })) ? /* Then */
                          [_.find(this.state.selectedFilters, (item => { return item.category === QUARTER }))] : /* Else */
                          [...this.props.filters.quarter.valueFilters];
                      break;
                  case SEGMENT:
                      newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === SEGMENT })) ?
                          [_.find(this.state.selectedFilters, (item => { return item.category === SEGMENT }))] :
                          [...this.props.filters.segment.valueFilters];
                      break;
                  
                  default:
                      let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category ===  item }));
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
  
  
   
          this.props.submitFilters(newFilters);
        //   this.props.handleClose();
        this.props.updateViewSetting(MOBILE_FILTER_PAGE, false);

      }
  
    getGlobalSubFilters(filters, quarterFilterContainer) {

        const { GEO,
            MARKET,
            PRODUCT,
            SEGMENT,
            SUBSCRIPTION,
            QUARTER,
            ROUTE,
            VISITSTATUS,
            SIGNSOURCE,
            SIGNAPP,
            SIGNCAT,
            PRODUCTCAT,
            WEBSEGMENT,
            PVW,
            CATEGORY,
            LTC,
            NONDMSEGMENT,
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;

        switch (this.props.summaryData.primary[this.props.activeCards.primary].index) {

            /** Financial Perf Tab */
            case 0:
            // const selectedRoute = this.props.filters.route.valueFilters
                return (
                    <div className="globalSecondaryContainer col-lg-12 ">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={ 'col-sm-12'} >
                            <p>  Route To Market</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === ROUTE})}
                                options={filters.route.availableFilters}
                                onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            
                            />
                        </div>
                        <div className={' col-sm-12'} >
                            <p> Segment</p>
                            <SingleValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SEGMENT})}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={ ' col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SUBSCRIPTION})}
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                        <div className={' col-sm-12'} >
                            <p> Product Category</p>
                            <MultiValueSelect
                                options={filters.product.availableFilters}
                                onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                    </div>
                );
            // case 1:
            //     return (
            //         <div className="col-lg-12 globalPrimaryKPIFilters">
            //             <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
            //             <div className={quarterFilterContainer + ' col-lg-2'} >
            //                 <p> Web Segment</p>
            //                 <SingleValueSelect
            //                     activeFilters={filters.websegment.valueFilters}
            //                     options={filters.websegment.availableFilters}
            //                     onValueChange={this.updateSingleValue}
            //                     onMenuClose={this.closeSingleValue}
            //                 />

            //             </div>
            //         </div>
            //     );
            /** Try Tab */
            case 2:
                // const selectedSignUp = this.props.filters.signupCategory.valueFilters
                return (
                    <div className="globalSecondaryContainer col-lg-12 ">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'col-sm-12'} >
                            {/* <p style={{whiteSpace: 'nowrap'}}> Sign Up Source - {this.state.stringList}</p> this.setSelectedMultiFilters(selected); */}
                 
                            <p style={{whiteSpace: 'nowrap'}}> Sign Up Source - {this.state.stringList}</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SIGNCAT})}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.updateMultiValue(e, type);  }}
                                onMenuClose={this.closeMultiValue}
                            />
                          
                        </div>
                    </div>
                );
            case 3:
                break;
            case 4:
                return (
                    <div className="globalSecondaryContainer col-lg-12 ">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'col-sm-12'} >
                            <p> Segments {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''}</p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === NONDMSEGMENT})}
                            />
                        </div>
                        <div className={'col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SUBSCRIPTION})}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className=" globalSecondaryContainer col-lg-12 ">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'col-sm-12'} >
                            <p> Segments  {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''} </p>
                             <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === NONDMSEGMENT})}
                            />

                        </div>
                        <div className={'col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SUBSCRIPTION})}

                            />
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        let { filters } = this.props;
        const { GEO,
            MARKET,
            PRODUCT,
            SEGMENT,
            SUBSCRIPTION,
            QUARTER,
            ROUTE,
            VISITSTATUS,
            SIGNSOURCE,
            SIGNAPP,
            PRODUCTCAT,
            WEBSEGMENT,
            PVW,
            CATEGORY,
            LTC,
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;
        const filtersApplied = this.generateFilterList(filters.combined.valueFilters);
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        return (
            <div className="filterMobileContainer" >

                {/* <div className="filterMobilePillsContainer">
                    <ul className="filterListMobile">
                        {filters.combined.valueFilters.map((item) => {
                            return <li key={item.index}  className="filterListMobileLi">{item.value}</li>
                        })}
                    </ul>
                </div> */}

                <div className="filterMobileDropDownContainer">
                    <div className="dropdowns contentpad">
                        {/* first row */}
                        <div className="row dropRow">
                            <div className="col-xs-12 col-sm-6 col-md-4 ">
                                <p>Quarter</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.quarter}/> */}
                                <SingleValueSelect
                                    activeFilters={filters.quarter.valueFilters}
                                    options={filters.quarter.availableFilters}
                                    onValueChange={this.updateSingleValue}
                                    onMenuClose={this.closeSingleValue}
                                    value={_.filter(this.state.selectedFilters, (item => { return item.category === QUARTER }))}
                                />                     
                                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 ">
                                <p>Geo</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.geo}/> */}
                                <MultiValueSelect
                                    options={filters.geo.availableFilters}
                                    onValueChange={(e) => { let type = GEO; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    value={_.filter(this.state.selectedFilters, (item => { return item.category === GEO }))}
                                />                                        </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <p>Market Area</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                <MultiValueSelect
                                    options={filters.market.availableFilters}
                                    onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    values={_.filter(this.state.selectedFilters, (item => { return item.category === MARKET }))}
                                />                                        </div>
                        {this.getGlobalSubFilters(filters, quarterFilterContainer)}

                            <div className={'col-xs-12 col-sm-6 col-md-6'}>
                                <Button className="button" primary={true} onClick={this.submitFilters} look="flat">Submit</Button>
                            </div>
                        </div>

                        <div className="row dropRow">


                        </div>
                        {/* third row */}
                        <div className="row dropRow">


                        </div>
                        {/* fourth row */}
                        <div className="row dropRow">


                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        filters: state.filters, 
        summaryData: state.summaryData, 
        activeCards: state.activeCards ,

    };
}

export default connect(mapStateToProps, actions)(FilterPage);