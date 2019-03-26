import React, { Component } from "react";
import ReactDOM from "react-dom";
import SecondarySquares from "./SecondarySquares";
import Playground from "../MobileComponents/Playground/Playground";
import HorizontalSlider from "../MobileComponents/HorizontalSlider/HorizontalSlider.jsx";
import 'hammerjs';
import closeBtn from '../../assets/images/close-btn.svg';
import MobileMultiChart from '../../components/MobileComponents/Playground/components/MobileMultiChart/MobileMultiChart.jsx';
import MobileViewDetails from '../../components/MobileComponents/Playground/components/MobileViewDetails/MobileViewDetails.jsx'
import _ from 'lodash';
import {
  PRIMARY,
  SECONDARY,
  MOBILE,
  TABLET,
  LAPTOP
} from "../../Constants/consts.js";

import * as utils from '../../utilities';
import MobileCommentBox from "../CommentPanel/MobileCommentBox";

const navBarHeight = 50;
const titleContainerHeight = 22;
const secondaryRowHeight = 90;
const containerPullBar = 25;

class SecondaryContentList extends Component {
  eventHandler = null;

  constructor(props) {
    super(props);

    this.state = {
      detailsClassState: '',
      clicked: false,
      isDragging: false,
      initialPos: this.props.window.height - this.calculateHeight(),
      onloadPos: this.props.window.height - this.calculateHeight(),
      sortedData: this.props.data,
      activeCard: undefined
    };
  }

