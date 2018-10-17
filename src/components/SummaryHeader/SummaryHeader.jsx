import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './SummaryHeader.css';
class SummaryHeader extends Component {
    constructor(props){
        super(props);
     
    }
    render(){
     
        return(
<CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={1000}
                    transitionEnter={false} transitionLeave={false} >
                {/* Toggle Button */}
                <div className="container-fluid row">
                    <div className="col-md-6 summaryTitleCol k-float-left">{this.props.summaryTitle}</div>
                        <div className="col-md-6 summaryTitleCol switchContainer ">
                            <label className="switch k-float-right">
                                <input type="checkbox" id="togBtn" checked={this.props.isToggleButtonChecked} onChange={(e) => this.props.onToggleButtonChanged()}></input>
                                <div className="slider round">
                                    <div className="on">Financials</div>
                                    <div className="off">Journeys</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </CSSTransitionGroup>
        )
    }
}

export default (SummaryHeader)