import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DIMENSIONS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";
import SingleDimensionPanelItem from './SingleDimensionPanelItem'
import MultiDimensionPanelItem from './MultiDimensionPanelItem';
import  * as _ from 'lodash';
class PanelItemTable extends Component {
    constructor(props){
        super(props);
        this.state={
            isJourney: this.props.activeSummary.index  > 3
        }
    }
    componentDidMount(){
        
    }
    
    getDataContent(type) {
        switch (type) {
            case DIMENSIONS.MARKET:
                return (
                    <SingleDimensionPanelItem
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.market}
                    isJourney={this.state.isJourney}/>
                    )
            case DIMENSIONS.ROUTE:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.routes}
                isJourney={this.state.isJourney}/>
            case DIMENSIONS.SEGMENT:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.segment}
                isJourney={this.state.isJourney}/>
            case DIMENSIONS.PRODUCT:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.product}
                isJourney={this.state.isJourney}/>
            default:
                return <MultiDimensionPanelItem
                        timeMetric={this.props.timeMetric}
                        data={this.props.activeSummary.details.geo}
                        isJourney={this.state.isJourney}
                        type='geo'/>

        }
    }
    
  
    render(){
        return(

            this.getDataContent(this.props.type)

        )
    }
}

export default (PanelItemTable)