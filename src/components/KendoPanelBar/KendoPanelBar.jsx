import {  PanelBar, PanelBarItem  } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
import _ from 'lodash';
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
    getLowerHeader(){
        switch(this.props.timeMetric){
            case 'qtd':
                return (
                <div className="lowerHeaderBar container-fluid"> 
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
                <div className="lowerHeaderBar container-fluid"> 
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
                <div className="allLowerHeaderBar container-fluid"> 
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
        }
    }
    getTopHeader(){
        switch(this.props.timeMetric){
            case 'qtd':
            return <div className="topHeaderBar"> Quarterly To Date  </div>
            case 'week':
            return <div className="topHeaderBar"> Week  </div>
            case 'all':
            return(
                <span className='allTopHeaderContainer'>
                    <div className="leftTopHeaderBar"> Quarterly To Date  </div>
                    <div className="rightTopHeaderBar"> Week  </div>
                </span>
            );
        }
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
                            {item.actuals}
                        </div>
                        <div className="qtdColumn col">
                            {item.units}
                        </div>
                        <div className="qtdColumn col">
                            {item.qrf}
                        </div>
                        <div className="qtdColumn col">
                            {item.qrfDiff}
                        </div>
                        <div className="qtdColumn col">
                            {item.vsQrf}
                        </div>
                        <div className="qtdColumn col">
                            {item.qq}
                        </div>
                        <div className="qtdColumn col">
                            {item.yy}
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
                        <div className="weekColumn col">
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
            console.log(sumData);
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
                                <div className="allColumn col">
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
                                <div className="allColumn col">
                                    {item.week.vsQrf}
                                </div>
                                <div className="allColumn col">
                                     {item.week.ww}
                                 </div>
                                  </span>
                )

            }).reverse()

            return allComponent;
            //   let a=  this.props.activeSummary.details.geo.qtd.map(item =>{
               
            //         return(
            //             <span key={item.index}>
            //                   <div className="allColumn qtdGeoHeader  col">
            //                         {item.geo}
            //                     </div>
            //                 <div className="allColumn qtdMaHeader col">
            //                         {item.marketArea}
            //                     </div>
            //             <div className="allColumn col">
            //                 {item.actuals}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.units}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.qrf}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.qrfDiff}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.vsQrf}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.qq}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.yy}
            //             </div>
            //             </span>
            //         )
            //     })
            //    let b= this.props.activeSummary.details.geo.week.map(item =>{
               
            //         return(
            //             <span key={item.index}>
                          
            //             <div className="allColumn col">
            //                 {item.actuals}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.units}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.qrf}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.qrfDiff}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.vsQrf}
            //             </div>
            //             <div className="allColumn col">
            //                 {item.ww}
            //             </div>
                       
            //             </span>
            //         )
            //     })
            //     console.log(a,b);
        }
    }
    getTable(){ 
        switch(this.props.timeMetric){
            case 'qtd':
            return (
                <div className=''>
                   
                    <div className="container-fluid  col-md-12"> 
                        {this.getGeoContent('qtd')}
                    </div>
                    <div className="container-fluid  col-md-12"> 
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
                   
                    <div className="container-fluid  col-md-12"> 
                        {this.getGeoContent('week')}
                    </div>
                    <div className="container-fluid  col-md-12"> 
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
                   
                    <div className="container-fluid  col-md-12"> 
                        {this.getGeoContent('all')}
                    </div>
                    <div className="container-fluid  col-md-12"> 
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
        }
    }
    /* Return Contents for  */
    getPanelContents(type){
        switch (type){
            case 'geo':
            return (
                <div className='row'>
                    <div className='col-md-12'> 
                        {this.getTopHeader()}
                    </div>
                    <div className='col-md-12'> 
                        {this.getLowerHeader()}
                    </div>
                    <div className='col-md-12'> 
                        {this.getTable()}
                    </div>
                </div>

            );
            case 'marketarea':
            return (<div> {type}</div>);
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
                       <PanelBarItem expanded={false} title='Market Area' >  
                           {this.getPanelContents('marketarea')}
                       </ PanelBarItem>
                       <PanelBarItem expanded={false} title='Route To Market'>
                            {this.getPanelContents('routetomarket')}
                       </PanelBarItem>
                       <PanelBarItem expanded={false} title='Segments' >
                            {this.getPanelContents('segments')}
                       </ PanelBarItem>
                       <PanelBarItem expanded={false} title='Product Name' >
                            {this.getPanelContents('productname')}
                       </PanelBarItem>

                   </PanelBar>
               </div>
     )
 }
}

function mapStateToProps(state){
    return { activeSummary: state.activeSummarySquare }
}
export default connect(mapStateToProps,actions)(KendoPanelBar);