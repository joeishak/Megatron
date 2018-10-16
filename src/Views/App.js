import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../components/KendoDialog/KendoDialog';
import CommentBox from '../components/CommentBox/CommentBox.jsx';
import ButtomSummaryBox from '../components/BottomSummaryBox/BottomSummaryBox';



class App extends Component {
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
      this.getFilters();
  }
 
  getFilters(){
    this.props.generateFilterData();
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
    const bottomSummary = !this.props.switchFilter ? 
      
    <div className='bottomSummaryContainer'>
      <ButtomSummaryBox chartHeight="400px" rerender={this.state.renderFooter}/>
    </div> : null;
    /**Summary View Details */
    const Summary = this.props.detailIsOpen ? 
      <div >
      <SummaryViewDetails />
     </div>
     : 
    <div>
       <TopSummaryBox handleSummaryClick={this.renderBarGraph} />
       {bottomSummary}
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
      </div>

  )
}
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    dialogIsOpen: state.isDialogOpen, 
    // activeFilters: state.activeFilters,
    //   availableFilters: state.availableFilters,
    detailIsOpen: state.detailsIsOpen,
    switchFilter: state.switchFilter,
    commentBoxIsOpen: state.commentBoxIsOpen
  };
}

export default connect(mapStateToProps, actions)(App);