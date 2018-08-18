import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {Fade, Expand, Animation } from '@progress/kendo-react-animation';
import styles from './App.css';

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
// import { changeAuth } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      index: 0,
      show: true,
      dialogIsOpen: false};
  }
  

  openDialog = () => {
    this.setState({dialogIsOpen: true})
  }
  closeDialog = () => {
    this.setState({dialogIsOpen: false})

  }
  
  render(){
 
     return (
      <div>
        <Navigation />
        <FilterBox />
        <TopSummaryBox handleSummaryClick={this.openDialog}/>
        <KendoDialog handleDialogClose={this.closeDialog} title="Detail ARR" visible={this.state.dialogIsOpen} appContent={[]}/>
        <div className='bottomSummaryContainer'>
          <ButtomSummaryBox />
        </div>
      </div>
  )
}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps,actions)(App);