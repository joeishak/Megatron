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
            rerender: this.props.activeSummary

        }
        //Binding functions to this
        this.openDialog= this.openDialog.bind(this);
    }

    componentDidMount(){

    }
    //Event Handler for the View Details Button
    openDialog = ()=>{
        // Call an action for mapped props to update the dialog/windows visibility to True
        // this.props.updateDialogVisibility(true)
        this.props.showSummaryDetails();
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
        });
     
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
                                    {(this.props.switchFilter === false) ? this.props.activeSummary.header:this.props.activeSummary.title }
                                    <button className="detailButton" onClick={this.openDialog} >View Details </button>
                                  
                                    {(this.props.switchFilter==false) ? 
                                    <span>
                                        {
                                            this.props.activeSummary.details.stats.reverse().map(item=>{
                                                return(
                                                    <CSSTransitionGroup
                                                        transitionName="example"
                                                        transitionAppear={true}
                                                        transitionAppearTimeout={800}
                                                        transitionEnter={false} 
                                                        transitionLeave={false} >
                                                        <div className=" statsHeader"> 
                                                            <div className={ (item.color==='green') ? ' green' :'red ' }> {item.value}%</div>
                                                            <div className="footer"> {item.text}</div>
                                                        </div>
                                                    </CSSTransitionGroup>
                                                )
                                            })
                                        }
                                    </span>
                                     : null} 
                        
                                </div>
                        </CSSTransitionGroup>
                    </div> 
                    {(this.props.switchFilter==true)? 
                    
                    <div className="journeyStatsContainer">
                        <div className="darkGrey horizontalRule"></div>
                        {this.props.activeSummary.header}
                        {
                                            this.props.activeSummary.details.stats.map(item=>{
                                                return(
                                                    <CSSTransitionGroup
                                                        transitionName="example"
                                                        transitionAppear={true}
                                                        transitionAppearTimeout={800}
                                                        transitionEnter={false} 
                                                        transitionLeave={false} >
                                                        <div className=" statsHeader"> 
                                                            <div className={ (item.color==='red')? ' red' :'green '}> {item.value}%</div>
                                                            <div className="footer"> {item.text}</div>
                                                        </div>
                                                    </CSSTransitionGroup>
                                                )
                                            })
                                        }
                    </div> 
                    : null}
                    <div className="row gridRow2 chartBig container-fluid">
                        <KendoMultiChart color={(this.props.switchFilter===true)? 'white':'black'} chartHeight={this.props.chartHeight} style={inStyles.multichart} />
                    </div> 
                    <div className={over}></div>
                </div>
            </div>
       
        )
    }
}
function mapStateToProps(state){
    return { switchFilter: state.switchFilter, activeSummary: state.activeSummarySquare }
}
export default connect(mapStateToProps,actions)(ButtomSummaryBox)