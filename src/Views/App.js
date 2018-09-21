import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components

// Custom Components
import Footer from '../components/Footer/footerBar';
import ChatDrawer from '../components/Footer/components/ChatDrawerContainer/ChatDrawer';
import FilterBox from 'components/FilterBox/FilterBox';
import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../components/KendoDialog/KendoDialog';
import CommentBox from '../components/CommentBox/CommentBox.jsx';
import axios from 'axios';


//InfoBurst

// Custom Nivo Components
// import { changeAuth } from '../actions';

class App extends Component {

  prod_connection = { 'user': 'JR', 'pass': 'ft3t7pgz' };
  environment = { infosolApi: 'http://vm1.infosol.com:8551' };

  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state ={
      index: 0,
      show: false,
      renderFooter: false,
      marketAreaFilters: this.props.activeFilters,
      filterPanelIsOpen: false,
      showDropDowns: false,
      dialogIsOpen: this.props.dialogIsOpen
    };


      /*Bindings  */
      this.renderBarGraph = this.renderBarGraph.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
      this.getFilters  =this.getFilters.bind(this);

      this.props.getAdobeData();

    // this.props.generateFilterData();
    
    this.getFilters();
   
  }
 
  componentWillReceiveProps(nextProps){
   
    this.props.getQueryFilteredIBEData(nextProps.activeFilters,nextProps.availableFilters);
    this.props.getQueryFilteredIBEMultiChartData(nextProps.activeFilters,nextProps.availableFilters);

  }
  getFilters(){
    this.props.generateFilterData();
  }
  /* Sets the state passed to the bottom summary box so that it re renders */
  renderBarGraph(index){
    this.setState({renderFooter: !this.state.render});
  }
  /* Sets the state passed to the bottom summary box so that it re renders */
  renderBarGraph(index){
    this.setState({renderFooter: !this.state.render});
  }

  /* Event Handler for the Filter Box to open the filter panel with the drop downs */
  openDialogFilterPanel(){
    // Opening the panel
    if(!this.state.filterPanelIsOpen){
      this.setState({showDropDowns: true});
      this.setState({filterPanelIsOpen: true})
    } else { /* Closing the Panel */

      this.setState({showDropDowns: false});
      // this.setState({filterPanelIsOpen: false});
      
      this.time = setTimeout(()=>{
      this.setState({filterPanelIsOpen: false});

        },300);
    }
    
  }
getSummaryDetails(){

}

openChatDialogPanel = () => {
  const panelState = this.state.chatWindowIsOpen;
  this.setState({chatWindowIsOpen: !panelState});
}
 
  render(){

    const chatWindowContainer = this.state.chatWindowIsOpen ? <ChatDrawer></ChatDrawer> : null;
      
    /**Summary View Details */
    const Summary = this.props.detailIsOpen ? 
      <div >
      <SummaryViewDetails />
     </div>
     : 
    <div>
       <TopSummaryBox handleSummaryClick={this.renderBarGraph} />
       {/* {bottomSummary} */}
      </div>;

    return (
      

      <div style={{height:'100%'}}>
      {/* Data Preferences */}
        <KendoDialog /> 
         <Navigation />
          <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
          {(this.props.commentBoxIsOpen) ? <CommentBox /> : null}
          <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>
          {Summary}
          {/* {chatWindowContainer} */}
        {/* <Footer onSelected={this.openChatDialogPanel} selectedSquare={this.props.activeSquare}/>       */}
      </div>

  )
}
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    dialogIsOpen:state.isDialogOpen,
    activeFilters: state.activeFilters,
    detailIsOpen: state.detailsIsOpen,
    availableFilters: state.availableFilters,
    activeSquare: state.activeSummarySquare,
    commentBoxIsOpen: state.commentBoxIsOpen
  };
}

export default connect(mapStateToProps, actions)(App);