import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './ButtomSummaryBox.css';
import {Grid, Row, Col} from 'react-bootstrap';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';

const inStyles = {
    multichart:{
        backgroundColor: '#e8e8e8'
    }
}
class ButtomSummaryBox extends Component {
    render(){
        return(

            <div className="" >
                <div className="row gridRow1">
                    <div className = "titleHeader col-xs-12 col-sm-12 col-md-12 col-lg-12">
                         Net New ARR
                         <div className="statsHeader"> 
                            <span className="green"> -2.9%</span><br/>
                            <span> Y/Y </span>
                        </div>
                        <div className="statsHeader"> 
                            <span className="red"> -17.0%</span><br/>
                            <span> Q/Q LY </span>
                        </div>
                        <div className="statsHeader"> 
                            <span className="red"> -20.4%</span><br/>
                            <span> Q/Q TY </span>
                        </div>
                        <div className="statsHeader"> 
                            <span className="red"> -2.8%</span><br/>
                            <span> vs QRF </span>
                        </div>
                    
                    
                   
                </div> 
                <div className="row gridRow2">
                    <KendoMultiChart style={inStyles.multichart} />
                </div> 
                </div>
            </div>
       
        )
    }
}

export default (ButtomSummaryBox)