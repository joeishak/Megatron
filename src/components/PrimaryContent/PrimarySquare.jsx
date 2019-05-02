import React, { Component } from "react";
import KendoBulletChart from "../KendoBullet/KendoBullet";
import commentIconOn from "../../assets/images/comments-on.svg";
import commentIconOff from "../../assets/images/comments-off.svg";
import styles from "./PrimaryContent.css";
import classNames from "classnames";
import * as utils from "../../utilities.js";

class PrimarySquare extends Component {
  constructor(props) {
    super(props);
  }
  // Need to Refactor
  getColor(value, target, type, header) {
    // console.log('value', value);
    let retColor = "";
    console.log('Renew Primary Color',this.props.item.index);
    if(this.props.item.index !==5){
      if (type === "financial") {
        if (target === 0) {
          retColor = 'selectedCardHeaderNeutral'
        } else if (value >= target) {
          retColor = "selectedCardHeaderGreen";
        } else {
          retColor = "selectedCardHeaderRed";
        }
      } else if (type === "journey" && header === false) {
        if (value >= target) {
          retColor = "journeyBoxAlertGreen";
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
    } else{
      if (type === "financial") {
        if (target === 0) {
          retColor = 'selectedCardHeaderNeutral'
        } else if (value <= target) {
          retColor = "selectedCardHeaderGreen";
        } else {
          retColor = "selectedCardHeaderRed";
        }
      } else if (type === "journey" && header === false) {
        if (value <= target) {
          retColor = "journeyBoxAlertGreen";
        } else {
          retColor = "journeyBoxAlert";
        }
      } else if (type === "journey" && header !== false) {
        if (value <= target) {
          retColor = "journeyHeaderAlertGreen";
        } else {
          retColor = "journeyHeaderAlert";
        }
      } else if (type === "donut") {
        if (value > target) {
          retColor = "#FF0000";
        } else {
          retColor = "#0DB16E";
        }
      }
    }
   

    return retColor;
  }


  render() {
    const isMobile = utils.includes(this.props.deviceType, 'mobile') ? true : false;
    const isLaptop = utils.includes(this.props.deviceType, 'laptop') ? true : false;
    const isTablet = utils.includes(this.props.deviceType, 'tablet') ? true : false;
    const isMobileOrTablet = utils.includes(utils.getDeviceType(this.props.window), 'mobile') || utils.includes(utils.getDeviceType(this.props.window), 'tablet');

    // {utils.getDeviceType(this.props.window)}
    const formattedValue = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.value },
      "value"
    );
    const formattedTarget = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.targetFQ },
      "target"
    );
    const formattedQRF = utils.formatMetric(
      {
        valueType: this.props.item.valueType,
        value: this.props.item.vsqrf
      },
      "qrf"
    ) || 0;
    const alignCenter = classNames({
      center: true
    });
    const responsiveSquareSize = classNames({
      "col-sm-12 col-md-2 col-lg-2 ": isLaptop /* && (this.props.activeCard !== 3) */ ? true: false,
      // " buyPrimaryCard": isLaptop && (this.props.activeCard === 3) ? true: false,
      "col-xs-12 ": isMobile || isTablet ? true : false
    });
    const responsiveSumChartSquare = classNames({
      sumChartSquare: true,
      mobileSumChartSquare: isMobile,
      tabletSumChartSquare: isTablet,
      laptopSumChartSquare: isLaptop
    });
    const responsiveSelectedCard = classNames({
      selectedCard: true,
      mobileSelectedCard: isMobile || isTablet,
      tabletSelectedCard: isTablet,
      laptopSelectedCard: isLaptop
    });
    const responsiveCommentIcon = classNames({
      finCommentIcon: true,
      mobileCommentIcon: isMobile || isTablet,
      tabletCommentIcon: isTablet || isMobile,
      laptopCommentIcon: isLaptop
    });
    const responsiveEmptyComment = classNames({
      emptyIcon: true
    });
    const responsiveSumChartHeader = classNames({
      sumChartHeader: true,
      mobileSumChartHeader: isMobile || isTablet,
      tabletSumChartHeader: isTablet,
      laptopSumChartHeader: isLaptop
    });
    const responsiveSumChartHeaderText = classNames({
      sumChartHeaderText: true,
      mobileSumChartHeaderText: isMobile || isTablet,
      tabletSumChartHeaderText: isTablet,
      laptopSumChartHeaderText: isLaptop
    });
    const responsiveSelectedCardText = classNames({
      selectedCardText: true,
      mobileSelectedCardText: isMobile || isTablet,
      tabletSelectedCardText: isTablet,
      laptopSelectedCardText: isLaptop
    });
    const responsiveSecondaryHeader = classNames({
      secondaryHeader: true,
      mobilePrimarySecondaryHeader: isMobile || isTablet,
      tabletPrimarySecondaryHeader: isTablet,
      laptopPrimarySecondaryHeader: isLaptop
    });
    const responsiveValueText = classNames({
      valueText: true,
      mobileValueText: isMobile || isTablet,
      tabletValueText: isTablet,
      laptopValuesText: isLaptop
    });
    const responsiveTarget = classNames({
      formattedTarget: true,
      mobileTargetText: isMobile || isTablet,
      tabletTargetText: isTablet,
      laptopTargetText: isLaptop
    });
    const responsiveBullet = classNames({
      bullet: true,
      mobileBullet: isMobile || isTablet,
      tabletBullet: isTablet,
      laptopBullet: isLaptop
    });
    return (
      <div>
        {/* Desktop View */}
        <div
          className={responsiveSquareSize  }
          onClick={this.props.enableChart}
          key={this.props.item.index}
        >
          {/* Card */}
          <div
            className={`${responsiveSumChartSquare}  ${
              this.props.item.css[1]
              } ${this.props.activeCard ? responsiveSelectedCard : ""}`}
            onClick={e => this.props.selectedCard(e, this.props.item.index)}
          >
            <div className={`sumChartContent  ${this.props.item.css[1]}`}>

              {isMobile || isTablet ? null : (
                <div
                  className={`${responsiveSumChartHeader} ${
                    this.props.activeCard
                      ? this.getColor(
                        this.props.item.value,
                        this.props.item.target,
                        "financial"
                      )
                      : ""
                    }`}
                >
                  <p
                    className={`${responsiveSumChartHeaderText} ${
                      this.props.activeCard ? responsiveSelectedCardText : ""
                      }`}
                  >
                    {this.props.item.category}
                  </p>
                </div>
              )}
              {/* Header */}
              {isMobile || isTablet ? (
                <div className='mobilePrimContent'>
                  <span className={"secondaryCategory"}>
                    {this.props.item.category}
                  </span>
                  {/* Formatted Value $###.## (M / %)*/}
                  <span
                    className={`${responsiveValueText}  ${
                      utils.getLabelColorPrimary(this.props.item.value, this.props.item.target,(isMobile|| isTablet), this.props.item.index)
                      // (this.props.item.value >= this.props.item.target) ? "selectedCardFontColorGreen": "selectedCardFontColorRed"
                      }`}
                  >
                    {formattedValue}
                  </span>
                  <span className={responsiveSecondaryHeader}>
                    {this.props.item.header}
                  </span>
                  {/* Bullet Chart */}
                  <span className={responsiveBullet}>
                  {(this.props.item.index === 5)?  <KendoBulletChart
                      isMobileOrTablet={isMobileOrTablet}
                      width={160}
                      values={[this.props.item.target, this.props.item.value, this.props.item.targetFQ]}
                      valueType={this.props.item.valueType}
                      color="white"
                      fqTarget={this.props.item.targetFQ}
                      key={this.props.item.index}
                    /> :
                    <KendoBulletChart
                    isMobileOrTablet={isMobileOrTablet}
                    width={160}
                    values={[this.props.item.value, this.props.item.target, this.props.item.targetFQ]}
                    valueType={this.props.item.valueType}
                    color="white"
                    fqTarget={this.props.item.targetFQ}
                    key={this.props.item.index}
                  />}
                   
                  </span>
                </div>
              ) : (
                  <div className={alignCenter}>
                    <div className={responsiveSecondaryHeader}>
                      {this.props.item.header}
                    </div>
                    <div
                      className={`${responsiveValueText}  ${
                        (this.props.activeCard === 5) ? 'selectedCardFontColorGreen' : utils.getLabelColorPrimary(this.props.item.value, this.props.item.target,(isMobile|| isTablet),this.props.item.index)
                        // this.props.item.value >= this.props.item.target
                        //   ? "selectedCardFontColorGreen"
                        //   : " selectedCardFontColorRed"
                        } `}
                    >
                      {formattedValue}<br />

                    </div>
                    ( {(formattedQRF)} vs QRF)
                    <div>
                    {(this.props.item.index === 5)?  <KendoBulletChart
                      isMobileOrTablet={isMobileOrTablet}
                      width={160}
                      values={[this.props.item.target, this.props.item.value, this.props.item.targetFQ]}
                      valueType={this.props.item.valueType}
                      color="black"
                      fqTarget={this.props.item.targetFQ}
                      key={this.props.item.index}
                    /> :
                    <KendoBulletChart
                    isMobileOrTablet={isMobileOrTablet}
                    width={160}
                    values={[this.props.item.value, this.props.item.target, this.props.item.targetFQ]}
                    valueType={this.props.item.valueType}
                    color="black"
                    fqTarget={this.props.item.targetFQ}
                    key={this.props.item.index}
                  />}
                    </div>
                    {/* Formatted Target $###.## (M / %)*/}
                    <div className={responsiveTarget}>
                      Target: {formattedTarget}
                    </div>
                  </div>
                )}
              {isMobile || isTablet ? null : (
                <div
                  className={` ${this.props.activeCard ? "arrow_box" : ""}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default (PrimarySquare)

export default PrimarySquare;
