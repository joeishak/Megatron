import React, { Component } from "react";
import ReactDOM from "react-dom";
import commentIconOn from "../../assets/images/comments-on.svg";
import commentIconOff from "../../assets/images/comments-off.svg";
import KendoBulletChart from "../KendoBullet/KendoBullet";
import styles from "./SecondaryContent.css";
import * as utils from "../../utilities.js";
import classNames from "classnames";
import { connect } from "react-redux";
import * as actions from "actions";
import { DIMENSIONS } from "../../Constants/consts";
import Loading from '../../Views/Loading/Loading'
class SecondarySquares extends Component {
  // Need to Refactor
  
  getColor(value, target, type, header) {
    let retColor = "";
    if (type === "financial") {
      if (value >= target) {
        retColor = "selectedCardHeaderGreen";
      } else {
        retColor = "selectedCardHeaderRed";
      }
    } else if (type === "journey" && header === false) {
      if (value >= target) {
        retColor = "journeyBoxAlert";
      } else {
        retColor = "journeyBoxAlert";
      }
    } else if (type === "journey" && header !== false) {
      if (value >= target) {
        retColor = "journeyHeaderAlertGreen";
      } else {
        retColor = "journeyHeaderAlert";
      }
    } else if (type === "donut") {
      if (value < target) {
        retColor = "#FF0000";
      } else {
        retColor = "#0DB16E";
      }
    }

    return retColor;
  }
 shouldComponentUpdate(nextProps){
  
   if(this.props.comments.isLoading !== nextProps.comments.isLoading){

     return true
   }

  //  if(this.props.item.value === nextProps.item.value){
  //   return false;
  // }
   return true;
 }
  getTitlePill(kpi) {
    switch (kpi) {
      case 34:
        return <span style={{'margin-left': '2px', marginBottom: '2px', fontSize: '10px !important'}} className="badge badge-light">Reseller</span>;
      case 35:
        return <span style={{'margin-left': '2px', marginBottom: '2px'}} className="badge badge-light">E&R</span>
    }
  }

  
  getLaptopContent() {
    // const isMobile = (this.props.deviceType.includes('mobile') ? true : false);
    const isLaptop = utils.includes(this.props.deviceType, 'laptop') ? true : false;
    // const isTablet = (this.props.deviceType.includes('tablet') ? true : false);

    const formattedValue = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.value },
      "value"
    );
    const formattedTarget = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.targetFQ },
      "value"
    );
    const formattedQRF = utils.formatMetric(
      {
        valueType: this.props.item.valueType,
        value:
          this.props.item.vsQrf
      },
      "qrf"
    );

    const secondaryBoxHover = classNames({ journeyBoxHover: isLaptop });
    const secondaryBox = classNames({ journeyBox: isLaptop });
    const secondaryBoxHeader = classNames({
      "journeyHeader k-float-left": isLaptop
    });
    const commentsIcon = classNames({
      "k-float-right cardCommentIcon": isLaptop
    });
    const secondaryBoxContent = classNames({ journeyContent: isLaptop });
    const seconaryBoxContentAmount = classNames({ journeysAmount: isLaptop });
    const boxContentTarget = classNames({ secondaryTarget: isLaptop });

    return (
      (this.props.comments.isLoading === true)? null: 
      <div className={secondaryBoxHover} key={this.props.item.index}>
        <div
          className={`${secondaryBox}  ${
            this.props.activeJourneyCard === true
              ? this.getColor(
                this.props.item.value,
                this.props.item.target,
                "journey",
                false
              )
              : ""
            }`}
          onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}
        >
          <div
            className={`${secondaryBoxHeader} `}
          >
            {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
          </div>
          {/* Image Icon For Comments */}
          {this.props.toggleCommentary ? (
            <div className={commentsIcon}>
              <img
                alt=""
                style={{height: '17px'}}
                src={
                  this.props.comments.comments[this.props.item.index].length === 0 ?  commentIconOff : commentIconOn
                }
                onClick={e =>
                  this.props.onCommentIconClick(
                    e,
                    "secondary",
                    this.props.item.index
                  )
                }
              />
            </div>
          ) : null}
          <div className={secondaryBoxContent}>
            <div>{this.props.item.header}{this.getTitlePill(this.props.item.index)}</div>
            {/* {console.log(this.props.item)} */}
            <div className={`  ${seconaryBoxContentAmount} ${utils.getLabelColor(this.props.item.value, this.props.item.target, this.props.item.index)}`} 
>
              {formattedValue}
            </div>
            <div className="vs-qrf-desktop">( {formattedQRF} vs QRF)</div>
            <div>
              <KendoBulletChart
                width="90%"
                cardIndex={this.props.item.index}
                values={[this.props.item.value, this.props.item.target, this.props.item.targetFQ]}
                valueType={this.props.item.valueType}
                fqTarget={this.props.item.targetFQ}
                color="white"
                key={this.props.item.index}
              />
            </div>
            <div className={boxContentTarget}>
              Target: {formattedTarget}
            </div>
          </div>
        </div>
      </div >
    );
  }
  getTabletContent() {
    // const isMobile = (this.props.deviceType.includes('mobile') ? true : false);
    const isTablet = utils.includes(this.props.deviceType, 'tablet') ? true : false;
    // const isTablet = (this.props.deviceType.includes('tablet') ? true : false);

    const formattedValue = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.value },
      "value"
    );
    const formattedTarget = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.targetFQ },
      "value"
    );
    const formattedQRF = utils.formatMetric(
      {
        valueType: this.props.item.valueType,
        value:
          this.props.item.vsQrf
      },
      "qrf"
    );

    const secondaryBoxHover = classNames({ journeyBoxHover: isTablet });
    const secondaryBox = classNames({ tabletBox: isTablet });
    const secondaryBoxHeader = classNames({
      "journeyHeader k-float-left": isTablet
    });
    const commentsIcon = classNames({
      "k-float-right cardCommentIcon": isTablet
    });
    const secondaryBoxContent = classNames({ journeyContent: isTablet });
    const seconaryBoxContentAmount = classNames({ journeysAmount: isTablet });
    const boxContentTarget = classNames({ secondaryTarget: isTablet });

    return (
      (this.props.comments.isLoading === true)? null: 
      <div className={secondaryBoxHover} key={this.props.item.index}>
        <div
          className={`${secondaryBox}  ${
            this.props.activeJourneyCard === true
              ? this.getColor(
                this.props.item.value,
                this.props.item.target,
                "journey",
                false
              )
              : ""
            }`}
          onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}
        >
          <div
            className={`${secondaryBoxHeader} `}
          >
            {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
          </div>
          {/* Image Icon For Comments */}
          {this.props.toggleCommentary ? (
            <div className={commentsIcon}>
              <img
                alt=""
                src={
                  this.props.comments.comments[this.props.item.index].length === 0 ?  commentIconOff : commentIconOn
                }
                onClick={e =>
                  this.props.onCommentIconClick(
                    e,
                    "secondary",
                    this.props.item.index
                  )
                }
              />
            </div>
          ) : null}
          <div className={secondaryBoxContent}>
            <div>{this.props.item.header}{this.getTitlePill(this.props.item.index)}</div>
            {/* {console.log(this.props.item)} */}
            <div className={`  ${seconaryBoxContentAmount} ${utils.getLabelColor(this.props.item.value, this.props.item.target, this.props.item.index)}`} 
>
              {formattedValue}
            </div>
            <div className="vs-qrf-desktop">( {formattedQRF} vs QRF)</div>
            <div>
              <KendoBulletChart
                width={200}
                cardIndex={this.props.item.index}
                values={[this.props.item.value, this.props.item.target, this.props.item.targetFQ]}
                valueType={this.props.item.valueType}
                fqTarget={this.props.item.targetFQ}
                color="white"
                key={this.props.item.index}
              />
            </div>
            <div className={boxContentTarget}>
              Target: {formattedTarget}
            </div>
          </div>
        </div>
      </div >
    );
  }
  getMobileContent() {
    const isTablet = utils.includes(this.props.deviceType, 'tablet') ? true : false;
    const isMobile = utils.includes(this.props.deviceType, 'mobile') ? true : false;

    const formattedValue = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.value },
      "value"
    );
    const formattedTarget = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.target },
      "target"
    );

    const secondaryBoxHover = classNames({
      mobileSecondaryHover: isTablet || isMobile
    });
    const secondaryBox = classNames({
      mobileSecondaryBox: isTablet || isMobile
    });
    const secondaryBoxHeader = classNames({
      mobileSecondaryHeader: isTablet || isMobile
    });
    const commentsIcon = classNames({
      mobileCommentsIcon: isTablet || isMobile
    });
    const secondaryBoxContent = classNames({
      mobileSecondaryContent: isTablet || isMobile
    });
    const seconaryBoxContentAmount = classNames({
      mobileSecondaryBoxContentAmount: isTablet || isMobile
    });
    const boxContentTarget = classNames({
      mobileSecondaryContentTarget: isTablet || isMobile
    });
    const boxContentAmountGreen = classNames({
      mobileSecondaryContanetAmountGreen: isTablet || isMobile
    });
    const boxBullet = classNames({
      mobileSecondaryBullet: isTablet || isMobile
    });
    const secondaryBoxHeaderTitle = classNames({
      secondaryBoxHeaderTitle: isTablet || isMobile
    });

    return (
      <div className={secondaryBoxHover} key={this.props.item.index} onClick={(e) =>   this.props.onSecondaryCardClicked(e,this.props.item.index)}>
        <div
          className={`${secondaryBox}  ${
            this.props.activeJourneyCard === true
              ? 'journeyBoxAlert'
              : ""
            }`}
          onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}
        >
          <div
            className={`${secondaryBoxHeader} `} 
          >
            {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
          </div>
          {/* Image Icon For Comments */}
          {this.props.toggleCommentary ? (
            <div className={commentsIcon}>
              <img
                alt=""
                src={
                   this.props.comments.comments[this.props.item.index].length> 0 ? commentIconOn : commentIconOff
                }
                onClick={e =>
                  this.props.onCommentIconClick(
                    e,
                    "secondary",
                    this.props.item.index
                  )
                }
              />
            </div>
          ) : null}
          <div className={secondaryBoxContent}>
            <div className={secondaryBoxHeaderTitle}>
              {this.props.item.header}
            </div>
            <div
              className={`  ${seconaryBoxContentAmount} ${utils.getLabelColor(this.props.item.value, this.props.item.target, this.props.item.index)}`}
            >
              {formattedValue} <span className={`QRF-Percent ` + (this.props.item.value <= 0 ? ` ${this.getColor(this.props.item.index, 'red')}` : ` ${this.getColor(this.props.item.index, 'green')}`)}>(
              {utils.formatMetric({ valueType: 'percent', value: this.props.item.details.stats[0].value }, 'value')})</span>
            </div>
            {/* {console.log(this.props.statsDetails)} */}
            <div className={boxBullet}>
              <KendoBulletChart
                isMobileOrTablet={utils.includes(utils.getDeviceType(this.props.window), 'mobile') || utils.includes(utils.getDeviceType(this.props.window), 'tablet')}
                width={175}
                cardIndex={"hello"}
                values={[this.props.item.value, this.props.item.target, this.props.item.targetFQ]}
                fqTarget={this.props.item.targetFQ}
                valueType={this.props.item.valueType}
                color="white"
                targetColor="white"
                key={this.props.item.index}
              />
            </div>
            <div className={boxContentTarget}>Target: {formattedTarget}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const isMobile = utils.includes(this.props.deviceType, 'mobile') ? true : false;
    const isLaptop = utils.includes(this.props.deviceType, 'laptop') ? true : false;
    const isTablet = utils.includes(this.props.deviceType, 'tablet') ? true : false;

    return (
      <div>
        <div>{isMobile ? this.getMobileContent() : null}</div>
        <div>{isTablet ? this.getMobileContent() : null}</div>
        <div>{isLaptop ? this.getLaptopContent() : null}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      comments: state.commentsPackage,
      activeSecondary: state.activeCards.secondary
  }
}
export default connect(mapStateToProps, actions)(SecondarySquares);
