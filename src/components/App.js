import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';

// Kendo Components
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar';
import KendoGrid from 'components/KendoGrid/KendoGrid';
import KendoButton from 'components/KendoButton/KendoButton';
import KendoSwitch from 'components/KendoSwitch/KendoSwitch';
import KendoNumericTextBox from 'components/KendoNumericTextBox/KendoNumericTextBox';
import KendoInput from 'components/KendoInput/KendoInput';
// import { changeAuth } from '../actions';
class App extends Component {

  renderButton(){

    if(this.props.auth){
      return (
      <button onClick={() => this.props.changeAuth(false)}>
        Sign Out
      </button>)
    } else{
      return (
      <button onClick={() => this.props.changeAuth(true)}>
        Sign In 
      </button>)

    }
  }
 
  render(){ return (
    
    <div> 
      <Navigation> </Navigation>
     
        <KendoPanelBar > 
    </KendoPanelBar >
    <KendoGrid> 
      </KendoGrid>
      <KendoButton />
      <KendoSwitch />
      <KendoInput />
      <KendoNumericTextBox />
    </div>
  
  )
}
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps,actions)(App);