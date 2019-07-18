import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './DetailPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css';
import { DIMENSIONS, SUMMARY_KPIS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";
import SingleDimensionDetailPanelItemTimeHeader from './SingleDimensionDetailPanelItemTimeHeader';

import DetailPanelItemTimeHeader from './DetailPanelItemTimeHeader';
import PanelItemTableHeader from './PanelItemTableHeader';
import PanelItemTable from './PanelItemTable';
import Loading from '../../../../Views/Loading/Loading';
class DetailPanelBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
        this.getPanelContents = this.getPanelContents.bind(this);

    }

   componentDidUpdate(prevProps){
       if(this.props.activeSecondary !== prevProps.activeSecondary){
        this.setState({isLoading: true},()=>{
            setTimeout(()=>{
                this.setState({isLoading:false})
            },.001)
        });
    }
   }

    /* Return Contents for */
    getPanelContents(type) {
        //If type is aMulti Dimension
        
        if(type === DIMENSIONS.GEO || type ===DIMENSIONS.SIGNAPP || type === DIMENSIONS.LTC 
               || (type === DIMENSIONS.QFMTYPE && 
                      (this.props.activeSecondary === SUMMARY_KPIS.TRY_CUMU_QFM || 
                           this.props.activeSecondary === SUMMARY_KPIS.TRY_NEW_QFM))){
            return (
                <div className='row'>
                    <div className='col-md-12 topPanelHeader'>
                        {/* {this.getTopHeader()} */}
                        <DetailPanelItemTimeHeader
                            timeMetric={this.props.timeMetric}
                            isJourney={this.props.activeSecondary <=3 ? false : true}
                        />
                    </div>
                    <div className=''>
                        {/* {this.getLowerHeader(type)} */}
                        <PanelItemTableHeader
                            qtdIsPercent={this.props.qtdIsPercent}
                            timeMetric={this.props.timeMetric}
                            activeSummary={this.props.activeSummary}
                            type={type}
                            activeSecondary={this.props.activeSecondary} />
                    </div>
                    <div className=' geoTableContainer'>
                        {/* {this.getTable(type)} */}
                        <PanelItemTable
                            activeSecondary={this.props.activeSecondary}
                            qtdIsPercent={this.props.qtdIsPercent}
                            type={type}
                            activeSummary={this.props.activeSummary}
                            timeMetric={this.props.timeMetric}
                            nullifyQrf={this.props.nullifyQrf}
                            isQFMMultidimensional = { (type === DIMENSIONS.QFMTYPE && 
                                (this.props.activeSecondary === SUMMARY_KPIS.TRY_CUMU_QFM || 
                                     this.props.activeSecondary === SUMMARY_KPIS.TRY_NEW_QFM))}
                        />
                    </div>
                </div>
            );
        } else{
            return (
                <div className='row'>
                    <div className='col-md-12 topPanelHeader'>
                        {/* {this.getTopHeader()} */}
                        <SingleDimensionDetailPanelItemTimeHeader
                            timeMetric={this.props.timeMetric}
                            isJourney={this.props.activeSecondary <=3 ? false : true}
                        />
                    </div>
                    <div className=''>
                        {/* {this.getLowerHeader(type)} */}
                        <PanelItemTableHeader
                            qtdIsPercent={this.props.qtdIsPercent}
                            timeMetric={this.props.timeMetric}
                            activeSummary={this.props.activeSummary}
                            type={type} 
                            activeSecondary={this.props.activeSecondary}/>
                    </div>
                    <div className='geoTableContainer'>
                        {/* {this.getTable(type)} */}
                        <PanelItemTable
                            activeSecondary={this.props.activeSecondary}
                            qtdIsPercent={this.props.qtdIsPercent}
                            type={type}
                            activeSummary={this.props.activeSummary}
                            timeMetric={this.props.timeMetric}
                            nullifyQrf={this.props.nullifyQrf}
                            isQFMMultidimensional = { (type === DIMENSIONS.QFMTYPE && 
                                (this.props.activeSecondary === SUMMARY_KPIS.TRY_CUMU_QFM || 
                                     this.props.activeSecondary === SUMMARY_KPIS.TRY_NEW_QFM))}
                        />
                    </div>
                </div>
            );
        }
        

    }

    getDynamicPanelBar() {
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
            CUSTOMERTYPE
        } = DIMENSIONS;
        switch (this.props.activePrimary) {
            case 0:
                //Finance
                return (
                    <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                            {this.getPanelContents(DIMENSIONS.ROUTE)}
                        </PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                            {this.getPanelContents(DIMENSIONS.PRODUCT)}
                        </PanelBarItem>
                    </PanelBar>
                )
            case 1:
                //Disocver
                switch (this.props.activeSecondary) {
                    case SUMMARY_KPIS.DISCOVER_TRAFFIC:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Web segment'>
                                    {this.getPanelContents(DIMENSIONS.WEBSEGMENT)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Last Touch Channel'}>
                                    {this.getPanelContents(DIMENSIONS.LTC)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Customer Type'>
                                    {this.getPanelContents(DIMENSIONS.CUSTOMERTYPE)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Mobile Vs Desktop'>
                                    {this.getPanelContents(DIMENSIONS.MOBILEVSDESKTOP)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='New Vs Repeat'>
                                    {this.getPanelContents(DIMENSIONS.NEWVSREPEAT)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                                    {this.getPanelContents(DIMENSIONS.CHANNELPM)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.DISCOVER_UQFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                                    {this.getPanelContents(DIMENSIONS.CHANNELPM)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                                    {this.getPanelContents(DIMENSIONS.CHANNELPM)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.DISCOVER_BOUNCE_RATE:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Web segment'>
                                    {this.getPanelContents(DIMENSIONS.WEBSEGMENT)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Channel'}>
                                    {this.getPanelContents(DIMENSIONS.LTC)}
                                </ PanelBarItem>
                                {/* <PanelBarItem className="panelItemTitle" expanded={false} title='Conversion'>
                                    {this.getPanelContents(DIMENSIONS.CONVERSION)}
                                </ PanelBarItem> */}
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Customer Type'>
                                    {this.getPanelContents(DIMENSIONS.CUSTOMERTYPE)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Mobile Vs Desktop'>
                                    {this.getPanelContents(DIMENSIONS.MOBILEVSDESKTOP)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='New Vs Repeat'>
                                    {this.getPanelContents(DIMENSIONS.NEWVSREPEAT)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                }

            case 2:
                switch (this.props.activeSecondary) {
                    case SUMMARY_KPIS.TRY_NEW_QFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNCAT)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.TRY_NEW_UQFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNAPP)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.TRY_CUMU_UQFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNAPP)}
                                </ PanelBarItem>
                                {/* <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem> */}

                            </PanelBar>
                        )
                    case SUMMARY_KPIS.TRY_CUMU_QFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNCAT)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.TRY_DAY_28:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNCAT)}
                                </ PanelBarItem>
                                {/* <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem> */}
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.TRY_CUMU_UQFM_QFM:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Sign Up Source'>
                                    {this.getPanelContents(DIMENSIONS.SIGNCAT)}
                                </ PanelBarItem>
                                {/* <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                                    {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                                </ PanelBarItem> */}
                            </PanelBar>
                        )
                }


                case 3:
                //Disocver
                switch (this.props.activeSecondary) {
                 case SUMMARY_KPIS.BUY_PAID_MEDIASPEND:
                     return (
                         <PanelBar >
                             <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                 {this.getPanelContents(DIMENSIONS.GEO)}
                             </ PanelBarItem>
                             <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                                 {this.getPanelContents(DIMENSIONS.CHANNELPM)}
                             </ PanelBarItem>
                         </PanelBar>
                     )
                 case SUMMARY_KPIS.BUY_MARKETING_SOURCED:
                     return (
                         <PanelBar >
                         <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                             {this.getPanelContents(DIMENSIONS.GEO)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                             {this.getPanelContents(DIMENSIONS.MARKET)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                             {this.getPanelContents(DIMENSIONS.CHANNELPM)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Segment'>
                             {this.getPanelContents(DIMENSIONS.SEGMENT)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Product'>
                             {this.getPanelContents(DIMENSIONS.PRODUCT)}
                         </ PanelBarItem>

                     </PanelBar>
                     )
                 case SUMMARY_KPIS.BUY_CONVERSION:
                 return (
                     <PanelBar >
                         <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                             {this.getPanelContents(DIMENSIONS.GEO)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                             {this.getPanelContents(DIMENSIONS.MARKET)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Web segment'>
                             {this.getPanelContents(DIMENSIONS.WEBSEGMENT)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title={'Last Touch Channel'}>
                             {this.getPanelContents(DIMENSIONS.LTC)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Conversion'>
                             {this.getPanelContents(DIMENSIONS.CONVERSION)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Mobile Vs Desktop'>
                             {this.getPanelContents(DIMENSIONS.MOBILEVSDESKTOP)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='New Vs Repeat'>
                             {this.getPanelContents(DIMENSIONS.NEWVSREPEAT)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                             {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                         </ PanelBarItem>
                     </PanelBar>
                 )
                 case SUMMARY_KPIS.BUY_LTV_ROI:
                    return (
                        <PanelBar >
                            <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                {this.getPanelContents(DIMENSIONS.GEO)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                {this.getPanelContents(DIMENSIONS.MARKET)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title='Product'>
                                {this.getPanelContents(DIMENSIONS.PRODUCTCAT)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                {this.getPanelContents(DIMENSIONS.SEGMENT)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription'>
                                {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                            </ PanelBarItem>
                        </PanelBar>
                    )
                 case SUMMARY_KPIS.BUY_GROSS_NEWARR:
                 return (
                     <PanelBar >
                         <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                             {this.getPanelContents(DIMENSIONS.GEO)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                             {this.getPanelContents(DIMENSIONS.MARKET)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                             {this.getPanelContents(DIMENSIONS.ROUTE)}
                         </PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                             {this.getPanelContents(DIMENSIONS.SEGMENT)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                             {this.getPanelContents(DIMENSIONS.PRODUCT)}
                         </PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                             {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                         </ PanelBarItem>
                     </PanelBar>
                 )
                 case SUMMARY_KPIS.BUY_GROSS_NEWUNITS:
                     return (
                        <PanelBar >
                         <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                             {this.getPanelContents(DIMENSIONS.GEO)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                             {this.getPanelContents(DIMENSIONS.MARKET)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                             {this.getPanelContents(DIMENSIONS.ROUTE)}
                         </PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                             {this.getPanelContents(DIMENSIONS.SEGMENT)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                             {this.getPanelContents(DIMENSIONS.PRODUCT)}
                         </PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='QFM Type'>
                             {this.getPanelContents(DIMENSIONS.QFMTYPE)}
                         </ PanelBarItem>
                     </PanelBar>
                     )
             }
            case 4:
                switch (this.props.activeSecondary) {
                    case SUMMARY_KPIS.USE_ENGAGEMENT_INDEX:
                        //Enagement Index
                        return (
                            <PanelBar >
                            <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                {this.getPanelContents(DIMENSIONS.GEO)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                {this.getPanelContents(DIMENSIONS.MARKET)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                {this.getPanelContents(DIMENSIONS.SEGMENT)}
                            </ PanelBarItem>

                            <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                            </PanelBarItem>
                        </PanelBar>
                        )
                    case SUMMARY_KPIS.USE_PAID_USER_MAU:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.USE_PERCENT_ACTIVATED:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                        case SUMMARY_KPIS.USE_PERCENT_ACTIVATED_LAUNCHES:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.USE_REPEAT_USER_MAU:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_KPIS.USE_WK0_WAU_RATE:
                        return (
                            <PanelBar >
                            <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                {this.getPanelContents(DIMENSIONS.GEO)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                {this.getPanelContents(DIMENSIONS.MARKET)}
                            </ PanelBarItem>
                            <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                {this.getPanelContents(DIMENSIONS.SEGMENT)}
                            </ PanelBarItem>

                            <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                            </PanelBarItem>
                        </PanelBar>
                        )
                    case SUMMARY_KPIS.USE_WK4_WAU_RATE:
                        return (
                            <PanelBar >
                                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                                    {this.getPanelContents(DIMENSIONS.GEO)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                                    {this.getPanelContents(DIMENSIONS.MARKET)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.SUBSCRIPTION)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                }
            case 5:
                switch(this.props.activeSecondary){
                    case SUMMARY_KPIS.RENEW_EOT_RESELLER: 
                    return ( <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                    </PanelBar>);
                    default: 
                    return ( <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title={'Segment'}>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title={'Product'}>
                            {this.getPanelContents(DIMENSIONS.PRODUCT)}
                        </ PanelBarItem>
                    </PanelBar>);
                }
               
                
        }
    }
    render() {
        // console.log('Rendering DetailPanelBar Condition ', this.props.nullifyQrf)
        return (<div className={'panel-wrapper'}>
            {this.state.isLoading ? null : this.getDynamicPanelBar()}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        activePrimary: state.activeCards.primary,
        activeSecondary: state.activeCards.secondary
    }
}
export default connect(mapStateToProps, actions)(DetailPanelBar);
