import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import styles from './SummaryHeader.css';
class SummaryHeader extends Component {
    render(){
        var SummaryBoxStyles = classNames({
            summaryBox: true,
            summaryBox_financial: !this.props.switchFilter ? false: true
        });
        return(
<CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={1000}
                    transitionEnter={false} transitionLeave={false} >
                {/* Toggle Button */}
                <div className="container-fluid row">
                    <div className="col-md-6 summaryTitleCol k-float-left">{this.getSummaryTitle()}</div>
                        <div className="col-md-6 summaryTitleCol switchContainer ">
                            <label className="switch k-float-right">
                                <input type="checkbox" id="togBtn" checked={this.state.isToggleButtonChecked} onChange={(e) => this.onToggleButtonChanged(e)}></input>
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