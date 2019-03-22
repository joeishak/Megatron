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
                        isJourney={this.state.isJourney} />
                )
            case DIMENSIONS.ROUTE:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.route}
                    isJourney={this.state.isJourney} />
            case DIMENSIONS.SEGMENT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.segment}
                    isJourney={this.state.isJourney} />
            case DIMENSIONS.PRODUCT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.product}
                    isJourney={this.state.isJourney} />
            case DIMENSIONS.WEBSEGMENT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.segment}
                    isJourney={this.state.isJourney} />
            case DIMENSIONS.LTC:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.ltc}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.LTC} />
            case DIMENSIONS.CONVERSION:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.conversion}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CONVERSION} />
            case DIMENSIONS.NEWVSREPEAT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.nvr}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.NEWVSREPEAT} />
            case DIMENSIONS.MOBILEVSDESKTOP:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.mvd}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.MOBILEVSDESKTOP} />
            case DIMENSIONS.PRODUCT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.product}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.PRODUCT} />
            case DIMENSIONS.CHANNELPM:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.channel}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CHANNELPM} />
            case DIMENSIONS.CHANNELMU:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.channel}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.CHANNELMU} />

            case DIMENSIONS.SIGNCAT:
                return <SingleDimensionPanelItem
                activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.signUpCat}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.SIGNCAT} />
            case DIMENSIONS.SIGNAPP:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.signUpApp}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.SIGNAPP} />
            case DIMENSIONS.VISITS:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.visits}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.VISITS} />
            default:
                return <MultiDimensionPanelItem
                    activeSecondary={this.props.activeSecondary}
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.geo}
                    isJourney={this.state.isJourney}
                    type={DIMENSIONS.GEO} />

        }
    }


    render() {
        return (

            this.getDataContent(this.props.type)

        )
    }
}

export default (PanelItemTable)