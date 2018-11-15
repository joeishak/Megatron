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
   
                            let formattedValue = utils.formatMetric({value: item.value, valueType: item.valueType },'value');
                            let formattedTarget = utils.formatMetric({value: item.target, valueType: item.valueType },'target');
                
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