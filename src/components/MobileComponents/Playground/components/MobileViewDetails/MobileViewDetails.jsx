import React, { Component } from 'react';
import styles from './MobileViewDetails.css';
import * as utils from '../../../../../utilities.js';

class MobileViewDetails extends Component {


    // shouldComponentUpdate(nextProps) {
    //     if (this.props.detailsData !== nextProps.detailsData) {
    //         return true;
    //     }
    //     return false;
    // }

    formatData(detailsData) {
        const headers = ['Actuals', 'Units', 'QRF', 'QRF Diff', 'Vs Qrf', 'Q/Q', 'Y/Y', 'W/W'];
        return headers.map(ele => {
            return new Object({
                header: ele,
                qtdValue: this.findValue(detailsData.qtd, ele),
                weekValue: this.findValue(detailsData.week, ele),
                valueType: this.findValueType(ele)
            })
        })      
    }

    findValueType(toFind) {
        switch(toFind) {
            case 'Actuals':
                return this.props.valueType;
            case 'Units':
                return 'units';
            case 'QRF':
                return  this.props.valueType;
            case 'QRF Diff':
                return  this.props.valueType;
            case 'Vs Qrf':
                return 'percent'
            case 'Q/Q':
                return 'percent';
            case 'Y/Y':
               return 'percent';
            case 'W/W':
              return 'percent';
            default:
                return 'units';
        }
    }

    findValue(dataArr, toFind) {
        let found = false;
        let retValue = 0;
        for (let i = 0; i < dataArr.length; i++) {
           if (toFind === dataArr[i].header) {
               found = true;
               retValue = dataArr[i].value
           }
        }
        if (!found) { retValue = 0.01; }

        return retValue;
    }

    render () {

        const detailsDataTwo = this.formatData(this.props.detailsData);
        

        const vsQRFcolor = utils.formatMetric({valueType:  this.props.valueType, value: this.props.detailsData.qtd[4].value}, 'value') > 0 ? 'green-details' : 'red-details';

        return (
            <div>
                <div className="container-fluid details-mobile-container" style={{ height: '200px'}}>

                    {/* First Row Headers */}
                    <div className="col-xs-4 col-headers-mobile" > </div>
                    <div className="col-xs-4 col-headers-mobile text-align-mid" > QTD </div>
                    <div className="col-xs-4 col-headers-mobile text-align-mid" >  Weekly  </div>

                    {/* <div className="mobile-divider-details col-xs-12"></div> */}

                    {detailsDataTwo.map((ele, index) => {
                        return (
                            <div key={ele.header}>
                                <div className="col-xs-4 text-align-mid" ><p>{ele.header}</p></div>
                                <div className={`col-xs-4 text-align-mid ${(ele.header === 'Vs Qrf') ? vsQRFcolor: ''}`} >
                                           <p>{utils.formatMetric({valueType: ele.valueType, value: ((this.props.nullifyQrf && index>=2 && index<=4)? 0: ele.qtdValue)}, 'value')}</p></div>
                                <div className={`col-xs-4 text-align-mid ${(ele.header === 'Vs Qrf') ? vsQRFcolor: ''}`} ><p>{utils.formatMetric({valueType: ele.valueType, value: ((this.props.nullifyQrf && index>=2 && index<=4)? 0: ele.weekValue)}, 'value')}</p></div>
                            </div>
                        )
                    })}



                </div>
            </div>
        )
    }
}

export default MobileViewDetails
