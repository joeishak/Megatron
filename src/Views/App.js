import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {Slide, Animation } from '@progress/kendo-react-animation';
import styles from './App.css';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransitionGroup } from 'react-transition-group';

import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar';
import KendoGrid from 'components/KendoGrid/KendoGrid';
import KendoButton from 'components/KendoButton/KendoButton';
import KendoSwitch from 'components/KendoSwitch/KendoSwitch';
import KendoNumericTextBox from 'components/KendoNumericTextBox/KendoNumericTextBox';
import KendoInput from 'components/KendoInput/KendoInput';
import KendoDropDownList from 'components/KendoDropDownList/KendoDropDownList';
import KendoDialog from 'components/KendoDialog/KendoDialog';

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';

// Custom Nivo Components
// import { changeAuth } from '../actions';

const inStyles = {
  nivoContainer:{
    height:'1000px',
    width: '1000px'
  }
}
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

      console.log(this.props);
      this.getFilters();
  }
  
  componentDidMount(){
 
  }

  getFilters(){
    /* Action Calls */
    this.props.getAdobeData();
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




 /***
  * Use these functions to open and close the dialog box
 
  openDialog = () => {
    this.props.updateDialogVisibility(true);
  } 
  */
  // closeDialog = () => {
  //   this.props.updateDialogVisibility(false);

  //   this.setState({dialogIsOpen: false})
  // } 
  
 

  
 
  render(){

    // const summary = !this.props.switchFilter ? 
    //     <div><TopSummaryBox handleSummaryClick={this.renderBarGraph} />
    //         <div className='bottomSummaryContainer'>
    //           <ButtomSummaryBox rerender={this.state.renderFooter}/>
    //         </div>
    //     </div> : null;

 
    const show = this.props.dialogIsOpen
    const kendoDialog = show ? ( 

      <Animation 
      // style={{width:'70%',height:'700px'}}
        appear={false}
        enter={true}
        exit={true}
        transitionName="custom-animation"
        className="custom-animation"
        transitionEnterDuration={300}
        transitionExitDuration={300}

        >
        <KendoDialog title="Detail ARR"  appContent={[]}></KendoDialog>
        </Animation>
      ) : null;

      const bottomSummary = !this.props.switchFilter ? 
      <div className='bottomSummaryContainer'>
      <ButtomSummaryBox rerender={this.state.renderFooter}/>
      </div>:
      null;
     return (
      <div style={{width:'100%',height:'100%'}}>
        <div style={{width:'100%',height:'inherit'}}>

        <KendoDialog />
        </div>
        <Navigation />
        <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
        <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>

        <TopSummaryBox handleSummaryClick={this.renderBarGraph} />
       {bottomSummary}
          {/* {summary} */}
        
      </div>
  )
}
}

function mapStateToProps(state) {
    console.log(state);
  return {
    dialogIsOpen:state.isDialogOpen,
    activeFilters: state.activeFilters,
    switchFilter: state.switchFilter
  };
}

export default connect(mapStateToProps,actions)(App);