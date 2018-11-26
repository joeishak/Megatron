import React, { Component } from 'react';
import KendoMultiChart from '../../../../KendoMultiChart/KendoMultiChart';
import styles from './MobileMultiChart.css';

class MobileMultiChart extends Component {
    render () {
        return (
            <div className="mobile-multichart-container">
                <KendoMultiChart color='white' deviceType='mobileTablet' chartHeight={360}></KendoMultiChart>
            </div>
        )
    }
}

export default MobileMultiChart