import React, { Component } from 'react';
import styles from './HorizontalSlider.css';
import commentIconOn from '../../../assets/images/comments-on.svg';
import commentIconOff from '../../../assets/images/comments-off.svg';
import * as utils from '../../../utilities.js';
import KendoBulletChart from '../../../components/KendoBullet/KendoBullet';
import SliderSqare from './components/SliderSquare.jsx';

class HorizontalSlider extends Component {

    // onCardClicked = (e, index) => {
    //     console.log('here');
    //     console.log(e, index);
    // }


    render () {
       
        return (
            <div className="horizontalSliderContainer">
                <div className="scrolling-wrapper">
            
                        {this.props.data.map(item => {
                            let isActive = parseInt(this.props.activeJourneyCard) === item.index ? true : false;
                            const formattedValue = utils.formatMetric({valueType :this.props.item.valueType, value: this.props.item.value}, 'value');
                            const formattedTarget = utils.formatMetric({valueType :this.props.item.valueType, value: this.props.item.target}, 'target');
                            if(this.props.activePrimary === item.category) {
                                return <div className="card" key={item.index}>
                                <SliderSqare 
                                index={item.index}
                                formattedValue={formattedValue}
                                valueType={item.valueType}
                                formattedTarget={formattedTarget}
                                header={item.header}
                                value={item.value}
                                target={item.target}
                                isActive={isActive}
                                key={item.index}
                                onCardClicked={this.props.onCardClicked}
                                />
                                </div>
                            } else {
                                return null;
                            }

                        })}
               
                </div>
            </div>
        )
    }
}

export default HorizontalSlider;