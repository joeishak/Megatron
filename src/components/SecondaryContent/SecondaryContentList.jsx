import React, { Component } from "react";
import ReactDOM from "react-dom";
import SecondarySquares from "./SecondarySquares";
import Playground from "../MobileComponents/Playground/Playground";
import HorizontalSlider from "../MobileComponents/HorizontalSlider/HorizontalSlider.jsx";
import 'hammerjs';
import {
  PRIMARY,
  SECONDARY,
  MOBILE,
  TABLET,
  LAPTOP
} from "../../Constants/consts.js";

import * as utils from '../../utilities';

const navBarHeight = 50;
const titleContainerHeight = 22;
const secondaryRowHeight = 64;
const containerPullBar = 25;

class SecondaryContentList extends Component {
  eventHandler = null;

  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      initialPos: this.props.window.height - this.calculateHeight(),
      onloadPos: this.props.window.height - this.calculateHeight(),
    };
  }

  componentDidMount() {

    ReactDOM.findDOMNode(this).addEventListener("mousemove", this.resizePanel);
    ReactDOM.findDOMNode(this).addEventListener("touchmove", this.resizePanel);
    ReactDOM.findDOMNode(this).addEventListener("mouseup", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("touchend", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("mouseleave", this.stopResize);
    ReactDOM.findDOMNode(this).addEventListener("touchcancel", this.stopResize);


    this.setState({ sortedData: this.props.data })

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

        console.log([this.props.data[this.props.activeJourneyCard], ...this.state.sortedData.filter(item => item.index !== this.props.activeJourneyCard)])
        this.setState({ sortedData: [this.props.data[this.props.activeJourneyCard], ...this.state.sortedData.filter(item => item.index !== this.props.activeJourneyCard)] })

        // this.props.onJourneyCardClicked({}, 0);
      }
    }


  }
  isTouchDevice() {
    return "ontouchstart" in document.documentElement;
  }

  calculateHeight = () => {
    let navHeight = 50;
    if (this.props.window.width > 1024 || this.props.window.width > 765) {
      navHeight = 80;
    }
    return navHeight + titleContainerHeight + secondaryRowHeight * 4;
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

  render() {
    const isMobileAndTablet =
      utils.includes(this.props.deviceType, 'mobile') ||
      utils.includes(this.props.deviceType, 'tablet');
    const navigationTitle =
      isMobileAndTablet === true &&
        this.props.mobileSecondaryIsActive === true ? (
          <div className="primaryDataCategoryContainer">
            <p
              className="primaryCateogryNav"
              onClick={e => this.updateView(e)}
            >{`<`}</p>
            <div className="primaryCategoryTitle">
              {this.props.primaryDataCategory}
            </div>
          </div>
        ) : null;

    const data = (isMobileAndTablet === true) ? this.state.sortedData : this.props.data;
    const secondaryContentTop =
      (this.props.mobileSecondaryIsActive === true &&
        isMobileAndTablet === true) ||
        isMobileAndTablet === false
        ? data.map(item => {
          let isActive =
            this.props.activeJourneyCard === item.index
              ? true
              : false;
          if (this.props.activePrimary === item.category) {
            return (
              <SecondarySquares
                window={this.props.window}
                deviceType={this.props.deviceType}
                key={item.index}
                item={item}
                activeJourneyCard={isActive}
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
      ? { height: `${this.props.window.height - navBarHeight}px`, width: "100%" }
      : { height: "100%", marginTop: "30px", width: "20%" };

    const mobileBottom =
      isMobileAndTablet && this.props.mobileSecondaryIsActive ? (
        <div style={renderStyleBottom} className="box3">
          {/* resizer bar */}
          <div
            style={{ height: `${containerPullBar}px` }}
            className="mobileResizer"
            onMouseDown={e => this.startResize(e)}
            onTouchStart={e => this.startResize(e)}
          >
            {" "}
            <div className="resizerIcon" ><span className="k-icon k-i-reorder"></span></div>
          </div>

          {/* Three Slide Playground bar */}
          <div
            className="secondaryContentBottom"
            style={{ height: `${this.state.initialPos - containerPullBar}px` }}
          >
            <Playground
              bottomContainerHeight={this.state.initialPos}
              comments={this.props.data[this.props.activeJourneyCard].comments}
              commentsPackage={this.props.commentsPackage}
              detailsData={this.props.data[this.props.activeJourneyCard].details.qtdw}
              valueType={this.props.data[this.props.activeJourneyCard].valueType}
            >
              {" "}
            </Playground>
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
        {navigationTitle}
        {secondaryContentTop}
        {mobileBottom}
      </div>
    );
  }
}

export default SecondaryContentList;
