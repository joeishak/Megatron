import {  PanelBar, PanelBarItem  } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './KendoPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css'

class KendoPanelBar extends Component {

    constructor(props){
        super(props);

        this.state = {
        }

        this.getPanelContents = this.getPanelContents.bind(this);
        this.getTopHeader = this.getTopHeader.bind(this);
        this.getLowerHeader = this.getLowerHeader.bind(this);
        this.getTable = this.getTable.bind(this);
        this.getGeoContent = this.getGeoContent.bind(this);
    }
 
   shouldComponentUpdate(nextProps){
    return true;
   }
   
    getLowerHeader(){
        switch(this.props.timeMetric){
            case 'qtd':
                return (
                <div className="lowerHeaderBar "> 
                    <div className="qtdColumn header qtdGeoHeader  col">
                    Geo
                    </div>
                    <div className="qtdColumn header qtdMaHeader col">
                    Market Area
                    </div>
                    <div className="qtdColumn header col">
                    Actuals
                    </div>
                    <div className="qtdColumn header col">
                    Units
                    </div>
                    <div className="qtdColumn header col">
                    QRF
                    </div>
                    <div className="qtdColumn header col">
                    QRF DIFF
                    </div>
                    <div className="qtdColumn header col">
                    vs QRF
                    </div>
                    <div className="qtdColumn header col">
                    Q/Q
                    </div>
                    <div className="qtdColumn header col">
                    Y/Y
                    </div>
                </div>
                );
            case 'week':
            return (
                <div className="lowerHeaderBar "> 
                    <div className="weekColumn header weekGeoHeader  col">
                    Geo
                    </div>
                    <div className="weekColumn header weekMaHeader col">
                    Market Area
                    </div>
                    <div className="weekColumn header col">
                    Actuals
                    </div>
                    <div className="weekColumn header col">
                    Units
                    </div>
                    <div className="weekColumn header col">
                    QRF
                    </div>
                    <div className="weekColumn header col">
                    QRF DIFF
                    </div>
                    <div className="weekColumn header col">
                    vs QRF
                    </div>
                    <div className="weekColumn header col">
                    W/W
                    </div>
                    
    
                </div>
                );
            case 'all':
            return(
                <div className="allLowerHeaderBar "> 
                    <div className="allColumn header allColumn  col">
                    Geo
                    </div>
                    <div className="allColumn header allMaHeader col">
                    Market Area
                    </div>
                    <div className="allColumn header col">
                    Actuals
                    </div>
                    <div className="allColumn header col">
                    Units
                    </div>
                    <div className="allColumn header col">
                    QRF
                    </div>
                    <div className="allColumn header col">
                    QRF DIFF
                    </div>
                    <div className="allColumn header col">
                    vs QRF
                    </div>
                    <div className="allColumn header col">
                    Q/Q
                    </div>
                    <div className="allColumn header col">
                    Y/Y
                    </div>
                    <div className="allColumn header col">
                    Actuals
                    </div>
                    <div className="allColumn header col">
                    Units
                    </div>
                    <div className="allColumn header col">
                    QRF
                    </div>
                    <div className="allColumn header col">
                    QRF DIFF
                    </div>
                    <div className="allColumn header col">
                    vs QRF
                    </div>
                    <div className="allColumn header col">
                    W/W
                    </div>
                    
                </div>
            );
            default: 
            break;
        }
    }
    getTopHeader(){
        switch(this.props.timeMetric){
            case 'qtd':
          return(
            <div className=" topHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>
          );
          case 'week': 
          return(
            <div className="topHeaderBar weekDetailTitle col-md-11">Week</div>
          );
          case 'all': 
          return(
      
            <div className="topHeaderBar allContainer col-md-12">
            <div className="topHeaderBar allWeekDetailTitle col-md-6">Week</div> 
            <div className="topHeaderBar allQtdDetailTitle col-md-6">Quartely To Date</div>
            </div>
            
          );
          default: 
          break;
      
        }
    }

    renderDollarValue(value) {
      
        let returnValue = '';
        value = parseInt(value)
       
        if (value > 1000 && value <= 999999) {
            value = (value/1000).toFixed(1);
            returnValue = '' + value.toString() + 'K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value/1000000).toFixed(1);
            returnValue = '' +  value.toString() + 'M';
            // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value/1000000000).toFixed(1);
            returnValue ='' +  value.toString() + 'B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value)/1000000000000).toFixed(1);
            returnValue ='' +  value.toString() + 'T';
        } else {
            return '' + value.toString();
        }
      
        return returnValue;
    }

