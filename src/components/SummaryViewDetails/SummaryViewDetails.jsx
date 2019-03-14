import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import styles from "./SummaryViewDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "../../utilities.js";
import classNames from "classnames";
import "@progress/kendo-theme-default/dist/all.css";
import MultiValueSelect from '../MultiValueSelect/MultiValueSelect';
import SingleValueSelect from '../SingleValueSelect/SingleValueSelect';
import KendoMultiChart from "../KendoMultiChart/KendoMultiChart";
import Workbook from "react-excel-workbook";
import excelLogo from "../../assets/images/excel-logo.png";
import excelLogoGreen from "../../assets/images/excel-logo-green.svg";
import ExcelFormatter from "./ExcelFormatter";
import DetailBreakdown from './DetailBreakdown/DetailBreakdown';
import { SUMMARY_FILTERS } from '../../Constants/consts.js';
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
    };

    /*Bindings  */
    this.updateMultiChartMetricFilter = this.updateMultiChartMetricFilter.bind(
      this
    );
    this.updateQtdMetricFilter = this.updateQtdMetricFilter.bind(this);

  }
  updateQTDPercentageFilter = (e) => {
    let metric = e.target.innerHTML.toLowerCase();
    console.log(metric);
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

  getExcelFilters(activeFilters) {
    let newArr;
    let { geos, quarters, markets, routes, segments, subscriptions, channels, visits } = activeFilters;
    newArr = [].concat(geos, quarters, markets, routes, segments, subscriptions);
    // console.log(newArr);
    return newArr;
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
  getSummaryFilters(activeItem) {
    let drillDownFilter;
    let { lastTouchChannel, convType, webSegments, visits } = this.props.activeFilters;
    switch (activeItem) {
      //finance
      // case 0:
      //   break;
      // case 1:
      //   break;
      // case 2:
      //   break;
      // case 3:
      //   break;
      //Discover 
      case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
        return (
          <div className="row">
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              {/* Visit Type */}
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Last Touch Channel */}
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Conversion Type */}
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={convType.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
              <MultiValueSelect
                options={convType.availableFilters}
                onValueChange={(e) => { let type = 'convType'; this.updateMultiValue(e, type) }}
                onMenuClose={this.closeMultiValue}
              />
            </div>
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={webSegments.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
        //Marketable Universe
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );

      // case 6:
      //   //UQFM
      //   break;
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
        //Paid Media Spend
        return (
          <div className="row">
            {/* Channel */}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
        //Paid Media Sourced
        return (
          <div className="row">
            <div className="col-md-12 col-lg-12">
              {/* Channel */}
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_NEW_UQFMS:
        return (
          <div className="row">
            {/* Sign Up Source */}
            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Sign Up APP */}
            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
        return (
          // Bounce Rate
          <div className="row">
            {/* Visit Status */}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );

      //Try
      case SUMMARY_FILTERS.TRY_NEW_QFMS:
        return (
          // New QFMS
          <div className="row">
            {/* Product Name */}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.TRY_NEW_UQFMS:
        return (
          // New UQFMS
          <div className="row">
            {/* Sign Up APP*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.TRY_CUMULATIVE_UQFMS:
        return (
          // Cumulative UQFMS
          <div className="row">
            {/* Sign Up APPP*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      //Buy
      case SUMMARY_FILTERS.BUY_CONVERSION:
        return (
          //Conversion
          <div className="row">
            {/* Web Segments */}
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Last Touch Channel */}
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Visit Status */}
            <div className="col-md-12 col-lg-12" style={{ paddingBottom: '10px' }}>
              <SingleValueSelect
                activeFilters={[]}
                options={lastTouchChannel.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
        return (
          // Paid Media Spend
          <div className="row">
            {/* Channel*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
        return (
          // Marketing Sourced ARR
          <div className="row">
            {/* Segments*/}
            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
            {/* Product Category*/}
            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
        return (
          // Gross New ARR
          <div className="row">
            {/* PVW*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );
      case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
        return (
          // Gross New Units
          <div className="row">
            {/* PVW*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );

      //Use
      case SUMMARY_FILTERS.USE_PAID_USER_SUCCESS:
        // 27
        return (
          // Gross New Units
          <div className="row">

            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

            <div className="col-md-6 col-lg-6">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );
      //Renew
      case SUMMARY_FILTERS.USE_WK0_WAU_RATE:
        // 28
        return (
          // Wk 0 WAU Rate
          <div className="row">
            {/* Category*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );

      case SUMMARY_FILTERS.USE_WK4WAU_RATE:
        // 29
        return (
          // Wk 4 WAU Rate
          <div className="row">
            {/* Category*/}
            <div className="col-md-12 col-lg-12">
              <SingleValueSelect
                activeFilters={[]}
                options={visits.availableFilters}
                onValueChange={e => { console.log(e) }}
                onMenuClose={e => { console.log(e) }}
              />
            </div>

          </div>
        );
      default:
        break;
    }

    return drillDownFilter;
  }
  getQTDDetailFilters(activeItem) {
    switch (activeItem.index) {

      case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
        return (
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
          </div>
        );

      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
        return (
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
          </div>
        );
      case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
        return (
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
          </div>
        );

      case SUMMARY_FILTERS.USE_PAID_USER_SUCCESS:
        return (
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
            <div className="col-md-2 col-lg-2">
              <SingleValueSelect
                onMenuClose={(e) => { console.log() }}
              />
            </div>
          </div>
        );

      default:
        break;
    }
  }

  closeSummary() {
    this.props.updateMultichartMetric(true);
    this.props.hideSummaryDetails();
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
        {/* Bread Crumbs */}
        {/* <span className='breadCrumb' onClick={this.closeSummary.bind(this)}>
              {this.state.summaryType} Summary > </span>
              <span>  {activeItem.header}
            </span>
            <br/> */}

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">
          <span className=" detailTitle">
            {/* {activeItem.header} */}

          </span>


          {/* FILTER */}
          <div className="col-lg-6 col-md-6 summary-filter">
            {this.getSummaryFilters(this.props.activeSecondary)}
          </div>


          {this.props.activePrimary < 1 ?

            <div className="col-lg-2 col-md-3 flRight">
              <div className=" multiChartMetricContainer ">
                <div
                  onClick={this.updateMultiChartMetricFilter}
                  className={UnitStyles}>
                  UNITS
                </div>
                <div
                  onClick={this.updateMultiChartMetricFilter}
                  className={ArrStyles}>
                  ARR
                </div>
              </div>
            </div>
            :
            <span></span>}


          <span className="excelSpan">
            <Workbook
              filename={`${activeItem.header}.xlsx`}
              element={
                <button className="exportButton">
                  <span>Export</span>
                  <img
                    alt=""
                    className="excelLogo"
                    style={{ height: "20px", width: "20px" }}
                    src={excelLogoGreen}
                  />
                </button>
              }
            >
              <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                <Workbook.Column label="Dimension" value="category" />
                <Workbook.Column label="Filter Applied" value="value" />

              </Workbook.Sheet>

              <Workbook.Sheet data={this.props.secondaryData[activeSecondary].details.geo.qtd || []} name="Geos">
                <Workbook.Column label="Geo" value="type" />
                <Workbook.Column label="MarketArea" value="marketArea" />
                <Workbook.Column label="Actuals" value="actuals" />
                {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                <Workbook.Column label="QRF" value="qrf" />
                <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="Q/Q" value="qq" />
                <Workbook.Column label="Y/Y" value="yy" />
              </Workbook.Sheet>
              <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd || []} name="Market Area">
                <Workbook.Column label="Market Area" value="type" />
                <Workbook.Column label="Actuals" value="actuals" />
                {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                <Workbook.Column label="QRF" value="qrf" />
                <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="Q/Q" value="qq" />
                <Workbook.Column label="Y/Y" value="yy" />
              </Workbook.Sheet>
              <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd || []} name="Segment Pivot">
                <Workbook.Column label="Segment Pivot" value="type" />
                <Workbook.Column label="Actuals" value="actuals" />
                {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                <Workbook.Column label="QRF" value="qrf" />
                <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="Q/Q" value="qq" />
                <Workbook.Column label="Y/Y" value="yy" />
              </Workbook.Sheet>
              <Workbook.Sheet data={secondaryData[activeSecondary].details.routes.qtd || []} name="Route To Market">
                <Workbook.Column label="Route To Market" value="type" />
                <Workbook.Column label="Actuals" value="actuals" />
                {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                <Workbook.Column label="QRF" value="qrf" />
                <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="Q/Q" value="qq" />
                <Workbook.Column label="Y/Y" value="yy" />
              </Workbook.Sheet>
              <Workbook.Sheet data={secondaryData[activeSecondary].details.product.qtd || []} name="Product Names">
                <Workbook.Column label="Product Name" value="type" />
                <Workbook.Column label="Actuals" value="actuals" />
                {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                <Workbook.Column label="QRF" value="qrf" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="vsQRF" value="vsQrf" />
                <Workbook.Column label="Q/Q" value="qq" />
                <Workbook.Column label="Y/Y" value="yy" />
              </Workbook.Sheet>

            </Workbook>
          </span>

          <div className="stats-container-main">{this.props.activeItem.details.stats.map(item => {
            return (
              <div className="statsHeader" key={item.text}>
                <div className={(item.value <= 0) ? 'stats red' : 'stats green '}>
                  {utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}
                </div>
                <div className="footer"> {item.text}</div>
              </div>
            )
          }).reverse()
          }</div>

          <div className="chartContainer col-md-12">
            <KendoMultiChart color="white" deviceType="laptop" />
          </div>
        </div>


        {/* Second Row for Quarterly to Date title header */}
        <div className=" qtdTitleBarHeader container-fluid row">
          <div className="col-md-2 col-lg-4">
            <span className="detailTitle2 ">
              {activeItem.header}
            </span>
          </div>
          {/* {this.getQTDDetailFilters(activeItem)} */}
          {/* <div className="col-md-3 col-lg-2 ">
            <div className="flRight multiChartMetricContainer ">
              <div
                onClick={this.updateQTDPercentageFilter}
                className={PercentageStyles}>
                %
                </div>
              <div
                onClick={this.updateQTDPercentageFilter}
                className={NumberStyles}>
                #
                </div>
            </div>
          </div> */}
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
          qtdIsPercent={this.state.qtdIsPercent}
          activeSummary={activeItem}
          activePrimary={activePrimary}
          activeTimeMetric={this.state.activeTimeMetric}
          background="white" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.activeFilters);
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
