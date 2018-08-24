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

 
   
 componentDidUpdate(){
    // console.log(this.props.avilableFilters);

 }
    componentWillUpdate(){
       
    }
    render(){
       const show = this.props.showSlide;
       const DropDownChildren = show ? (
       
            <div>
                
                <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false} 
                transitionLeave={false}
                transitionLeaveTimeout={100}
                >
                <div className="quarterFilterContainer" >
                    <p> Quarter</p>
                    <KendoDropDownList  data={this.props.availableFilters.quarters}/>
                </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1300}
                transitionEnter={false} 
                transitionLeave={false}
            transitionLeaveTimeout={100}
            >

                    <div className="quarterFilterContainer" >
                        <p> Geo</p>
                        <KendoDropDownList  data={this.props.availableFilters.geos}/>
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={1100}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Product Name</p>
                        <KendoDropDownList  data={this.props.availableFilters.products}/>
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={900}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Subscription Offering</p>
                        <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={700}
                transitionEnter={false} 
                transitionLeave={false}
                >
                    <div className="quarterFilterContainer" >
                        <p> Market Area</p>
                        <KendoDropDownList  data={this.props.availableFilters.marketAreas} />
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p>  Route To Market</p>
                        <KendoDropDownList data={this.props.availableFilters.routeToMarkets}/>
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                        <p> Segment</p>
                        <KendoDropDownList  data={this.props.availableFilters.segments}/>
                    </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
                transitionName="ddFilter"
                transitionAppear={true}
                transitionAppearTimeout={100}
                transitionEnter={false} 
                transitionLeave={false}>
                    <div className="quarterFilterContainer" >
                    <p> Make these my default settings</p>
                    <input type='checkbox' />
                    </div>
            </CSSTransitionGroup>
            </div>
       ): null;
        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelBarContainer-open': (this.props.showContainer)? true: false,
            'panelBarContainer-closed': (this.props.showContainer)? false: true

        })
        return(

            <div className={panelDropDownContainer} >
                {DropDownChildren}
        </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state);
    return {availableFilters: state.availableFilters};
  }
  
  export default connect(mapStateToProps,actions) (CustomDropDownPanel)