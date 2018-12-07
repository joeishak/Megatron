import React, { Component } from 'react';
import styles from './PrimaryContent.css';
import PrimarySquare from './PrimarySquare.jsx'
import classNames from 'classnames';
import {
    PRIMARY, SECONDARY, MOBILE, TABLET, LAPTOP
} from  '../../Constants/consts.js';
import * as utils from '../../utilities';
class PrimaryContentList extends Component {

    componentDidUpdate(prevProps){
    }
    shouldComponentUpdate(nextProps){
        if(this.props.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        }
         if(this.props.data !== nextProps.data){
            return true;
        }
     if(this.props.activeCard !== nextProps.activeCard){
            return true;
        }
        if(this.props.deviceType !== nextProps.deviceType ){
            return true;
        }
     if (this.props.mobilePrimaryIsActive !== nextProps.mobilePrimaryIsActive){
            return true;
        }
        return false;
    }
    render(){
        const isMobile = utils.includes(this.props.deviceType, 'mobile') ? true : false;
        const isLaptop = utils.includes(this.props.deviceType, 'laptop') ? true : false;
        const isTablet = utils.includes(this.props.deviceType, 'tablet') ? true : false;
        const isVisible = (this.props.mobilePrimaryIsActive === true) ? true: false;


        const responsivePrimaryRow = classNames({
            "row primaryRow": true,
            mobilePrimaryRow: isMobile || isTablet,
            tabletPrimaryRow: isTablet,
            laptopPrimaryRow: isLaptop
        });
        return(
            <div className={responsivePrimaryRow}>

            {(isLaptop === false && isVisible === true) || isLaptop === true ?
             this.props.data.map(item=>{
                let isActive = parseInt(this.props.activeCard) === item.index ? true : false;
              return (
                  <PrimarySquare
                    window={this.props.window}
                    key={item.index}
                    deviceType={this.props.deviceType}
                    onCommentIconClick={(e,type,index) =>{this.props.onCommentIconClick(e,type,index)}}
                    toggleCommentary={this.props.toggleCommentary}
                    enableChart={this.props.enableChart1Arrow}
                    selectedCard={(e,index) =>{this.props.selectedCard(e,index)}}
                    activeCard={isActive}
                    item={item}>  </PrimarySquare>
            )
            }) : null
        }
            </div>
        )
    }
}

export default (PrimaryContentList)
