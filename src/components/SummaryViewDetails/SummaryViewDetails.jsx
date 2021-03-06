import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import styles from "./SummaryViewDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "../../utilities.js";
import classNames from "classnames";
import rtbIcon from "../../assets/images/rtbIcon.png";

import "@progress/kendo-theme-default/dist/all.css";
import MultiValueSelect from '../MultiValueSelect/MultiValueSelect';
import SingleValueSelect from '../SingleValueSelect/SingleValueSelect';
import KendoMultiChart from "../KendoMultiChart/KendoMultiChart";
import DetailBreakdown from './DetailBreakdown/DetailBreakdown';
import ExcelWorkbook from './ExcelWorkbook';
import { SUMMARY_FILTERS, DIMENSIONS } from '../../Constants/consts.js';
import * as _ from 'lodash';

class SummaryViewDetails extends Component {
  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state = {
      summaryType: this.props.previousViewWasJourneys
        ? "Journeys"
        : "Financials",
      header: "Net New ARR",
      activeMetric: "arr",
      activeTimeMetric: "qtd",
      excelTestData: [
        {
          Actuals: 66.7,
          Units: 55,
          QRF: 66.7,
          QRFDiff: 43434.2,
          QQ: 23.5,
          YY: 84.22
        }
      ],
      excelTestGeo: [
        {
          geo: "Amer",
          marketArea: "US",
          actuals: 66.5,
          units: 55.3,
          Qrf: 22.3,
          QRFDiff: 44.5,
          vsQrf: 666.5,
          QQ: 233,
          YY: 94.2
        }
      ],
      qtdIsPercent: true,
      selectedFilters: [],
      activeDataFilters: [],
      stringList: '',

    };

