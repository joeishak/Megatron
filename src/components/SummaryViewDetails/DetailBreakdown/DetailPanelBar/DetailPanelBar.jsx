import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './DetailPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css';
import { DIMENSIONS, SUMMARY_FILTERS } from '../../../../Constants/consts';
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
        console.log(type);
        //If type is aMulti Dimension
        if(type === DIMENSIONS.GEO || type ===DIMENSIONS.SIGNAPP || type === DIMENSIONS.LTC){
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
                            type={type} />
                    </div>
                    <div className=' geoTableContainer'>
                        {/* {this.getTable(type)} */}
                        <PanelItemTable
                            activeSecondary={this.props.activeSecondary}
                            qtdIsPercent={this.props.qtdIsPercent}
                            type={type}
                            activeSummary={this.props.activeSummary}
                            timeMetric={this.props.timeMetric}
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
                            type={type} />
                    </div>
                    <div className='geoTableContainer'>
                        {/* {this.getTable(type)} */}
                        <PanelItemTable
                            activeSecondary={this.props.activeSecondary}
                            qtdIsPercent={this.props.qtdIsPercent}
                            type={type}
                            activeSummary={this.props.activeSummary}
                            timeMetric={this.props.timeMetric}
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
            VISITS
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
                    case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Conversion Type'>
                                    {this.getPanelContents(DIMENSIONS.CONVERSION)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Mobile Vs Desktop'>
                                    {this.getPanelContents(DIMENSIONS.MOBILEVSDESKTOP)}
                                </ PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='New Vs Repeat'>
                                    {this.getPanelContents(DIMENSIONS.NEWVSREPEAT)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
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
                    case SUMMARY_FILTERS.DISCOVER_UQFM:
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
                    case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
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
                    case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
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
                    case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Conversion'>
                                    {this.getPanelContents(DIMENSIONS.CONVERSION)}
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
                    case SUMMARY_FILTERS.TRY_NEW_QFM:
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
                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.TRY_NEW_UQFM:
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
                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.TRY_CUMU_UQFM:
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

                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.TRY_CUMU_QFM:
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
                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.TRY_DAY_28:
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
                            </PanelBar>
                        )
                    case SUMMARY_FILTERS.TRY_CUMU_UQFM_QFM:
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
                            </PanelBar>
                        )
                }


                case 3:
                //Disocver
                switch (this.props.activeSecondary) {
                 case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
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
                 case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
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
                 case SUMMARY_FILTERS.BUY_CONVERSION:
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
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Conversion'>
                             {this.getPanelContents(DIMENSIONS.CONVERSION)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='Mobile Vs Desktop'>
                             {this.getPanelContents(DIMENSIONS.MOBILEVSDESKTOP)}
                         </ PanelBarItem>
                         <PanelBarItem className="panelItemTitle" expanded={false} title='New Vs Repeat'>
                             {this.getPanelContents(DIMENSIONS.NEWVSREPEAT)}
                         </ PanelBarItem>
                     </PanelBar>
                 )
                 case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
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
                 case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
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
             }
            case 4:
                switch (this.props.activeSecondary) {
                    case SUMMARY_FILTERS.USE_ENGAGEMENT_INDEX:
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
                    case SUMMARY_FILTERS.USE_PAID_USER_MAU:
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
                    case SUMMARY_FILTERS.USE_PAID_USER_SUCCESS:
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
                    case SUMMARY_FILTERS.USE_REPEAT_USER_MAU:
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
                    case SUMMARY_FILTERS.USE_WK0_WAU_RATE:
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
                    case SUMMARY_FILTERS.USE_WK4_WAU_RATE:
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

            
                </PanelBar>
            )
                // switch (this.props.activeSecondary) {
                //     case SUMMARY_FILTERS.RENEW_CANCEL:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 33:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 34:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 35:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 36:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offerings'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 37:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Web segment'>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 38:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>

                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                //                     {this.getPanelContents(DIMENSIONS.PRODUCT)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Web segment'>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>
                //             </PanelBar>
                //         )
                //     case 39:
                //         return (
                //             <PanelBar >
                //                 <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                //                     {this.getPanelContents(DIMENSIONS.GEO)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                //                     {this.getPanelContents(DIMENSIONS.MARKET)}
                //                 </ PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                //                     {this.getPanelContents(DIMENSIONS.ROUTE)}
                //                 </PanelBarItem>
                //                 <PanelBarItem className="panelItemTitle" expanded={false} title={SEGMENT}>
                //                     {this.getPanelContents(DIMENSIONS.SEGMENT)}
                //                 </ PanelBarItem>


                //             </PanelBar>
                //         )
                // }
        }
    }
    render() {
        return (<div className={'panel-wrapper'}>
            {this.state.isLoading ? null : this.getDynamicPanelBar()}
        </div>)
    }
}

function mapStateToProps(state) {
    return {

        activeSummary: state.summaryData.secondary[state.activeCards.secondary],
        activeGeo: state.summaryData.secondary[state.activeCards.secondary].details.geo.qtd,
        activePrimary: state.activeCards.primary,
        activeSecondary: state.activeCards.secondary
    }
}
export default connect(mapStateToProps, actions)(DetailPanelBar);
