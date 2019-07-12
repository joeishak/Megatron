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
import { SUMMARY_KPIS, DIMENSIONS } from '../../Constants/consts.js';
import * as _ from 'lodash';

class SummaryViewDetails extends Component {
  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state = {

      header: "Net New ARR",
      activeMetric: "arr",
      activeTimeMetric: "qtd",

      qtdIsPercent: true,
      selectedFilters: [
        ...this.props.filters.visits.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.convType.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.websegment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.channelMU.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.channelPM.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.pvw.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.segment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.ltvSegment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.product.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.qfmType.valueFilters.map(item => {
          return { ...item, label: item.value }
        })],

    };



  }
  componentDidMount() {

    this.setState({
      selectedFilters: [
        ...this.props.filters.visits.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.convType.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.websegment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.channelMU.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.channelPM.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.pvw.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.segment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.ltvSegment.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.product.valueFilters.map(item => {
          return { ...item, label: item.value }
        }),
        ...this.props.filters.qfmType.valueFilters.map(item => {
          return { ...item, label: item.value }
        })]
    })


  }
  componentDidUpdate(prevProps) {


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
  updateMultiChartMetricFilter = (e) => {
    let metric = e.target.innerHTML.toLowerCase();
    if (metric === "arr") {
      this.props.updateMultichartMetric(true);
    } else {
      this.props.updateMultichartMetric(false);
    }
    // Either be 'units' or 'arr'
    this.setState({ activeMetric: e.target.innerHTML.toLowerCase() });
  }
  updateQtdMetricFilter = (e) => {
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
      CHANNELPM,
      LTVSEGMENT
    } = DIMENSIONS;
    
    let newFilters = {
      lastTouchChannel: [],
      convType: [],
      websegment: [],
      visits: [],
      channelMU: [],
      channelPM: [],
      pvw: [],
      customerType:[],
      qfmType: [],
      segment:[],
      ltvSegment:[],
      product:[]
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
      CHANNELMU,
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

    let { lastTouchChannel, convType, websegment, segment, product, pvw, visits, channelMU, channelPM, qfmType, customerType, ltvSegment } = this.props.filters;
    switch (activeItem) {

      case SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE:
        //Marketable Universe
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-4 col-lg-4">
              <div>Channel </div>
              <SingleValueSelect
                activeFilters={[]}
                options={channelMU.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === CHANNELMU })}
              />
            </div>

          </div>
        );
      //Discover 
      case SUMMARY_KPIS.DISCOVER_TRAFFIC:
        return (
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>Visits</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === VISITS })}
              />
            </div>
            {/* Conversion Type */}
            {/* <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion </div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CONVERSION })}
                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div> */}
             <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Customer Type </div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CUSTOMERTYPE })}
                options={customerType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CUSTOMERTYPE; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Web Segment</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
              />
            </div>
           

          </div>
        );
      case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND:
        //Paid Media Spend
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-4 col-lg-4">
              <div> Channel</div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CHANNELPM })}
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>

          </div>
        );
      case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED:
        //Paid Media Sourced
        return (
          <div className="row">
            <div className="col-md-4 col-lg-4">
              {/* Channel */}
              <div> Channel </div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CHANNELPM })}
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
          </div>
        );

      case SUMMARY_KPIS.DISCOVER_BOUNCE_RATE:
        return (
          //Bounce Rate
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>Visits</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === VISITS })}
              />
            </div>
            {/* Conversion Type */}
            {/* <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion</div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CONVERSION })}
                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div> */}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Customer Type </div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CUSTOMERTYPE })}
                options={customerType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CUSTOMERTYPE; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Web Segment</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
              />
            </div>
            
          </div>
        );
      //Buy
      case SUMMARY_KPIS.BUY_CONVERSION:
        return (
          //Conversion
          <div className="row">
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <div>Visits</div>
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === VISITS })}
              />
            </div>
            {/* Conversion Type */}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Conversion</div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CONVERSION })}
                options={convType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Web Segment</div>
              <SingleValueSelect
                activeFilters={[]}
                options={websegment.availableFilters}
                onValueChange={e => { this.updateSingleValue(e) }}
                onMenuClose={e => { this.closeSingleValue(e) }}
                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>QFM Type</div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                options={qfmType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
          </div>
        );
      case SUMMARY_KPIS.BUY_PAID_MEDIASPEND:
        return (
          // Paid Media Spend
          <div className="row">
            {/* Channel*/}
            <div className="col-md-4 col-lg-4" style={{ paddingBottom: '10px' }}>
              {/* Channel */}
              <div>Channel</div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CHANNELPM })}
                options={channelPM.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
          </div>
        );
      case SUMMARY_KPIS.BUY_MARKETING_SOURCED:
        return (
          // Marketing Sourced ARR
          <div className="row">
            {/* segment*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Segment</div>

              {/* <SingleValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === SEGMENT })}
                activeFilters={segment.valueFilters}
                options={segment.availableFilters}
                onValueChange={this.updateSingleValue}
                onMenuClose={this.closeSingleValue}
              /> */}
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.LTVSEGMENT })}
                options={ltvSegment.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.LTVSEGMENT; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            {/* Product Category*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> Product </div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.PRODUCT })}
                options={product.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PRODUCT; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>

          </div>
        );
      case SUMMARY_KPIS.BUY_LTV_ROI:
        return (
          // Marketing Sourced ARR
          <div className="row">
            {/* segment*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>Segment</div>
              {/* <SingleValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === SEGMENT })}
                activeFilters={segment.valueFilters}
                options={segment.availableFilters}
                onValueChange={this.updateSingleValue}
                onMenuClose={this.closeSingleValue}
              /> */}
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.LTVSEGMENT })}
                options={ltvSegment.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.LTVSEGMENT; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            {/* Product Category*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> Product</div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.PRODUCT })}
                options={product.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PRODUCT; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>

          </div>
        );
      case SUMMARY_KPIS.BUY_GROSS_NEWARR:
        return (
          // Gross New ARR
          <div className="row">
            {/* PVW*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }} >

              <div> Phone VS Web</div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.PVW })}
                options={pvw.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>QFM Type</div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                options={qfmType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>

          </div>
        );
      case SUMMARY_KPIS.BUY_GROSS_NEWUNITS:
        return (
          // Gross New Units
          <div className="row">
            {/* PVW*/}
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div> Phone VS Web</div>
              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.PVW })}
                options={pvw.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
              <div>QFM Type</div>

              <MultiValueSelect
                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                options={qfmType.availableFilters}
                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
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
    return activeSecondary === SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE ||
      activeSecondary === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND ||
      activeSecondary === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED ||
      activeSecondary === SUMMARY_KPIS.BUY_PAID_MEDIASPEND ||
      activeSecondary === SUMMARY_KPIS.BUY_MARKETING_SOURCED ||
      activeSecondary === SUMMARY_KPIS.USE_PERCENT_ACTIVATED ||
      activeSecondary === SUMMARY_KPIS.USE_PERCENT_ACTIVATED_LAUNCHES ||
      activeSecondary === SUMMARY_KPIS.USE_WK0_WAU_RATE ||
      activeSecondary === SUMMARY_KPIS.USE_WK4_WAU_RATE ||
      activeSecondary === SUMMARY_KPIS.USE_ENGAGEMENT_INDEX ||
      activeSecondary === SUMMARY_KPIS.USE_PAID_USER_MAU ? (type === 'marker' ? '*' : 'One Week Behind') : null;
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
    var QTDStyles = classNames({
      qtdMetric: true,
      activeTimeMetric: this.state.activeTimeMetric === "qtd" ? true : false
    });
    var WeekStyles = classNames({
      weekMetric: true,
      activeTimeMetric: this.state.activeTimeMetric === "week" ? true : false
    });

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

            <span style={{ width: '100px' }}>
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

            {this.props.isLoading === true ? null : <ExcelWorkbook activeItem={this.props.secondaryData[this.props.activeSecondary]} />}
            <div className="stats-container-main">{this.props.activeItem.details.stats.map(item => {
              if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary === SUMMARY_KPIS.RENEW_QTR_PF ||
                activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) {
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
              <span>
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
        <div className="iconfooter">
          <img className='rtbIconFooter' src={rtbIcon} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activePrimary: state.activeCards.primary,
    activeSecondary: state.activeCards.secondary,
    activeItem: state.summaryData.secondary[state.activeCards.secondary],
    qtdwData: state.summaryData.secondary[state.activeCards.secondary].details.qtdw,
    secondaryData: state.summaryData.secondary,
    multichartIsArr: state.multichartIsArr,
    filters: state.filters
  };
}

export default connect(
  mapStateToProps,
  actions
)(SummaryViewDetails);