    /*Bindings  */
    this.updateMultiChartMetricFilter = this.updateMultiChartMetricFilter.bind(
      this
    );
    this.updateQtdMetricFilter = this.updateQtdMetricFilter.bind(this);

  }
  componentDidMount() {
    let filterList;
    let stringList;
    switch (this.props.activeSecondary) {
      case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
        filterList = this.props.filters.convType.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            trafficStringList: stringList
          });

        } else {
          this.setState({ trafficStringList: '*' })
        }
        break;
      case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
        filterList = this.props.filters.convType.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            trafficStringList: stringList
          });

        } else {
          this.setState({ trafficStringList: '*' })
        }

        break;
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
        filterList = this.props.filters.channelPM.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            pmStringList: stringList
          });

        } else {
          this.setState({ pmStringList: '*' })
        }

        break;
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
        filterList = this.props.filters.channelPM.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            pmStringList: stringList
          });

        } else {
          this.setState({ pmStringList: '*' })
        }
      case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
        filterList = this.props.filters.channelPM.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            pmStringList: stringList
          });

        } else {
          this.setState({ pmStringList: '*' })
        }
      case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
        filterList = this.props.filters.product.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.product.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            productStringList: stringList
          });

        } else {
          this.setState({ productStringList: '*' })
        }
        break;
      case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
        filterList = this.props.filters.pvw.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.pvw.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            pvwStringList: stringList
          });

        } else {
          this.setState({ pvwStringList: '*' })
        }
        break;
      case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
        filterList = this.props.filters.pvw.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.pvw.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            pvwStringList: stringList
          });

        } else {
          this.setState({ pvwStringList: '*' })
        }
      case SUMMARY_FILTERS.BUY_CONVERSION:
        filterList = this.props.filters.convType.valueFilters.map(filter => {
          return filter.value;
        })
        if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
          stringList = filterList.join(' - ');
          this.setState({
            trafficStringList: stringList
          });

        } else {
          this.setState({ trafficStringList: '*' })
        }
        break;
        break;
      default: break;
    }

  }
  componentDidUpdate(prevProps) {

    let filterList;
    let stringList;
    if (this.props.activeSecondary !== prevProps.activeSecondary) {
      switch (this.props.activeSecondary) {
        case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
          filterList = this.props.filters.convType.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              trafficStringList: stringList
            });

          } else {
            this.setState({ trafficStringList: '*' })
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
          filterList = this.props.filters.convType.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              trafficStringList: stringList
            });

          } else {
            this.setState({ trafficStringList: '*' })
          }

          break;
        case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
          filterList = this.props.filters.channelPM.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              pmStringList: stringList
            });

          } else {
            this.setState({ pmStringList: '*' })
          }

          break;
        case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
          filterList = this.props.filters.channelPM.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              pmStringList: stringList
            });

          } else {
            this.setState({ pmStringList: '*' })
          }
        case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
          filterList = this.props.filters.channelPM.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.channelPM.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              pmStringList: stringList
            });

          } else {
            this.setState({ pmStringList: '*' })
          }
        case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
          filterList = this.props.filters.product.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.product.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              productStringList: stringList
            });

          } else {
            this.setState({ productStringList: '*' })
          }
          break;
        case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
          filterList = this.props.filters.pvw.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.pvw.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              pvwStringList: stringList
            });

          } else {
            this.setState({ pvwStringList: '*' })
          }
          break;
        case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
          filterList = this.props.filters.pvw.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.pvw.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              pvwStringList: stringList
            });

          } else {
            this.setState({ pvwStringList: '*' })
          }
        case SUMMARY_FILTERS.BUY_CONVERSION:
          filterList = this.props.filters.convType.valueFilters.map(filter => {
            return filter.value;
          })
          if (filterList.length !== 0 && this.props.filters.convType.availableFilters.length !== filterList.length) {
            stringList = filterList.join(' - ');
            this.setState({
              trafficStringList: stringList
            });

          } else {
            this.setState({ trafficStringList: '*' })
          }
          break;
          break;
        default: break;
      }
    }
  }
  updateQTDPercentageFilter = (e) => {
    let metric = e.target.innerHTML.toLowerCase();
    if (metric === "%") {
      this.setState({ qtdIsPercent: true });
    } else {
      this.setState({ qtdIsPercent: false });
    }
    // Either be 'units' or 'arr'
  }
  updateMultiChartMetricFilter(e) {
    let metric = e.target.innerHTML.toLowerCase();
    if (metric === "arr") {
      this.props.updateMultichartMetric(true);
    } else {
      this.props.updateMultichartMetric(false);
    }
    // Either be 'units' or 'arr'
    this.setState({ activeMetric: e.target.innerHTML.toLowerCase() });
  }
  updateQtdMetricFilter(e) {
    //Either be 'qtd', 'week' or 'all'
    this.setState({ activeTimeMetric: e.target.innerHTML.toLowerCase() });
  }
  updateSingleValue = (e) => {
    this.setState({ singleValueSubmitted: true });
    let copy = this.state.selectedFilters;
    if (this.state.selectedFilters.length === 0) {
      this.setState({ selectedFilters: [e] }, () => {
        this.submitFilters({});
      })
    } else {
      //Find any with the same category
      _.remove(copy, item => { return item.category === e.category });
      _.remove(copy, item => { return item.index === e.index });
      if (copy.length === 0) {
        this.setState({ selectedFilters: [e] }, () => {
          this.submitFilters({});
        })
      } else {
        this.setState({ selectedFilters: [...copy, e] }, () => {
          this.submitFilters({});
        })

      }

    }


    // this.setState({ isButtonHighlighted: true });

  }
  updateMultiValue = (e, type) => {
    this.setState({ multiValueSubmitted: true });
    let copy = this.state.selectedFilters;
    if (e.length === 0) {
      _.remove(copy, item => { return item.category === type });
      this.setState({ selectedFilters: [...copy] }, () => {
      })

    } else {
      _.remove(copy, item => { return item.category === e[0].category });
      this.setState({ selectedFilters: [...copy, ...e] }, () => {
      });
    }




  }
  getExcelFilters(activeFilters) {
    let newArr;
    let { geo, quarter, market, route, segment, subscription, channels, visits } = activeFilters;
    newArr = [].concat(geo, quarter, market, route, segment, subscription);
    return newArr;
  }
  setMenuToOpened() {
    this.setState({ menuIsOpen: true });
  }
  setMenuToClosed() {
    this.setState({ menuIsOpen: false });
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
      CHANNELMU,
      CHANNELPM
    } = DIMENSIONS;
    let newFilters = {
      quarter: [],
      segment: [],
      product: [],
      market: [],
      route: [],
      subscription: [],
      geo: [],
      lastTouchChannel: [],
      convType: [],
      websegment: [],
      visits: [],
      channelMU: [],
      channelPM: [],
      pvw: []
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
        case LTC:
          newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === LTC })) ? /* Then */
            [_.find(this.state.selectedFilters, (item => { return item.category === LTC }))] : /* Else */
            [...this.props.filters.lastTouchChannel.valueFilters];
          break;
        case WEBSEGMENT:
          newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === WEBSEGMENT })) ?
            [_.find(this.state.selectedFilters, (item => { return item.category === WEBSEGMENT }))] :
            [...this.props.filters.websegment.valueFilters];
          break;
        case VISITS:
          newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === VISITS })) ? /* Then */
            [_.find(this.state.selectedFilters, (item => { return item.category === VISITS }))] : /* Else */
            [...this.props.filters.visits.valueFilters];
          break;
        case CHANNELMU:
          newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === CHANNELMU })) ? /* Then */
            [_.find(this.state.selectedFilters, (item => { return item.category === CHANNELMU }))] : /* Else */
            [...this.props.filters.channelMU.valueFilters];
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



    this.props.subFiltersSubmit(newFilters);

  }
  closeSingleValue(e) {
  }

  closeMultiValue = (e) => {

    this.submitFilters({});
  }
  getSummaryFilters(activeItem) {
    let drillDownFilter;
    let { lastTouchChannel, convType, websegment, segment, product, pvw, visits, channelMU, channelPM } = this.props.activeFilters;
    switch (activeItem) {

      case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
        //Marketable Universe
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-4 col-lg-4">
              <div>{'Channel - ' + channelMU.valueFilters[0].value} </div>
              <SingleValueSelect
                activeFilters={[]}
                options={channelMU.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>

          </div>
        );
      //Discover 
      case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
        return (
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>{'Visits - ' + visits.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
            {/* Conversion Type */}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion - {this.state.trafficStringList}</div>
              <MultiValueSelect
                // values = {convType.valueFilters}
                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
        //Paid Media Spend
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-4 col-lg-4">
              <div> Channel -  {this.state.pmStringList}</div>
              <MultiValueSelect
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
        //Paid Media Sourced
        return (
          <div className="row">
            <div className="col-md-4 col-lg-4">
              {/* Channel */}
              <div> Channel -  {this.state.pmStringList}</div>
              <MultiValueSelect
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>
          </div>
        );

      case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
        return (
          //Bounce Rate
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>{'Visits - ' + visits.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
            {/* Last Touch Channel */}
            {/* <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
            <div> {'Last Touch Channel - '+ lastTouchChannel.valueFilters[0].value} </div>
            <SingleValueSelect
              activeFilters={[]}
              options={lastTouchChannel.availableFilters}
              onValueChange={e => { this.updateSingleValue(e) }}
              onMenuClose={e => { this.closeSingleValue(e) }}
            />
          </div> */}
            {/* Conversion Type */}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion -  {this.state.trafficStringList}</div>
              <MultiValueSelect
                // values = {convType.valueFilters}
                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
          </div>
        );
      //Buy
      case SUMMARY_FILTERS.BUY_CONVERSION:
        return (
          //Conversion
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>{'Visits - ' + visits.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
            {/* Last Touch Channel */}
            {/* <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> {'Last Touch Channel - '+ lastTouchChannel.valueFilters[0].value} </div>
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div> */}
            {/* Conversion Type */}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion - {this.state.trafficStringList}</div>
              <MultiValueSelect

                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
        return (
          // Paid Media Spend
          <div className="row">
            {/* Channel*/}
            <div className="col-md-4 col-lg-4" style={{ paddingBottom: '10px' }}>
              {/* Channel */}
              <div> Channel -  {this.state.pmStringList}</div>
              <MultiValueSelect
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
        return (
          // Marketing Sourced ARR
          <div className="row">
            {/* segment*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>{'Segment - ' + segment.valueFilters[0].value}</div>

              <SingleValueSelect
                activeFilters={[]}
                options={segment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
              />
            </div>
            {/* Product Category*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> Product -  {this.state.productStringList}</div>
              <MultiValueSelect
                options={product.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PRODUCT; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
        return (
          // Gross New ARR
          <div className="row">
            {/* PVW*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }} >

              <div> Phone VS Web -  {this.state.pvwStringList}</div>
              <MultiValueSelect
                options={pvw.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
        return (
          // Gross New Units
          <div className="row">
            {/* PVW*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> Phone VS Web -  {this.state.pvwStringList}</div>
              <MultiValueSelect
                options={pvw.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                onMenuClose={(e) => { this.closeMultiValue(e) }}
              />
            </div>

          </div>
        );
      default:
        break;
    }

    return drillDownFilter;
  }


  getOneWeekBehindMarker(activeSecondary, type) {
    return activeSecondary === 4 ||
      activeSecondary === 7 ||
      activeSecondary === 8 ||
      activeSecondary === 19 ||
      activeSecondary === 20 ||
      activeSecondary === 21 ||
      activeSecondary === 22 ||
      activeSecondary === 23 ||
      activeSecondary === 24 ||
      activeSecondary === 25 ||
      activeSecondary === 26 ? (type === 'marker' ? '*' : 'One Week Behind') : null;
  }

  render() {
    let { activeFilters, activePrimary, secondaryData, activeSecondary, filters, activeItem } = this.props;
    // let activeItem = secondaryData[this.props.activeSecondary];
    var UnitStyles = classNames({
      unitMetric: true,
      activeMetric: this.props.multichartIsArr ? false : true
    });
    var ArrStyles = classNames({
      arrMetric: true,
      activeMetric: this.props.multichartIsArr ? true : false
    });
    var PercentageStyles = classNames({
      unitMetric: true,
      activeMetric: this.state.qtdIsPercent ? true : false
    });
    var NumberStyles = classNames({
      arrMetric: true,
      activeMetric: this.state.qtdIsPercent ? false : true
    });
    var QTDStyles = classNames({
      qtdMetric: true,
      activeTimeMetric: this.state.activeTimeMetric === "qtd" ? true : false
    });
    var WeekStyles = classNames({
      weekMetric: true,
      activeTimeMetric: this.state.activeTimeMetric === "week" ? true : false
    });
    var AllStyles = classNames({
      allMetric: true,
      activeTimeMetric: this.state.activeTimeMetric === "all" ? true : false
    });
    var qtdwColSizes = classNames({
      colContainer: true,
      qtdSize: this.state.activeTimeMetric === "qtd" ? true : false,
      weekSize: this.state.activeTimeMetric === "week" ? true : false,
      halfSize: this.state.activeTimeMetric === "all" ? true : false
    });
    var qtdTotalTable = classNames({
      qtdTotalTable: true,
      normalTableSize:
        this.state.activeTimeMetric === "week" ||
          this.state.activeTimeMetric === "qtd"
          ? true
          : false,
      halfTableSize: this.state.activeTimeMetric === "all" ? true : false
    });
    let qtdCounts = 0;
    let geoCounts = 0;
    let statsCounts = 0;
    return (
      <div className="sumViewContainer">
       

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">

          {this.props.activePrimary === 4 ?
            <div className="row" >
              <h3>Cumulative Paid Members - {utils.formatMetric({ valueType: 'units', value: activeItem.cumuMembers }, 'value')}</h3>
            </div> : null}

          <div className="row">
            <span className="col-md-2 col-lg-4 detailTitle2 ">
              {activeItem.header} {this.getOneWeekBehindMarker(this.props.activeSecondary, 'marker')}
            </span>

            <span style={{width:'100px'}}>
              <div className="oneWeekBehind">
                {this.getOneWeekBehindMarker(this.props.activeSecondary, 'message')}
              </div>
            </span>



            {this.props.activePrimary < 1 ?

              <div className="col-lg-2 col-md-3 flRight">
                <div className=" multiChartMetricContainer ">
                  <div
                    onClick={this.updateMultiChartMetricFilter}
                    className={ArrStyles}>
                    ARR
    </div>
                  <div
                    onClick={this.updateMultiChartMetricFilter}
                    className={UnitStyles}>
                    UNITS
    </div>

                </div>
              </div>
              :
              <span></span>}

            {this.props.isLoading === true ? null : <ExcelWorkbook activeItem={this.props.secondaryData[this.props.activeSecondary]}/>}



            <div className="stats-container-main">{this.props.activeItem.details.stats.map(item => {

              if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
                activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary === SUMMARY_FILTERS.RENEW_QTR_PF ||
                activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                return (
                  <div className="statsHeader" key={item.text}>
                    <div className={(item.value <= 0) ? 'stats green' : 'stats red '}>
                      {utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}
                    </div>
                    <div className="footer"> {item.text}</div>
                  </div>
                )
              } else {
                return (
                  <div className="statsHeader" key={item.text}>
                    <div className={(item.value <= 0) ? 'stats red' : 'stats green '}>
                      {utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}
                    </div>
                    <div className="footer"> {item.text}</div>
                  </div>
                )
              }

            }).reverse()}</div>
          </div>

          {/* FILTER */}
          <div className="col-lg-12 col-md-12 summary-filter">
            {this.getSummaryFilters(this.props.activeSecondary)}
          </div>




          <div className="chartContainer col-md-12">
            <KendoMultiChart color="white" chartHeight={350} deviceType="laptop" />
          </div>
        </div>


        {/* Second Row for Quarterly to Date title header */}
        <div className=" qtdTitleBarHeader container-fluid row">


          <div className="col-md-2 col-lg-2 flRight">
            <div className=" totalTimeMetricContainer">
              <span >
                <div onClick={this.updateQtdMetricFilter} className={QTDStyles}>
                  QTD
                  </div>
                <div onClick={this.updateQtdMetricFilter} className={WeekStyles}>
                  WEEK
                  </div>
              </span>
            </div>
          </div>



        </div>


        <DetailBreakdown
          activeSecondary={this.props.activeSecondary}
          qtdIsPercent={this.state.qtdIsPercent}
          activeSummary={activeItem}
          activePrimary={activePrimary}
          activeTimeMetric={this.state.activeTimeMetric}
          background="white" />

        <div  className="iconfooter">
          <img className='rtbIconFooter' src={rtbIcon} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    previousViewWasJourneys: state.switchFilter,
    activePrimary: state.activeCards.primary,
    activeSecondary: state.activeCards.secondary,
    activeItem: state.summaryData.secondary[state.activeCards.secondary],
    activeFilters: state.filters,
    availableFilters: state.availableFilters,
    qtdwData: state.summaryData.secondary[state.activeCards.secondary].details.qtdw,
    summaryData: state.adobeData,
    secondaryData: state.summaryData.secondary,
    multichartIsArr: state.multichartIsArr,
    filters: state.filters
  };
}

export default connect(
  mapStateToProps,
  actions
)(SummaryViewDetails);