  componentDidMount() {
    this.setState({ sortedData: this.props.data })

    ReactDOM.findDOMNode(this).addEventListener("mousemove", this.resizePanel);
    ReactDOM.findDOMNode(this).addEventListener("touchmove", this.resizePanel);
    ReactDOM.findDOMNode(this).addEventListener("mouseup", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("touchend", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("mouseleave", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("touchcancel", this.stopResize);
    this.setState({ activeCard: this.props.activeJourneyCard });


  }

  componentWillUnmount() {
    this.setState({
      isDragging: false,
      initialPos: this.props.window.height - this.calculateHeight()
    });
  }

  componentDidUpdate(prevProps) {
    let copy = Object.assign([], this.props.data);


    if (utils.includes(this.props.deviceType, 'mobile') ||
      utils.includes(this.props.deviceType, 'tablet')) {

      if (this.props.activeJourneyCard !== prevProps.activeJourneyCard) {

        // console.log([this.props.data[this.props.activeJourneyCard], ...this.state.sortedData.filter(item => item.index !== this.props.activeJourneyCard)])
        this.setState({ sortedData: [this.props.data[this.props.activeJourneyCard], ...this.state.sortedData.filter(item => item.index !== this.props.activeJourneyCard)] })

      }
    }


  }
  isTouchDevice() {
    return "ontouchstart" in document.documentElement;
  }

  calculateHeight = () => {
    let list = _.filter(this.props.data, item => { return item.category === this.props.activePrimary })
    let navHeight = 50;
    if (this.props.window.width > 1024 || this.props.window.width > 765) {
      navHeight = 80;
    }
    return navHeight + titleContainerHeight + secondaryRowHeight * list.length;
  };

  startResize = () => {
    this.setState({ isDragging: true });
  };

  stopResize = () => {
    if (this.state.isDragging) {
      this.setState({ isDragging: false });

      //if its going up stick to top
      if (this.state.initialPos > this.state.onloadPos) {
        //it's going up
        this.setState({
          initialPos: this.state.onloadPos + secondaryRowHeight * 3
        });
      } else {
        this.setState({ initialPos: this.state.onloadPos });
      }
      // else its going down stick to bottom
      this.forceUpdate();
    }
  };

  resizePanel = event => {
    if (this.state.isDragging) {
      if (this.isTouchDevice()) {
        // on Mobile
        const delta = this.props.window.height - event.touches[0].clientY;
        if (delta < this.state.onloadPos) {
          this.setState({ initialPos: this.state.onloadPos });
        } else {
          this.setState({ initialPos: delta });
        }
      } else {
        // on Desktop
        const delta = this.props.window.height - event.clientY;
        if (delta < this.state.onloadPos) {
          this.setState({ initialPos: this.state.onloadPos });
        } else {
          this.setState({ initialPos: delta });
        }
      }
      this.forceUpdate();
    }
  };

  updateView = e => {
    this.setState({ initialPos: this.state.onloadPos });
    this.props.updateMobileView(PRIMARY, true);
    this.props.updateMobileView(SECONDARY, false);
  };

  onSecondaryCardClicked = (e) => {
    this.setState({ detailsClassState: 'slide-in-bottom' });
    this.setState({ clicked: true });
  }

  onDetailMenuClose = (e) => {
    this.setState({ detailsClassState: 'slide-out-bottom' });
    setTimeout(() => {
      this.setState({ clicked: false });
      this.setState({ detailsClassState: '' });
    }, 200);
    this.setState({ sortedData: this.props.data });
    this.props.onJourneyCardClicked(e, this.state.activeCard);

  }


  render() {
    let isMobileAndTablet =
      utils.includes(this.props.deviceType, 'mobile') ||
      utils.includes(this.props.deviceType, 'tablet');
    let navigationTitle =
      isMobileAndTablet === true &&
        this.props.mobileSecondaryIsActive === true ? (
          <div className="primaryDataCategoryContainer">
            <p
              className="primaryCateogryNav"
              onClick={e => this.updateView(e)}>{`<`}</p>
            <div className="primaryCategoryTitle" onClick={e => this.updateView(e)}>
              {this.props.primaryDataCategory}
            </div>
          </div>
        ) : null;

    let data = (isMobileAndTablet === true) ? this.state.sortedData : this.props.data;


    let numberOfSecondarySquares = 0;
    if (data !== undefined) {
      let filtered = data.filter((ele) => { return ele.category === this.props.activePrimary });
      numberOfSecondarySquares = filtered.length;
    }

    let secondaryContentTop = (this.props.mobileSecondaryIsActive === true &&
      isMobileAndTablet === true) || isMobileAndTablet === false
      ? data.map(item => {
        let isActive = this.props.activeJourneyCard === item.index
          ? true
          : false;
        if (this.props.activePrimary === item.category) {
          return (
            <SecondarySquares
              window={this.props.window}
              deviceType={this.props.deviceType}
              statsDetails={this.props.statsDetails}
              key={item.index}
              item={item}
              activeJourneyCard={isActive}
              onSecondaryCardClicked={e => this.onSecondaryCardClicked(e)}
              onJourneyCardClicked={(e, index) => {
                this.props.onJourneyCardClicked(e, index);
              }}
              toggleCommentary={this.props.toggleCommentary}
              onCommentIconClick={this.props.onCommentIconClick}
            />
          );
        } else return null;
      })
      : null;
    const renderStyleBottom = isMobileAndTablet
      ? {
        height: `${this.state.initialPos}px`,
        width: "100%",
        position: "fixed"
      }
      : { height: "100%" };
    const renderContainerStyle = isMobileAndTablet
      ? { height: `-${this.props.window.height - navBarHeight}px`, width: "100%" }
      : { height: "100%", marginTop: "30px", width: "20%" };

    const box4Style = { top: `-${(secondaryRowHeight * numberOfSecondarySquares) - 65}px` }

    const mobileBottom = isMobileAndTablet && this.props.mobileSecondaryIsActive && this.state.clicked ? (
      <div className={`box4 ${this.state.detailsClassState}`} style={box4Style}>

        <div className="row">
          <div className="close-btn">
            <img src={closeBtn} onClick={e => this.onDetailMenuClose(e)} />
          </div>

        </div>
        <div className="row four-squares">
          {this.props.statsDetails.map(item => {
            return (
              <div style={{ float: 'left', margin: '5px' }} key={Math.random()}>
                <div className={(item.value <= 0 ? 'red' : 'green') + ` stats-detail`}>
                  <b>{utils.formatMetric({ valueType: 'percent', value: item.value }, 'value')}</b>
                </div>
                <div className="stats-detail">
                  <b>{item.text}</b>
                </div>
              </div>
            );
          })}
        </div>
        {/*Mobile Multi Chart*/}
        <div className="row" style={{ paddingLeft: '9px' }}>
          <MobileMultiChart bottomContainerHeight={250}></MobileMultiChart>
        </div>
        {/* Bottom Section */}
        <div className="sliderContainer">
          <div className="scrolling-wrapper">
            <div className="slider-content">
              <div className="sliderSquareContainerInner slider_box_inner">
                <MobileViewDetails detailsData={this.props.data[this.props.activeJourneyCard].details.qtdw} valueType={this.props.data[this.props.activeJourneyCard].valueType}></MobileViewDetails>

              </div>
            </div>

            {/* <div className="slider-content">
              <div className="sliderSquareContainerInner slider_box_inner">
                <MobileViewDetails detailsData={this.props.data[this.props.activeJourneyCard].details.qtdw} valueType={this.props.data[this.props.activeJourneyCard].valueType}></MobileViewDetails>
              </div>
            </div> */}

          </div>

        </div>

        {/* Commnets */}
        <div style={{ paddingLeft: '9px', paddingRight: '9px' }}>
          <h6>Comments</h6>
          <MobileCommentBox comments={this.props.comments} commentsPackage={this.props.commentsPackage}></MobileCommentBox>
        </div>

      </div>
    ) : null;

    return (
      <div
        style={renderContainerStyle}
        className="secondaryCLContainer"
        onTouchEnd={e => this.stopResize(e)}
        onMouseUp={e => this.stopResize(e)}
      >
      {this.props.activePrimary === 5 ?       
      <span><div className="renew-overlay"><p className="renew-overlay-vertext">ADOBE.com Direct Sales</p></div>
      <div className="renew-overlay-two"><p className="renew-overlay-vertext-two">Reseller and E-Tail / Retail</p></div></span> : null}

        {navigationTitle}
        {secondaryContentTop}
        {mobileBottom}
      </div>
    );
  }
}

export default SecondaryContentList;
