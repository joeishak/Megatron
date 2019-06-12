import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from 'actions';
import FilterBarHeader from './FilterBarHeader/FilterBarHeader.js';
import FilterPage from "../MobileComponents/FitlerPage/FilterPage.jsx";
import * as _ from 'lodash';
import { DIMENSIONS } from '../../Constants/consts';

import CustomDropDownPanel from './CustomDropDownPanel/CustomDropDownPanel.js';
class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Controls whether the Custom Drop Down Panel should show
            filterPanelIsOpen: false,
            showDropDowns: false,
            selectedFilters: [
                ...this.props.filters.subscription.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.signupCategory.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.product.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.route.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.geo.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.market.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.quarter.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.segment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                })],
        };

    }

    componentDidMount() {
        this.setState({
            selectedFilters: [
                ...this.props.filters.subscription.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.signupCategory.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.product.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.route.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.geo.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.market.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.quarter.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.segment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                })]
        })
    }
    componentDidUpdate(prevProps) {



        if (this.props.filters.nonDMSegment !== prevProps.filters.nonDMSegment) {
            this.setState({ loading: true,selectedFilters: [
                ...this.props.filters.subscription.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.signupCategory.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.product.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.route.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.geo.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.market.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.quarter.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.segment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                })] }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 10);
            })
        }

    }
    updateSingleValue = (e) => {
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


        let copy = this.state.selectedFilters;

        if (e.length === 0) {
            _.remove(copy, item => { return item.category === type });
            this.setState({ selectedFilters: [...copy] })

        }/*  else if (e[1] && e[1].category === DIMENSIONS.NONDMSEGMENT) {
            _.remove(copy, item => { return item.category === e[0].category });

            this.setState({ selectedFilters: [...copy, ...e] })
        } */ else {
            _.remove(copy, item => { return item.category === e[0].category });

            this.setState({ selectedFilters: [...copy, ...e] })
        }

        this.setState({ isButtonHighlighted: true });
    }
    /* Event Handler for the Filter Box to open the filter panel with the drop downs */
    openDialogFilterPanel = () => {
        // Opening the panel
        if (this.state.filterPanelIsOpen === false) {
            // this.setState({ showDropDowns: true });
            this.setState({ filterPanelIsOpen: true });
        } else {
            // this.submitFilters()
            /* Closing the Panel */
            // this.setState({ showDropDowns: false });
            // this.setState({filterPanelIsOpen: false});
            this.setState({
                selectedFilters: [
                    ...this.props.filters.subscription.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.signupCategory.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.product.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.route.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.geo.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.market.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.quarter.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.segment.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    })]
            })
            this.time = setTimeout(() => {
                this.setState({ filterPanelIsOpen: false });
            }, 300);
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
            signupCategory: [],
            nonDMSegment: []
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
                    let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category === item }));
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
        this.setState({ filterPanelIsOpen: false });
    }
    render() {
        let { activeFilters, filters, availableFilters, mobileFiltersIsShown, window } = this.props;
        const filtersPage = this.props.mobileFiltersIsShown === true ? (
            <FilterPage
                windowHeight={window.height}
                filters={filters}
                availableFilters={availableFilters}
            />
        ) : this.props.isMobileOrTablet === false ? <div>
            <FilterBarHeader
                handleNewFilterClick={this.openDialogFilterPanel}
                filterPanelIsOpen={this.state.filterPanelIsOpen} />
            <CustomDropDownPanel
                updateSingleValue={this.updateSingleValue}
                updateMultiValue={(e, type) => { this.updateMultiValue(e, type) }}
                handleClose={this.openDialogFilterPanel}
                showContainer={this.state.filterPanelIsOpen}
                activePrimary={this.props.activePrimary}
                selectedFilters={this.state.selectedFilters}
                isMobileOrTablet={this.props.isMobileOrTablet}
                submitGlobalFilters={this.submitFilters}
            />
        </div> : null;
        return (
            filtersPage
        )
    }
}
function mapStateToProps(state) {
    return {
        filters: state.filters,
        mobileFiltersIsShown: state.appSettings.views.mobileFilterPageIsVisible
    };
}
export default connect(mapStateToProps, actions)(FilterPanel)