    formatPercentage(value) {
        return Math.round(value * 100) / 100;
    }

    getGeoContent(){
        switch(this.props.timeMetric){
            case 'qtd':
            return(
                this.props.activeSummary.details.geo.qtd.map(item =>{
                   
                    return(
                        <span key={item.index}>
                              <div className="qtdColumn qtdGeoHeader  col">
                                    {item.type}
                                </div>
                            <div className="qtdColumn qtdMaHeader col">
                                    {item.marketArea}
                                </div>
                        <div className="qtdColumn col">
                            
                            $ {this.renderDollarValue(item.actuals)}
                        </div>
                        <div className="qtdColumn col">
                            
                            {this.renderDollarValue(item.units)}
                        </div>
                        <div className="qtdColumn col">
                            
                            $ {this.renderDollarValue(item.qrf)}
                        </div>
                        <div className="qtdColumn col">
                            
                            $ {this.renderDollarValue(item.qrfDiff)}
                        </div>
                        <div className={ (item.vsQrf <= 0)? 'qtdColumn col redBG': ' qtdColumn col greenBG'}>
                            
                            {this.formatPercentage(item.vsQrf)} %
                            
                        </div>
                        <div className="qtdColumn col">
                            
                            {this.formatPercentage(item.qq)} %
                        </div>
                        <div className="qtdColumn col">
                            
                            {this.formatPercentage(item.yy)} %
                        </div>
                        </span>
                    )
                })

            );
            case 'week':
            return(
                this.props.activeSummary.details.geo.week.map(item =>{
               
                    return(
                        <span key={item.index}>
                              <div className="weekColumn weekGeoHeader  col">
                                    {item.type}
                                </div>
                            <div className="weekColumn weekMaHeader col">
                                    {item.marketArea}
                                </div>
                        <div className="weekColumn col">
                            {item.actuals}
                        </div>
                        <div className="weekColumn col">
                            {item.units}
                        </div>
                        <div className="weekColumn col">
                            {item.qrf}
                        </div>
                        <div className="weekColumn col">
                            {item.qrfDiff}
                        </div>
                        <div className={ (item.vsQrf <= 0)? 'weekColumn col redBG': 'weekColumn col greenBG'}>
                            {item.vsQrf}
                        </div>
                        <div className="weekColumn col">
                            {item.ww}
                        </div>
                       
                        </span>
                    )
                })

            );
            case 'all':
            let sumData = this.props.activeSummary.details.geo.all;
           let allComponent = this.props.activeSummary.details.geo.all.map(item =>{
                return(
                                <span key={item.index}>
                                      <div className="allColumn qtdGeoHeader  col">
                                            {item.qtd.type}
                                        </div>
                                    <div className="allColumn qtdMaHeader col">
                                            {item.qtd.marketArea}
                                        </div>
                                <div className="allColumn col">
                                    {item.qtd.actuals}
                                </div>
                                <div className="allColumn col">
                                    {item.qtd.units}
                                </div>
                                <div className="allColumn col">
                                    {item.qtd.qrf}
                                </div>
                                <div className="allColumn col">
                                    {item.qtd.qrfDiff}
                                </div>
                                <div className={ (item.vsQrf <= 0)? 'allColumn col redBG': 'allColumn col greenBG'}>
                                    {item.qtd.vsQrf}
                                </div>
                                <div className="allColumn col">
                                    {item.qtd.qq}
                                </div>
                                <div className="allColumn col">
                                    {item.qtd.yy}
                                </div>
                                <div className="allColumn col">
                                 {item.week.actuals}
                                </div>
                                <div className="allColumn col">
                                    {item.week.units}
                                </div>
                                <div className="allColumn col">
                                    {item.week.qrf}
                                </div>
                                <div className="allColumn col">
                                    {item.week.qrfDiff}
                                </div>
                                <div className={ (item.vsQrf <= 0)? 'allColumn col redBG': 'allColumn col greenBG'}>
                                    {item.week.vsQrf}
                                </div>
                                <div className="allColumn col">
                                     {item.week.ww}
                                 </div>
                                  </span>
                )
               

            }).reverse()

            return allComponent;
            
            default: 
            break;
        }
    }
    getTable(){ 
        switch(this.props.timeMetric){
            case 'qtd':
            return (
                <div className=''>
                   
                    <div className="  col-md-12"> 
                        {this.getGeoContent('qtd')}
                    </div>
                    <div className="  col-md-12"> 
                            <div className="qtdColumn qtdGeoHeader  col">
                            &nbsp;
                            </div>
                            <div className="qtdColumn header qtdMaHeader col">
                            Total
                            </div>
                            <div className="qtdColumn header col">
                            Actuals
                            </div>
                            <div className="qtdColumn header col">
                            Units
                            </div>
                            <div className="qtdColumn header col">
                            QRF
                            </div>
                            <div className="qtdColumn header col">
                            QRF DIFF
                            </div>
                            <div className="qtdColumn header col">
                            vs QRF
                            </div>
                            <div className="qtdColumn header col">
                            Q/Q
                            </div>
                            <div className="qtdColumn header col">
                            Y/Y
                            </div>
                    </div>
                </div>);
            case 'week':
            return (
                <div className=''>
                   
                    <div className=" col-md-12"> 
                        {this.getGeoContent('week')}
                    </div>
                    <div className=" col-md-12"> 
                            <div className="weekColumn weekGeoHeader  col">
                            &nbsp;
                            </div>
                            <div className="weekColumn header weekMaHeader col">
                            Total
                            </div>
                            <div className="weekColumn header col">
                            Actuals
                            </div>
                            <div className="weekColumn header col">
                            Units
                            </div>
                            <div className="weekColumn header col">
                            QRF
                            </div>
                            <div className="weekColumn header col">
                            QRF DIFF
                            </div>
                            <div className="weekColumn header col">
                            vs QRF
                            </div>
                            <div className="weekColumn header col">
                            W/W
                            </div>
                         
                    </div>
                </div>);
            case 'all':
            return (
                <div className=''>
                   
                    <div className="  col-md-12"> 
                        {this.getGeoContent('all')}
                    </div>
                    <div className=" col-md-12"> 
                            <div className="allColumn allGeoHeader  col">
                            &nbsp;
                            </div>
                            <div className="allColumn header allMaHeader col">
                            Total
                            </div>
                            <div className="allColumn header col">
                            Actuals
                            </div>
                            <div className="allColumn header col">
                            Units
                            </div>
                            <div className="allColumn header col">
                            QRF
                            </div>
                            <div className="allColumn header col">
                            QRF DIFF
                            </div>
                            <div className="allColumn header col">
                            vs QRF
                            </div>
                            <div className="allColumn header col">
                            W/W
                            </div>
                         
                    </div>
                </div>);
                default: break;
        }
    }
    /* Return Contents for  */
    getPanelContents(type){
        switch (type){
            case 'geo':
            return (
                <div className='row'>
                    <div className='col-md-12 topPanelHeader'> 
                        {this.getTopHeader()}
                    </div>
                    <div className='col-md-12'> 
                        {this.getLowerHeader()}
                    </div>
                    <div className='col-md-12 geoTableContainer'> 
                        {this.getTable()}
                    </div>
                </div>

            );
            case 'marketarea':
            return (
                <div className='row'>
                    <div className='col-md-12 topPanelHeader'> 
                        {this.getTopHeader()}
                    </div>
                    <div className='col-md-12'> 
                        {this.getLowerHeader()}
                    </div>
                    <div className='col-md-12 geoTableContainer'> 
                        {this.getTable()}
                    </div>
                </div>

            );
            case 'routetomarket':
            return (<div> {type}</div>);
            case 'segments':
            return (<div> {type}</div>);
            case 'productname':
            return (<div> {type}</div>);
            default:
            return;
        }
    }
 render(){
    // var red = classNames({
    //     'red': true
    // });
     return(
        <div className={'panel-wrapper'}>
                   <PanelBar >
                       <PanelBarItem className="panelItemTitle" expanded={true} title="Geo">
                           {this.getPanelContents('geo')}
                       </ PanelBarItem>
                       <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area' >  
                           {this.getPanelContents('marketarea')}
                       </ PanelBarItem>
                       <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                            {this.getPanelContents('routetomarket')}
                       </PanelBarItem>
                       <PanelBarItem className="panelItemTitle" expanded={false} title='Segments' >
                            {this.getPanelContents('segments')}
                       </ PanelBarItem>
                       <PanelBarItem className="panelItemTitle" expanded={false} title='Product Name' >
                            {this.getPanelContents('productname')}
                       </PanelBarItem>

                   </PanelBar>
               </div>
     )
 }
}

function mapStateToProps(state){
    return { activeSummary: state.secondaryData[state.activeCards.secondary], activeGeo: state.secondaryData[state.activeCards.secondary].details.geo.qtd }
}
export default connect(mapStateToProps,actions)(KendoPanelBar);