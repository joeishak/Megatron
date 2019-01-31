import React from 'react'
import styles from './SliderSquare.css';
import KendoBullet from '../../../KendoBullet/KendoBullet.js';

const SliderSquare = (props) => {

    // types: Header, Value, Box
    let getColor = (value, target, type) => {
        let returnColor = '';
        switch(type) {
            case 'box':
                //code
                if(value > target) {
                    returnColor = 'sliderBoxGreen';
                } else {
                    returnColor = 'sliderBoxRed';
                }
                break;
            case 'value':
                //code
                if (value > target) {
                    returnColor = 'sliderValueGreen';
                } else {
                    returnColor = 'sliderValueRed';
                }
                break;
            case 'header':
                //code
                if(value > target) {
                    returnColor = 'sliderHeaderTextGreen';
                } else {
                    returnColor = 'sliderHeaderTextRed'
                }
                break;
        }
        return returnColor
    }

    return (
        
        <div className={`sliderSquareContainer slider_box ${props.isActive === true ? getColor(props.value, props.target, 'box'):''}`} onClick={(e) => props.onCardClicked(e, props.index)}
        >
            <div className={`sliderHeader ${getColor(props.value, props.target, 'header')}`}>{props.header}</div>
            <div className={`sliderValue ${getColor(props.value, props.target, 'value')} `}>{props.formattedValue}</div>
            <div className="bulletContainerSlider">
                <KendoBullet 
                key={props.index}
                 width={175} 
                 values={[props.value, props.target]} 
                 color="white" valueType={props.valueType}></KendoBullet>
            </div>
            <div className="sliderTarget">TARGET: {props.formattedTarget}</div>
        </div>
      
    )
}

export default SliderSquare