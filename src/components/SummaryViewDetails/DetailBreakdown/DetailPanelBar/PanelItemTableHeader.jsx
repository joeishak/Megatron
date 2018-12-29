import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DIMENSIONS } from '../../../../Constants/consts';

class PanelItemTableHeader extends Component {
    getLowerHeaderCategory(type) {
        switch (type) {
            case DIMENSIONS.GEO:
                return 'Geo';
            case DIMENSIONS.MARKET:
                return 'Geo';
            case DIMENSIONS.ROUTE:
                return 'Route';
            case DIMENSIONS.SEGMENT:
                return 'Segment';
            default:
                return 'Product';
        }
    }
    getLowerHeader(type) {

        let isMarket = type === DIMENSIONS.MARKET;
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index  > 3
        if(isJourney){
            // Journeys
            if(isMarket){
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
            } else{
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
            }
        } else{
            // Financial
            if(isMarket){
                qtdColumnClass = 'qtdMarketColumn';
                weekColumnClass = 'weekMarketColumn';
            } else{
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
            }
        } 
        
        let MAColumn = (isMarket) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Market Area
           </div> : <span></span>

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
                    {isJourney? <span></span> :  
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
                    <div className={`${qtdColumnClass}  header col`}>
                        vs QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Q/Q
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Y/Y
                    </div>
                </div>);
            default:
                return (<div className="lowerHeaderBar ">
                    <div className={`${weekColumnClass} header weekGeoHeader  col`}>
                        {this.getLowerHeaderCategory(type)}
                    </div>
                    {(type === DIMENSIONS.MARKET) ? <div className={`${weekColumnClass} header weekMaHeader  col`}>
                        Market Area
                </div> : <span></span>}
                    <div className={`${weekColumnClass} header  col`}>
                        Actuals
                </div>
                {isJourney? <span></span> :  

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
                        vs QRF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        W/W
                </div>
                </div>);
        }
    }
    render(){
        return(
            this.getLowerHeader(this.props.type)
        )
    }
}

export default (PanelItemTableHeader)