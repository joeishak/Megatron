import React, { Component } from 'react';
import styles from './MobileViewDetails.css';
import * as utils from '../../../../../utilities.js';

class MobileViewDetails extends Component {


    shouldComponentUpdate(nextProps) {
        if (this.props.detailsData !== nextProps.detailsData) {
            return true;
        }
    }

    render () {

        const vsQRFcolor = utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[4].value}, 'value') > 0 ? 'green-details' : 'red-details';

        {console.log('data',this.props.valueType)}
        return (
            <div>
                <div className="container-fluid details-mobile-container" style={{ height: '200px'}}>

                    {/* First Row Headers */}
                    <div className="col-xs-4 col-headers-mobile" > </div>
                    <div className="col-xs-4 col-headers-mobile  text-align-mid" > QTD </div>
                    <div className="col-xs-4 col-headers-mobile text-align-mid" >  Weekly  </div>

                    <div className="mobile-divider-details col-xs-12"></div>


                    {/* Actuals */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[0].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType: this.props.valueType, value: this.props.detailsData.qtd[0].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{this.props.detailsData.week[0].value}</p></div>

                    {/* Units */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[1].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[1].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{this.props.detailsData.week[1].value}</p></div>
                    
                    {/* QRF */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[2].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[2].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{this.props.detailsData.week[3].value}</p></div>
                    
                    {/* QRF Diff */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[3].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[3].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{this.props.detailsData.week[3].value}</p></div>
                    
                    {/* Vs QRF */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[4].header}</p></div>
                    <div className={`col-xs-4 text-align-mid ${vsQRFcolor}`}><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[4].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid green-details"><p>{this.props.detailsData.week[4].value}</p></div>
                    
                    {/* Q/Q */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[5].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[5].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p> - </p></div>

                    {/* Y/Y */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.qtd[6].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[6].value}, 'value')}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p> - </p></div>

                    {/* W/W */}
                    <div className="col-xs-4 content-col-left" ><p>{this.props.detailsData.week[5].header}</p></div>
                    <div className="col-xs-4 text-align-mid" ><p> - </p></div>
                    <div className="col-xs-4 text-align-mid" ><p>{this.props.detailsData.week[5].value}</p></div>


                </div>
            </div>
        )
    }
}

export default MobileViewDetails