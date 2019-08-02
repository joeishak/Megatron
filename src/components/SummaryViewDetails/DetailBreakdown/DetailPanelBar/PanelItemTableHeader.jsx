import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DIMENSIONS, SUMMARY_KPIS } from '../../../../Constants/consts';

class PanelItemTableHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            vsQrfIsPercent: true,
            qqIsPercent: true,
            yyIsPercent: true
        }
    }

    getLowerHeaderCategory(type) {
        switch (type) {
            case DIMENSIONS.GEO:
                return 'Geo';
            case DIMENSIONS.MARKET:
                return 'Market Area';
            case DIMENSIONS.ROUTE:
                return 'Route To Market';
            case DIMENSIONS.SEGMENT:
                return 'Segment';
            case DIMENSIONS.CONVERSION:
                return 'Conversion Type'
            case DIMENSIONS.SIGNAPP:
                return 'Sign Up Source'
                case DIMENSIONS.SIGNCAT:
                return 'Sign Up Category';
            case DIMENSIONS.MOBILEVSDESKTOP:
                return 'Mobile vs  Desktop';
            case DIMENSIONS.NEWVSREPEAT:
                return 'New vs Repeat';
            case DIMENSIONS.LTC: 
                return 'Visits';
            case DIMENSIONS.WEBSEGMENT:
                return 'Web Segment';
            case DIMENSIONS.CHANNELPM:
                return 'Channel';
            case DIMENSIONS.CHANNELMU:
                return 'Channel';
            case DIMENSIONS.SUBSCRIPTION:
                return 'Subscription Offering';
            case DIMENSIONS.QFMTYPE:
                return 'QFM Type'
            case DIMENSIONS.CUSTOMERTYPE:
                return 'Customer Type'
            case DIMENSIONS.PRODUCTCAT:
                return 'Product Category'
            default:
                return 'Product';
        }
    }
    updateVsQRF = () => {
        this.setState({ vsQrfIsPercent: !this.state.vsQrfIsPercent })
    }
    updateQQ = () => {
        this.setState({ qqIsPercent: !this.state.qqIsPercent })

    }
    updateYY = () => {
        this.setState({ yyIsPercent: !this.state.yyIsPercent })

    }
    getLowerHeader(type) {

        let isGeo = type === DIMENSIONS.GEO 
        let isLTC =  type === DIMENSIONS.LTC 
        let isSignApp = type === DIMENSIONS.SIGNAPP;
        let isQFMType = type === DIMENSIONS.QFMTYPE && (this.props.activeSecondary === SUMMARY_KPIS.TRY_CUMU_QFM 
                    || this.props.activeSecondary === SUMMARY_KPIS.TRY_NEW_QFM)
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index > 3
        if (isJourney) {
            // Journeys
            if (isGeo || isLTC || isSignApp || isQFMType) {
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
            } else {
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
            }
        } else {
            // Financial
            if (isGeo) {
                qtdColumnClass = 'qtdMarketColumn';
                weekColumnClass = 'weekMarketColumn';
            } else {
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
            }
        }

        let MAColumn = (isGeo) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Market Area
           </div> : (isLTC) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Last Touch Channel
           </div> : (isSignApp) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Sign Up App
           </div> : (isQFMType)? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Download Type
           </div> :<span></span>
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className="lowerHeaderBar ">
                    <div className={`${qtdColumnClass}  header qtdGeoHeader col`}>
                        {this.getLowerHeaderCategory(type)}
                    </div>
                    {MAColumn}
                    <div className={`${qtdColumnClass}  header col`}>
                        Actuals
                    </div>
                    {isJourney ? <span></span> :
                        <div className={`${qtdColumnClass}  header col`}>
                            Units
                        </div>
                    }
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF DIFF
                    </div>
                    <div onDoubleClick={this.updateVsQRF} className={`${qtdColumnClass} pointer header col`}>
                        VS QRF {this.props.qtdIsPercent ? '%' : '#'}
                    </div>
                    <div onDoubleClick={this.updateQQ} className={`${qtdColumnClass} pointer  header col`}>
                        Q/Q {this.props.qtdIsPercent ? '%' : '#'}
                    </div>
                    <div onDoubleClick={this.updateYY} className={`${qtdColumnClass} pointer  header col`}>
                        Y/Y {this.props.qtdIsPercent ? '%' : '#'}
                    </div>
                </div>);
            default:
                return (<div className="lowerHeaderBar ">
                    <div className={`${weekColumnClass} header weekGeoHeader  col`}>
                        {this.getLowerHeaderCategory(type)}
                    </div>
                    {MAColumn}

                    <div className={`${weekColumnClass} header  col`}>
                        Actuals
                </div>
                    {isJourney ? <span></span> :

                        <div className={`${weekColumnClass} header  col`}>
                            Units
                    </div>
                    }
                    <div className={`${weekColumnClass} header  col`}>
                        QRF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        QRF DIFF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        VS QRF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        W/W
                </div>
                </div>);
        }
    }
    render() {
        return (
            this.getLowerHeader(this.props.type)
        )
    }
}

export default (PanelItemTableHeader)