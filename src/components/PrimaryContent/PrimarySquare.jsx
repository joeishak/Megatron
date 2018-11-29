import React, { Component } from "react";
import KendoBulletChart from "../KendoBullet/KendoBullet";
import { CSSTransitionGroup } from "react-transition-group";
import commentIconOn from "../../assets/images/comments-on.svg";
import commentIconOff from "../../assets/images/comments-off.svg";
import styles from "./PrimaryContent.css";
import classNames from "classnames";
import * as utils from "../../utilities.js";

class PrimarySquare extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return true;
  }
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

    return retColor;
  }

  render() {
    const isMobile = this.props.deviceType.includes("mobile") ? true : false;
    const isLaptop = this.props.deviceType.includes("laptop") ? true : false;
    const isTablet = this.props.deviceType.includes("tablet") ? true : false;
    const isMobileOrTablet = 
      utils.getDeviceType(this.props.window).includes("mobile") ||
      utils.getDeviceType(this.props.window).includes("tablet");

    // {utils.getDeviceType(this.props.window)}
    const formattedValue = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.value },
      "value"
    );
    const formattedTarget = utils.formatMetric(
      { valueType: this.props.item.valueType, value: this.props.item.target },
      "target"
    );
    const formattedQRF = utils.formatMetric(
      {
        valueType: this.props.item.valueType,
        value:
          (this.props.item.value - this.props.item.target) /
          this.props.item.target
      },
      "qrf"
    );
    const alignCenter = classNames({
      center: true
    });
    const responsiveSquareSize = classNames({
      "col-sm-12 col-md-2 col-lg-2 ": isLaptop,
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
          className={responsiveSquareSize}
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

              {isLaptop && this.props.toggleCommentary ? (
                <span className={` k-float-right   ${responsiveCommentIcon}`}>
                  <img
                    alt=""
                    src={
                      this.props.item.comments.length !== 0
                        ? commentIconOn
                        : commentIconOff
                    }
                    onClick={e =>
                      this.props.onCommentIconClick(
                        e,
                        "primary",
                        this.props.item.index
                      )
                    }
                  />
                </span>
              ) : (
                <div className="emptyIcon" />
              )}
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
                      this.props.item.value >= this.props.item.target
                        ? "  selectedCardFontColorGreen"
                        : " selectedCardFontColorRed"
                    }`}
                  >
                    {formattedValue}
                  </span>
                  <span className={responsiveSecondaryHeader}>
                    {this.props.item.header}
                  </span>
                  {/* Bullet Chart */}
                  <span className={responsiveBullet}>
                    <KendoBulletChart
                      isMobileOrTablet={isMobileOrTablet}
                      width={200}
                      values={[this.props.item.value, this.props.item.target]}
                      valueType={this.props.item.valueType}
                      color="white"
                      key={this.props.item.index}
                    />
                  </span>
                </div>
              ) : (
                <div className={alignCenter}>
                  <div className={responsiveSecondaryHeader}>
                    {this.props.item.header}
                  </div>
                  <div
                    className={`${responsiveValueText}  ${
                      this.props.item.value >= this.props.item.target
                        ? "selectedCardFontColorGreen"
                        : " selectedCardFontColorRed"
                    } `}
                  >
                    {formattedValue}
                  </div>
                  <div>
                    <KendoBulletChart
                      values={[this.props.item.value, this.props.item.target]}
                      valueType={this.props.item.valueType}
                      color="#3c3c3c"
                      targetColor="black"
                      key={this.props.item.index}
                    />
                  </div>
                  {/* Formatted Target $###.## (M / %)*/}
                  <div className={responsiveTarget}>
                    {formattedTarget} ( {formattedQRF} vs QRF)
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
