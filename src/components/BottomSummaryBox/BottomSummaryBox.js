import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './ButtomSummaryBox.css';
import {Grid, Row, Col} from 'react-bootstrap';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
import {connect } from 'react-redux';
import * as actions from 'actions';
import { open } from 'fs';
const inStyles = {
    multichart:{
        backgroundColor: '#e8e8e8'
    }
}
class ButtomSummaryBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            rerender: this.props.rerender
        }
        this.openDialog= this.openDialog.bind(this);
    }

    openDialog = ()=>{
        this.props.updateDialogVisibility(true)
    }
    render(){
        return(

            <div className="" >
                <div className="row gridRow1">
                    <div className = "titleHeader col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false} 
                            transitionLeave={false} >
                            <div>
                            Net New ARR
                            <button className="detailButton" onClick={this.openDialog} >View Details </button>
                        

                         <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={800}
                            transitionEnter={false} 
                            transitionLeave={false} >
                         <div className="statsHeader"> 
                            <span className="green"> -2.9%</span><br/>
                            <span> Y/Y </span>
                        </div>
                        </CSSTransitionGroup>
                        <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={600}
                            transitionEnter={false} 
                            transitionLeave={false} >
                        <div className="statsHeader"> 
                            <span className="red"> -17.0%</span><br/>
                            <span> Q/Q LY </span>
                        </div>
                        </CSSTransitionGroup>

                           <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={400}
                            transitionEnter={false} 
                            transitionLeave={false} >
                        <div className="statsHeader"> 
                            <span className="red"> -20.4%</span><br/>
                            <span> Q/Q TY </span>
                        </div>
                        </CSSTransitionGroup>

                           <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={200}
                            transitionEnter={false} 
                            transitionLeave={false} >
                        <div className="statsHeader"> 
                            <span className="red"> -2.8%</span><br/>
                            <span> vs QRF </span>
                        </div>
                        </CSSTransitionGroup>
                    
                        </div>
                        </CSSTransitionGroup>
                   
                </div> 
                <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={200}
                            transitionEnter={false} 
                            transitionLeave={false} >
                <div className="row gridRow2">
                    <KendoMultiChart style={inStyles.multichart} />
                </div> 
                </CSSTransitionGroup>

                </div>
            </div>
       
        )
    }
}
function mapStateToProps(state){
    return { }
}
export default connect(mapStateToProps,actions)(ButtomSummaryBox)