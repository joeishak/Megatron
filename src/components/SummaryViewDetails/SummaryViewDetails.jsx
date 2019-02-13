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
      ]
    };

    /*Bindings  */
    this.updateMultiChartMetricFilter = this.updateMultiChartMetricFilter.bind(
      this
    );
    this.updateQtdMetricFilter = this.updateQtdMetricFilter.bind(this);

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
    let { geos, quarters, markets, routes, segments, subscriptions } = activeFilters;
    newArr = [].concat(geos, quarters, markets, routes, segments, subscriptions);
    // console.log(newArr);
    return newArr;
  }

  getSummaryFilters(activeItem) {
    let drillDownFilter;
    switch(activeItem) {
      case 4:
        // Discover - Traffic
        // console.log('discover traffic');
        drillDownFilter = <SingleValueSelect
          activeFilters={[]}
          options={[{index: 0, category: " ", value: "TRAFFIC FILTER 1"},
          {index: 1, category: " ", value: "TRAFFIC FILTER 2"},
          {index: 2, category: " ", value: "TRAFFIC FILTER 3"}]}
          onValueChange={e => {console.log(e)}}
          onMenuClose={e => {console.log(e)}}
        />
        break;
      case 7:
        // Discover - Paid Media Spend
        // console.log('discover - paid media spend');
        drillDownFilter = <SingleValueSelect
          activeFilters={[]}
          options={[{index: 0, category: " ", value: " Paid Media Spend FILTER 1"},
          {index: 1, category: " ", value: " Paid Media Spend FILTER 2"},
          {index: 2, category: " ", value: " Paid Media Spend FILTER 3"}]}
          onValueChange={e => {console.log(e)}}
          onMenuClose={e => {console.log(e)}}
        />
        break;
      case 8: 
        // Discover - Paid Media Sourced UQFM's
        // console.log('discover- Paid Media Sourced UQFMs');
        drillDownFilter = <SingleValueSelect
          activeFilters={[]}
          options={[{index: 0, category: " ", value: "Paid Media Sourced UQFM's FILTER 1"},
          {index: 1, category: " ", value: "Paid Media Sourced UQFM's FILTER 2"},
          {index: 2, category: " ", value: "Paid Media Sourced UQFM's FILTER 3"}]}
          onValueChange={e => {console.log(e)}}
          onMenuClose={e => {console.log(e)}}
        />
        break;
      case 27: 
        // Discover - % Paid User Success UQFM's
        // console.log('discover- Paid Media Sourced UQFMs');
        drillDownFilter = <SingleValueSelect
          activeFilters={[]}
          options={[{index: 0, category: " ", value: "% Paid User Success FILTER 1"},
          {index: 1, category: " ", value: "% Paid User Success FILTER 2"},
          {index: 2, category: " ", value: "% Paid User Successs FILTER 3"}]}
          onValueChange={e => {console.log(e)}}
          onMenuClose={e => {console.log(e)}}
        />
        break;
    }

    return drillDownFilter;
  }

  closeSummary() {
    this.props.updateMultichartMetric(true);
    this.props.hideSummaryDetails();
  }
  render() {
    let { activeFilters, secondaryData, activeSecondary, filters, activeItem } = this.props;
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
            {activeItem.header}
      
          </span>
 

          {/* FILTER */}
          <div className="summary-filter">
            {this.getSummaryFilters(this.props.activeSecondary)}
          </div>


          {this.props.activePrimary < 1 ?
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
            </div> :
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
                <div className={(item.color === 'red') ? 'stats red' : 'stats green '}>
                  {utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}
                </div>
                <div className="footer"> {item.text}</div>
              </div>
            )
          })
          }</div>

          <div className="chartContainer col-md-12">
            <KendoMultiChart color="white" deviceType="laptop" />
          </div>
        </div>


        {/* Second Row for Quarterly to Date title header */}
        <div className=" qtdTitleBarHeader container-fluid row">
          <span className="detailTitle2">Quarterly To Date</span>
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
          {/* {
            this.props.activeItem.details.stats.map(item => {
              return (
                <div key={item.text} className=" statsHeader">
                  <div className={(item.color === 'red') ? 'stats red' : 'stats green '}>
                    {utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}
                  </div>
                  <div className="footer"> {item.text}</div>
                </div>
              )
            })
          } */}

        </div>
        <DetailBreakdown
          activeSummary={activeItem}

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
    activeFilters: state.activeFilters,
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
