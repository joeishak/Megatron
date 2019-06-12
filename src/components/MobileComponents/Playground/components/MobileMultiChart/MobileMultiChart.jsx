import React, { Component } from 'react';
import KendoMultiChart from '../../../../KendoMultiChart/KendoMultiChart';
import styles from './MobileMultiChart.css';

class MobileMultiChart extends Component {
    render () {

        const bottomHeight = this.props.bottomContainerHeight - 100;


        return (
            <div className="mobile-multichart-container" style={{height: `${bottomHeight}px`}}>
                <KendoMultiChart color='white' deviceType='mobileTablet' chartHeight={bottomHeight}></KendoMultiChart>
            </div>
        )
    }
}

export default MobileMultiChart