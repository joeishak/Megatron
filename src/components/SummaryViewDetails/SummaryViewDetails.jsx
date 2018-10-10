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
    this.renderDollarValue = this.renderDollarValue.bind(this);
    this.renderM = this.renderM.bind(this);
    this.detailsRenderM = this.detailsRenderM.bind(this);
    this.detailsRenderDollar = this.detailsRenderDollar.bind(this);
    this.formatPercentage = this.formatPercentage.bind(this);
    this.renderDollarValuePanelBarItems = this.renderDollarValuePanelBarItems.bind(this);
  }
 
  componentDidUpdate(prevProps){
    if( prevProps.activeFilters !== this.props.activeFilters ){
      console.log('Getting new data');
      this.props.getQueryFilteredIBEData(this.props.activeFilters,prevProps.availableFilters);
      this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,prevProps.availableFilters);

      
  }
  }
  // shouldComponentUpdate(prevProps){
  //   if(prevProps.activeItem !== this.props.activeItem){
  //     return true;
  //   }
  // }
 updateMultiChartMetricFilter(e){
   let metric = e.target.innerHTML.toLowerCase();
   if(metric==='arr'){
    this.props.updateMultichartMetric(true);

   } else{
    this.props.updateMultichartMetric(false);
   }
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
      <div className=" qtdDetailTitle col-md-11">Quarterly To Date</div>
    );
    case 'week': 
    return(
      <div className=" qtdDetailTitle col-md-11">Week</div>
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
renderM(index) {
  let renderM = '';

  if (index === 1 || index === 2 ) { renderM = 'M' } else {
      renderM = '%'
  }

  return renderM;
}
renderDollarValue(value) {
      
  let returnValue = '';
  value = parseInt(value)
 
  if (value > 1000 && value <= 999999) {
      value = (value/1000).toFixed(1);
      returnValue = '$' + value.toString() + 'K';
  } else if (value > 1000000 && value <= 999999999) {
      value = (value/1000000).toFixed(1);
      returnValue = '$' +  value.toString() + 'M';
      // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
  } else if (value > 1000000000 && value <= 999999999999) {
      value = (value/1000000000).toFixed(1);
      returnValue ='$' +  value.toString() + 'B';
  } else if (value > 1000000000 && value <= 999999999999999) {
      value = (parseInt(value)/1000000000000).toFixed(1);
      returnValue ='$' +  value.toString() + 'T';
  } else {
      return '$' + value.toString();
  }

  return returnValue;
}

formatPercentage(value) {
  return (Math.round(value * 100) / 100).toString() + '%';
}


renderDollarValuePanelBarItems(value, item) {
  if (item.header === 'Actuals' || item.header === 'QRF Diff' || item.header === 'QRF' || item.header === 'Units') {
    // If Units remove the dollar sign
    let tmpValue = item.header === 'Units' ? this.renderDollarValue(value).substr(1) : this.renderDollarValue(value);
    return tmpValue;
  } else {
    return this.formatPercentage(value);
  }
   
}

detailsRenderM(item) {
  if(item.header === 'Actuals' || item.header === 'QRF Diff' || item.header === 'QRF' || item.header === 'Units') {
    return 'M';
  } else return '%';
}

detailsRenderDollar(item) {
  
  if(item.header === 'Actuals' || item.header === 'QRF Diff' || item.header === 'QRF' ) {
    return '$';
  }  else return '';
}
 renderQuarterlyToDate(qtdwColSizes ,qtdTotalTable){ 
   console.log(qtdwColSizes);
   switch(this.state.activeTimeMetric){
     case 'qtd':
     return (
     <div className={qtdTotalTable + ' col-md-11'}>
     {
      this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes + (item.header==="Vs Qrf"? ' redBG':' ')}>
          <span className="contHeader"> {item.header}</span>
          <span className="valHeader"> {this.renderDollarValuePanelBarItems(item.value, item)}</span>
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
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf" ? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader">{this.renderDollarValuePanelBarItems(item.value, item)}</span>
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
          <span className="valHeader">  {this.renderDollarValuePanelBarItems(item.value, item)}</span>
       </div>
         )
       }).reverse()
     }
     {
       this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader">{this.renderDollarValuePanelBarItems(item.value, item)}</span>
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
 
 closeSummary(){
  this.props.updateMultichartMetric(true);
  this.props.hideSummaryDetails();
 }
  render(){

    var UnitStyles = classNames({
      unitMetric: true,
      activeMetric: (this.props.multichartIsArr) ? false: true
    });

    var ArrStyles = classNames({
      arrMetric: true,
      activeMetric: (this.props.multichartIsArr) ? true: false
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
      qtdSize: (this.state.activeTimeMetric === 'qtd') ? true : false,
      weekSize: ( this.state.activeTimeMetric === 'week' ) ? true : false,
      halfSize: (this.state.activeTimeMetric === 'all') ? true: false
    });

    var qtdTotalTable = classNames({
      qtdTotalTable: true,
      normalTableSize: (this.state.activeTimeMetric === 'week' || this.state.activeTimeMetric === 'qtd') ? true : false,
      halfTableSize: (this.state.activeTimeMetric === 'all') ? true: false
    })
    return (

      <div className="sumViewContainer">
      {/* Bread Crumbs */}
        <span className='breadCrumb' onClick={this.closeSummary.bind(this)}>
          {this.state.summaryType} Summary > </span> 
          <span>  {this.props.activeItem.header}
        </span>
        <br/>

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">

          <span className="col-md-3 detailTitle">{this.props.activeItem.header}
          {/* <button className='exportButton'>Export To Excel</button> */}
         
  </span>
          <div className=" col-md-2 multiChartMetricContainer ">
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
        <span className="col-md-3 detailTitle2">Quarterly To Date</span>
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
          <div className=" qtdTotalTitle col-md-2">&nbsp;</div>
          {this.renderQuarterlyToDateTableHeader()}
          <div className=" qtdTotalTitle col-md-12">
            <div className=" qtdTotalTitle col-md-2">Total</div>
              {this.renderQuarterlyToDate(qtdwColSizes,qtdTotalTable)}
          </div>
          
        </div>
        <div className="  qtdTopDetails container-fluid row white">
          <KendoPanelBar renderTableHeaders={this.renderQuarterlyToDateTableHeader} timeMetric={this.state.activeTimeMetric} background='white'/>
        </div>
      </div>
  )
}
}

function mapStateToProps(state) {
  console.log(state);
  return {
    previousViewWasJourneys: state.switchFilter,
    activeItem: state.activeSummarySquare,
    activeFilters: state.activeFilters,
    availableFilters: state.availableFilters,
    qtdwData: state.activeSummarySquare.details.qtdw,
    summaryData: state.adobeData,
    multichartIsArr: state.multichartIsArr
  };
}

export default connect(mapStateToProps,actions)(SummaryViewDetails);