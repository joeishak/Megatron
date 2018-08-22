import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import { Slide } from '@progress/kendo-react-animation';
import KendoDropDownList from '../KendoDropDownList/KendoDropDownList'
import styles from './CustomDropDownPanel.css';
import  classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';


class CustomDropDownPanel extends Component {
    constructor(props){
        super(props);
        this.state= {
            isOpen: false,
            isClosed: true,
            showSlide: this.props.showSlide,
            showContainer: this.props.showContainer
        }
    }

 
   
 
    componentWillUpdate(){
       
    }
    render(){
       const show = this.props.showSlide;
    //    const DropDownChildren = show ? (
       
    //    ): null;
        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelBarContainer-open': (this.props.showContainer)? true: false,
            'panelBarContainer-closed': (this.props.showContainer)? false: true

        })
        return(

            <div className={panelDropDownContainer} >
                {/* {DropDownChildren} */}

                 <div>
            <CSSTransitionGroup
            in={show}
            classNames="ddFilter"
            timeout={500}
            unmountOnExit
            >
                <div className="quarterFilterContainer" >
                    <p> Quarter</p>
                    <KendoDropDownList />
                </div>
            </CSSTransitionGroup>
            {/* <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnter={false} 
                transitionLeave={true}
            transitionLeaveTimeout={100}
            >

                    <div className="quarterFilterContainer" >
                        <p> Geo</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Product Name</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={700}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Subscription Offering</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={900}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Market Area</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1100}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p>  Route To Market</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1300}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Segment</p>
                        <KendoDropDownList />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false} 
                transitionLeave={true}>
                    <div className="quarterFilterContainer" >
                    <p> Make these my default settings</p>
                    <input type='checkbox' />
                    </div>
            </CSSTransitionGroup> */}
        </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {};
  }
  
  export default connect(mapStateToProps,actions) (CustomDropDownPanel)