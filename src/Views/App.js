import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {Fade, Expand, Animation } from '@progress/kendo-react-animation';
import styles from '../styles/styles.css';
// Kendo Components
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar';
import KendoGrid from 'components/KendoGrid/KendoGrid';
import KendoButton from 'components/KendoButton/KendoButton';
import KendoSwitch from 'components/KendoSwitch/KendoSwitch';
import KendoNumericTextBox from 'components/KendoNumericTextBox/KendoNumericTextBox';
import KendoInput from 'components/KendoInput/KendoInput';
import KendoDropDownList from 'components/KendoDropDownList/KendoDropDownList';
// import { changeAuth } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={index: 0,
      show: true};
  }
  

  render(){
 
     return (
       <div>
        <Navigation />
        </div>
  )
}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps,actions)(App);