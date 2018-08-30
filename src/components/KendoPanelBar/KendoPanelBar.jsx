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
            case 'all':
        }
    }
    getTopHeader(){
        switch(this.props.timeMetric){
            case 'qtd':
            return <div className="topHeaderBar"> Quarterly To Date  </div>
            case 'week':
            case 'all':
        }
    }
    getTable(){ 
        switch(this.props.timeMetric){
            case 'qtd':
            return (
                <div className=''>
                    <div className="container-fluid  col-md-12"> 
                        <div className="qtdColumn qtdGeoHeader  col">
                        Geo
                        </div>
                        <div className="qtdColumn qtdMaHeader col">
                        Market Area
                        </div>
                        <div className="qtdColumn col">
                        Actuals
                        </div>
                        <div className="qtdColumn col">
                        Units
                        </div>
                        <div className="qtdColumn col">
                        QRF
                        </div>
                        <div className="qtdColumn col">
                        QRF DIFF
                        </div>
                        <div className="qtdColumn col">
                        vs QRF
                        </div>
                        <div className="qtdColumn col">
                        Q/Q
                        </div>
                        <div className="qtdColumn col">
                        Y/Y
                        </div>
                    </div>
                    <div className="container-fluid  col-md-12"> 
                            <div className="qtdColumn qtdGeoHeader  col">
                            Geo
                            </div>
                            <div className="qtdColumn qtdMaHeader col">
                            Market Area
                            </div>
                            <div className="qtdColumn col">
                            Actuals
                            </div>
                            <div className="qtdColumn col">
                            Units
                            </div>
                            <div className="qtdColumn col">
                            QRF
                            </div>
                            <div className="qtdColumn col">
                            QRF DIFF
                            </div>
                            <div className="qtdColumn col">
                            vs QRF
                            </div>
                            <div className="qtdColumn col">
                            Q/Q
                            </div>
                            <div className="qtdColumn col">
                            Y/Y
                        </div>
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
            case 'all':
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