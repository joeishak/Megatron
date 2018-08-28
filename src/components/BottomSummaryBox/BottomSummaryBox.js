// Npm Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from 'actions';
import {Grid, Row, Col} from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import { open } from 'fs';

// Custom Components and Styles
import styles from './ButtomSummaryBox.css';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';

// In Line Styles
const inStyles = {
    multichart:{
        backgroundColor: '#e8e8e8'
    }
}
class ButtomSummaryBox extends Component {
    //When the component is constructed
    constructor(props){

        super(props);

        // Initialize state
        this.state = {
            rerender: this.props.rerender

        }
        //Binding functions to this
        this.openDialog= this.openDialog.bind(this);
    }

    //Event Handler for the View Details Button
    openDialog = ()=>{
        // Call an action for mapped props to update the dialog/windows visibility to True
        this.props.updateDialogVisibility(true)
    }
    render(){
        var titleHeader= classNames({
            summaryTitleHeader: (this.props.switchFilter)? false:true,
            journeyTitleHeader: (this.props.switchFilter)? true: false
        });
        var over = classNames({
            over: true,
            summaryOver: (this.props.switchFilter)? false:true,
            journeyOver: (this.props.switchFilter)? true: false
        })
        return(
            <div className="" >
                <div className="row gridRow1">
                    <div className = {titleHeader + " col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
                        <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false} 
                            transitionLeave={false} >
                                <div>
                                    Net New ARR
                                    <button className="detailButton" onClick={this.openDialog} >View Details </button>
                                  
                                    {(this.props.switchFilter==false) ? 
                                    <span>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={800}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className=" statsHeader"> 
                                            <div className="percentage green"> -2.9%</div>
                                            <div className="footer"> Y/Y </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={600}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className=" statsHeader"> 
                                            <div className="percentage red"> -17.0%</div>
                                            <div className="footer"> Q/Q LY </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={400}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className=" statsHeader"> 
                                            <div className="percentage red"> -20.4%</div>
                                            <div className="footer"> Q/Q TY </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={200}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className=" statsHeader"> 
                                            <div className="percentage red"> -2.8%</div>
                                            <div className="footer"> vs QRF </div>
                                        </div>
                                    </CSSTransitionGroup> 
                                    </span>
                                    : null}
                        
                                </div>
                        </CSSTransitionGroup>
                    </div> 
                    {(this.props.switchFilter==true)? 
                    
                    <div className="journeyStatsContainer">
                        <div className="darkGrey horizontalRule"></div>
                        Traffic
                        <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={800}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className="statsHeader"> 
                                            <div className="percentage green"> -2.9%</div>
                                            <div className="footer"> Y/Y </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={600}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className="statsHeader"> 
                                            <div className="percentage red"> -17.0%</div>
                                            <div className="footer"> Q/Q LY </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={400}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className="statsHeader"> 
                                            <div className="percentage red"> -20.4%</div>
                                            <div className="footer"> Q/Q TY </div>
                                        </div>
                                    </CSSTransitionGroup>
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={200}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div className="statsHeader"> 
                                            <div className="percentage red"> -2.8%</div>
                                            <div className="footer"> vs QRF </div>
                                        </div>
                                    </CSSTransitionGroup> 
                    </div> 
                    : null}
                    <div className="row gridRow2 chartBig container-fluid">
                        <KendoMultiChart chartHeight={this.props.chartHeight} style={inStyles.multichart} />
                    </div> 
                    <div className={over}></div>
                </div>
            </div>
       
        )
    }
}
function mapStateToProps(state){
    return { switchFilter: state.switchFilter }
}
export default connect(mapStateToProps,actions)(ButtomSummaryBox)