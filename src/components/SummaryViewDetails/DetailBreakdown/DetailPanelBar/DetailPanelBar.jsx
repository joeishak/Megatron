import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './DetailPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css';
import { DIMENSIONS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";

import DetailPanelItemTimeHeader from './DetailPanelItemTimeHeader';
import PanelItemTableHeader from './PanelItemTableHeader';
import PanelItemTable from './PanelItemTable';
class DetailPanelBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        this.getPanelContents = this.getPanelContents.bind(this);

    }

    shouldComponentUpdate(nextProps) {
        return true;
    }






    /* Return Contents for */
    getPanelContents(type) {
        // if (type === DIMENSIONS.LTC) {
        //     return (
        //         <div className='row'>
        //             <div className='col-md-12 topPanelHeader'>
        //                 {/* {this.getTopHeader()} */}
        //                 <DetailPanelItemTimeHeader
        //                     timeMetric={this.props.timeMetric}
        //                 />
        //             </div>
        //             <div className='col-md-12'>
        //                 {/* {this.getLowerHeader(type)} */}
        //                 <PanelItemTableHeader
        //                     qtdIsPercent={this.props.qtdIsPercent}
        //                     timeMetric={this.props.timeMetric}
        //                     activeSummary={this.props.activeSummary}
        //                     type={type} />
        //             </div>
        //             <div className='col-md-12 geoTableContainer'>
        //                 {/* {this.getTable(type)} */}
        //                 {/* <PanelItemTable
        //                     type={type}
        //                     activeSummary={this.props.activeSummary}
        //                     timeMetric={this.props.timeMetric}
        //                 /> */}
        //             </div>
        //         </div>
        //     );
        // }
        return (
            <div className='row'>
                <div className='col-md-12 topPanelHeader'>
                    {/* {this.getTopHeader()} */}
                    <DetailPanelItemTimeHeader
                        timeMetric={this.props.timeMetric}
                    />
                </div>
                <div className='col-md-12'>
                    {/* {this.getLowerHeader(type)} */}
                    <PanelItemTableHeader
                        qtdIsPercent={this.props.qtdIsPercent}
                        timeMetric={this.props.timeMetric}
                        activeSummary={this.props.activeSummary}
                        type={type} />
                </div>
                <div className='col-md-12 geoTableContainer'>
                    {/* {this.getTable(type)} */}
                    <PanelItemTable
                        qtdIsPercent={this.props.qtdIsPercent}
                        type={type}
                        activeSummary={this.props.activeSummary}
                        timeMetric={this.props.timeMetric}
                    />
                </div>
            </div>
        );

    }

    getDynamicPanelBar() {
        switch (this.props.activePrimary) {
            case 0:
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
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                            {this.getPanelContents(DIMENSIONS.PRODUCT)}
                        </PanelBarItem>
                    </PanelBar>
                )
            //Traffic
            case 1:
                return (
                    <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                            {this.getPanelContents(DIMENSIONS.WEBSEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
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
            case 2:
                return (
                    <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                            {this.getPanelContents('Channel')}
                        </ PanelBarItem>


                    </PanelBar>
                )
            case 3:
                return (
                    <PanelBar >
                        <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                            {this.getPanelContents(DIMENSIONS.GEO)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                            {this.getPanelContents(DIMENSIONS.MARKET)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                            {this.getPanelContents(DIMENSIONS.SEGMENT)}
                        </ PanelBarItem>
                        <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                            {this.getPanelContents('Channel')}
                        </ PanelBarItem>


                    </PanelBar>
                )
            case 4:
                switch (this.props.activeSecondary) {
                    case 24:
                        //Enagement Index
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
                    case 25:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 26:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 27:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 28:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 29:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 30:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 31:
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
                }
            case 5:
                switch (this.props.activeSecondary) {
                    case 32:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 33:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 34:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 35:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 36:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offerings'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                            </PanelBar>
                        )
                    case 37:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case 38:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>

                                <PanelBarItem className="panelItemTitle" expanded={false} title='Subscription Offering'>
                                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                                </PanelBarItem>
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>
                            </PanelBar>
                        )
                    case 39:
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
                                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                                </ PanelBarItem>


                            </PanelBar>
                        )
                }
        }
    }
    render() {

        return (<div className={'panel-wrapper'}>
            {/* {this.props.activePrimary !== 1 ? <PanelBar >
                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                    {this.getPanelContents(DIMENSIONS.GEO)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                    {this.getPanelContents(DIMENSIONS.MARKET)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                    {this.getPanelContents(DIMENSIONS.ROUTE)}
                </PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                </ PanelBarItem>

                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Category'>
                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                </PanelBarItem>
            </PanelBar> :
                <PanelBar >
                    <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                        {this.getPanelContents(DIMENSIONS.GEO)}
                    </ PanelBarItem>
                    <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                        {this.getPanelContents(DIMENSIONS.MARKET)}
                    </ PanelBarItem>
                    <PanelBarItem className="panelItemTitle" expanded={false} title='Web Segments'>
                        {this.getPanelContents(DIMENSIONS.SEGMENT)}
                    </ PanelBarItem>
                    <PanelBarItem className="panelItemTitle" expanded={false} title='Channel'>
                        {this.getPanelContents('Channel')}
                    </ PanelBarItem>


                </PanelBar>} */}
            {this.getDynamicPanelBar()}

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
