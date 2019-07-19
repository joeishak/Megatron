import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DIMENSIONS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";
import SingleDimensionPanelItem from './SingleDimensionPanelItem'
import MultiDimensionPanelItem from './MultiDimensionPanelItem';
import * as _ from 'lodash';
class PanelItemTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isJourney: this.props.activeSummary.index > 3
        }
    }

    getDataContent(type) {
        switch (type) {
            case DIMENSIONS.MARKET:
                return (
                    <SingleDimensionPanelItem
                        activeSecondary={this.props.activeSecondary}
                        timeMetric={this.props.timeMetric}
                        data={this.props.activeSummary.details.market}
                        isJourney={this.state.isJourney}
                        nullifyQrf={this.props.nullifyQrf}
                        valueType={this.props.activeSummary.valueType}
                    />
                )
            case DIMENSIONS.SUBSCRIPTION:
                return (
                    <SingleDimensionPanelItem
                        activeSecondary={this.props.activeSecondary}
                        timeMetric={this.props.timeMetric}
                        data={this.props.activeSummary.details.subscription}
                        isJourney={this.state.isJourney}
                        valueType={this.props.activeSummary.valueType}
                    />
                )
            case DIMENSIONS.ROUTE:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.route}
                    isJourney={this.state.isJourney}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.SEGMENT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.segment}
                    isJourney={this.state.isJourney}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.PRODUCT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.product}
                    isJourney={this.state.isJourney}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.WEBSEGMENT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.segment}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.LTC:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.ltc}
                    dataTotal={this.props.activeSummary.details.ltcTotal}
                    isJourney={true}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.LTC}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.CONVERSION:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.conversion}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.CONVERSION}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.NEWVSREPEAT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.nvr}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.NEWVSREPEAT}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.MOBILEVSDESKTOP:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.mvd}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.MOBILEVSDESKTOP}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.PRODUCTCAT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.product}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.PRODUCT}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.CHANNELPM:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.channel}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CHANNELPM}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.CHANNELMU:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.channel}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CHANNELMU}
                    valueType={this.props.activeSummary.valueType}
                />

            case DIMENSIONS.SIGNCAT:
                return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.signUpCat}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.SIGNCAT}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.SIGNAPP:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.signUpApp}
                    dataTotal={this.props.activeSummary.details.signUpAppTotal}
                    isJourney={true}
                    type={DIMENSIONS.SIGNAPP}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.VISITS:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.visits}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.VISITS}
                    valueType={this.props.activeSummary.valueType}
                />
            case DIMENSIONS.QFMTYPE:
            
                if (this.props.isQFMMultidimensional){
                    
                    return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.qfm}
                    dataTotal={this.props.activeSummary.details.qfmTotal}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.QFMTYPE}
                    valueType={this.props.activeSummary.valueType}
                    />
                }else{
                    return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.qfm}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.QFMTYPE}
                    valueType={this.props.activeSummary.valueType}
                />

                }
            case DIMENSIONS.CUSTOMERTYPE:
                    return <SingleDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.customer}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CUSTOMERTYPE}
                    valueType={this.props.activeSummary.valueType}
                />
                
                
            default:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.geo}
                    dataTotal={this.props.activeSummary.details.geoTotal}
                    isJourney={this.state.isJourney}
                    nullifyQrf={this.props.nullifyQrf}
                    type={DIMENSIONS.GEO}
                    valueType={this.props.activeSummary.valueType}
                />

        }
    }


    render() {
        // console.log('Rendering PanelItemTable Condition ', this.props.nullifyQrf)
        return (

            this.getDataContent(this.props.type)

        )
    }
}

export default (PanelItemTable)