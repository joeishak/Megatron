import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {Fade, Expand, Slide, Animation } from '@progress/kendo-react-animation';
import styles from './App.css';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  mafData;
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      show: false,
      dialogIsOpen: false,
      renderFooter: false,
      marketAreaFilters: [],
      filterPanelIsOpen: false};


      this.renderFooter = this.renderFooter.bind(this);
      this.renderBarGraph = this.renderBarGraph.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
   
  }
 

  renderBarGraph(index){
  this.setState({renderFooter: !this.state.render});
  console.log('setting state');
  // this.setState({dialogIsOpen: true})

  this.openDialog();
  }

  renderFooter(body){
  }
  openDialog = () => {
    this.props.updateDialogVisibility(true);
  }
  closeDialog = () => {
    this.props.updateDialogVisibility(false);

    this.setState({dialogIsOpen: false})
  }
  openDialogFilterPanel(){
    console.log('changed');
    this.setState({filterPanelIsOpen: !this.state.filterPanelIsOpen});
  }
  handleFilterUpdates = () => {
    this.render();
  }
  render(){
 
    // const show = this.state.dialogIsOpen;
    // const kendoDialog = show ? (<KendoDialog handleDialogClose={this.closeDialog} title="Detail ARR"  visible={true} appContent={[]}/>) : null;
     return (
      <div>
        <Navigation />
        <FilterBox marketAreaFilter={this.mafData} handleFilterUpdates={this.handleFilterUpdates} handleNewFilterClick={this.openDialogFilterPanel}/>
        <CustomDropDownPanel showSlide={this.state.filterPanelIsOpen}/>
        <TopSummaryBox handleSummaryClick={this.renderBarGraph} />
        {/* <Slide direction="up">
          {kendoDialog}
        </Slide> */}
        <div className='bottomSummaryContainer'>
          <ButtomSummaryBox rerender={this.state.renderFooter}/>
        </div>
      </div>
  )
}
}

function mapStateToProps(state) {
  return {isDialogOpen: state.isDialogOpen, allData: state.adobeData};
}

export default connect(mapStateToProps,actions)(App);