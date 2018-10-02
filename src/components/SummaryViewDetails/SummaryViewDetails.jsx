import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './SummaryViewDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar.jsx';

import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
// Custom Components
import Workbook from 'react-excel-workbook'
import excelLogo from '../../assets/images/excel-logo.png';


// Services
import ExcelFormatter from './ExcelFormatter';
// Custom Nivo Components
// import { changeAuth } from '../actions';


class SummaryViewDetails extends Component {
  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state ={
        summaryType: (this.props.previousViewWasJourneys) ? "Journeys": "Financials",
        header: "Net New ARR",
        activeMetric: 'arr',
        activeTimeMetric: 'qtd',
        excelTestData: [
          {
            Actuals: 66.7,
            Units: 55,
            QRF: 66.7,
            QRFDiff: 43434.2,
            QQ: 23.5,
            YY: 84.22
          },
          {
            Actuals: 66.7,
            Units: 55,
            QRF: 66.7,
            QRFDiff: 43434.2,
            QQ: 23.5,
            YY: 84.22
          },
          {
            Actuals: 66.7,
            Units: 55,
            QRF: 66.7,
            QRFDiff: 43434.2,
            QQ: 23.5,
            YY: 84.22
          },
          {
            Actuals: 66.7,
            Units: 55,
            QRF: 66.7,
            QRFDiff: 43434.2,
            QQ: 23.5,
            YY: 84.22
          },
          {
            Actuals: 66.7,
            Units: 55,
            QRF: 66.7,
            QRFDiff: 43434.2,
            QQ: 23.5,
            YY: 84.22
          },
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
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Amer',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Asia',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          },
          {
            geo: 'Asia',
            marketArea:'US',
            actuals: 66.5,
            units: 55.3,
            Qrf:22.3,
            QRFDiff:44.5,
            vsQrf:666.5,
            QQ:233,
            YY:94.2,
          }
        ]

    };

      /*Bindings  */
    this.updateMultiChartMetricFilter = this.updateMultiChartMetricFilter.bind(this);
    this.updateQtdMetricFilter = this.updateQtdMetricFilter.bind(this);
    this.renderQuarterlyToDate = this.renderQuarterlyToDate.bind(this);
    this.renderQuarterlyToDateTableHeader = this.renderQuarterlyToDateTableHeader.bind(this);
  }
 
  componentDidUpdate(prevProps){
    if( prevProps.activeFilters !== this.props.activeFilters ){
      console.log('Getting new data');
      this.props.getQueryFilteredIBEData(this.props.activeFilters,prevProps.availableFilters);
  }
  }
  // shouldComponentUpdate(prevProps){
  //   if(prevProps.activeItem !== this.props.activeItem){
  //     return true;
  //   }
  // }
 updateMultiChartMetricFilter(e){
   // Either be 'units' or 'arr'
  this.setState({activeMetric: e.target.innerHTML.toLowerCase()})
 }
 updateQtdMetricFilter(e){
   //Either be 'qtd', 'week' or 'all'
 this.setState({activeTimeMetric: e.target.innerHTML.toLowerCase()})
}
renderQuarterlyToDateTableHeader(){
  switch(this.state.activeTimeMetric){
    case 'qtd':
    return(
      <div className=" qtdDetailTitle col-md-12">Quarterly To Date</div>
    );
    case 'week': 
    return(
      <div className=" weekDetailTitle col-md-12">Week</div>
    );
    case 'all': 
    return(

      <div className=" allContainer col-md-12">
      <div className=" allWeekDetailTitle col-md-6">Week</div> 
      <div className=" allQtdDetailTitle col-md-6">Quartely To Date</div>
      </div>
      
    );
    default: 
    break;

  }
}
 renderQuarterlyToDate(qtdwColSizes ,qtdTotalTable){ 
   switch(this.state.activeTimeMetric){
     case 'qtd':
     return (
     <div className={qtdTotalTable + ' col-md-11'}>
     {
      this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>);
     case 'week':
     let formatter = new ExcelFormatter(this.props.activeItem.details.qtdw.week);
     formatter.formatDataForExcel();
     return (
      <div className={qtdTotalTable + ' col-md-11'}>
      {
       this.props.activeItem.details.qtdw.week.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>);
     case 'all': 
     return (
     <div className={qtdTotalTable + ' col-md-11'}>
      {
       this.props.activeItem.details.qtdw.week.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     {
       this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>
     );
     default: 
     break;
   }
 }
 
  render(){

    var UnitStyles = classNames({
      unitMetric: true,
      activeMetric: (this.state.activeMetric === 'units') ? true: false
    });

    var ArrStyles = classNames({
      arrMetric: true,
      activeMetric: (this.state.activeMetric === 'arr') ? true: false
    });
    var QTDStyles = classNames({
      qtdMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'qtd') ? true: false
    });
    var WeekStyles = classNames({
      weekMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'week') ? true: false
    });
    var AllStyles = classNames({
      allMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'all') ? true: false
    });
 
    var qtdwColSizes = classNames({
      colContainer:true,
      normalSize: (this.state.activeTimeMetric === 'week' || this.state.activeTimeMetric === 'qtd') ? true : false,
      halfSize: (this.state.activeTimeMetric === 'all') ? true: false
    });

    var qtdTotalTable = classNames({
      qtdTotalTable: true,
      normalTableSize: (this.state.activeTimeMetric === 'week' || this.state.activeTimeMetric === 'qtd') ? true : false,
      halfTableSize: (this.state.activeTimeMetric === 'all') ? true: false
    })
    return (

      <div className="sumViewContainer container-fluid">
      {/* Bread Crumbs */}
        <span className='breadCrumb' onClick={this.props.hideSummaryDetails}>
          {this.state.summaryType} Summary > </span> 
          <span>  {this.props.activeItem.header}
        </span>
        <br/>

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">

          <span className="col-md- 3 detailTitle">{this.props.activeItem.header}
          {/* <button className='exportButton'>Export To Excel</button> */}
         
  </span>
          <div className=" col-md-9 multiChartMetricContainer">
              <div onClick={this.updateMultiChartMetricFilter} className={UnitStyles}>
                  UNITS
              </div>
              <div onClick={this.updateMultiChartMetricFilter} className={ArrStyles}>
                  ARR
              </div>
          </div>
          <div className="chartContainer col-md-12">
            <KendoMultiChart color='black' />
          </div> 
        </div>
        {/* Second Row for Quarterly to Date title header */}
        <div className=" qtdTitleBarHeader container-fluid row">
        <span className="col-md-3 detailTitle">Quarterly To Date</span>
        <span className="col-md-6 excelSpan" >
              <Workbook filename="example.xlsx" element={<button className='exportButton'><span>Export To Excel </span>    
                      <img alt="" className="excelLogo" style={{height: '20px',width:'20px'}} src={excelLogo} /></button>}>
                <Workbook.Sheet data={this.state.excelTestData} name="QTD">
                  <Workbook.Column label="Actuals" value="Actuals"/>
                  <Workbook.Column label="Units" value="Units"/>
                  <Workbook.Column label="QRF" value="QRF"/>
                  <Workbook.Column label="QRFDiff" value="QRFDiff"/>
                  <Workbook.Column label="vsQRF" value="vsQRF"/>
                  <Workbook.Column label="Q/Q" value="QQ"/>
                  <Workbook.Column label="Y/Y" value="YY"/>
                </Workbook.Sheet>
            
                <Workbook.Sheet data={this.state.excelTestGeo} name="Geo">
                  <Workbook.Column label="Actuals" value="actuals"/>
                  <Workbook.Column label="Units" value="units"/>
                  <Workbook.Column label="Geo" value="geo"/>
                  <Workbook.Column label="MarketArea" value="marketArea"/>
                  <Workbook.Column label="vsQRF" value="vsQrf"/>
                  <Workbook.Column label="Q/Q" value="QQ"/>
                  <Workbook.Column label="Y/Y" value="YY"/>
                </Workbook.Sheet>
              </Workbook>
            </span>
          <div className=" col-md-3 totalTimeMetricContainer">
         
            <span className="totalFilterContainer">
              <div onClick={this.updateQtdMetricFilter} className={QTDStyles}>
                  QTD
              </div>
              <div onClick={this.updateQtdMetricFilter} className={WeekStyles}>
                  WEEK
              </div>
              <div onClick={this.updateQtdMetricFilter} className={AllStyles}>
                  ALL
              </div>
              </span>
          </div>
        </div> 
        
        <div className="  qtdTopDetails container-fluid row white">
          {this.renderQuarterlyToDateTableHeader()}
          <div className=" qtdTotalTitle col-md-12">
            <div className=" qtdTotalTitle col-md-1">Total</div>
              {this.renderQuarterlyToDate(qtdwColSizes,qtdTotalTable)}
          </div>
          
        </div>
        <KendoPanelBar timeMetric={this.state.activeTimeMetric} background='white'/>
      </div>
  )
}
}

function mapStateToProps(state) {
  return {
   
    previousViewWasJourneys: state.switchFilter,
    activeItem: state.activeSummarySquare,
    activeFilters: state.activeFilters,
    availableFilters: state.availableFilters,
    // finData: state.ibeData,
    qtdwData: state.activeSummarySquare.details.qtdw,
    summaryData: state.adobeData
  };
}

export default connect(mapStateToProps,actions)(SummaryViewDetails);