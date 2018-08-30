import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
import {connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
import {Slide,Animation } from '@progress/kendo-react-animation';
import {Grid, Row, Col } from 'react-bootstrap';
import styles from './KendoDialog.css';
import { Window } from '@progress/kendo-window-react-wrapper';
import $ from 'jquery';
import KendoDropDownList from '../KendoDropDownList/KendoDropDownList';


class KendoDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        };
        
        this.closeDialog = this.closeDialog.bind(this)      
        $('.content').kendoWindow({
            animation:true
        })
    }
    open() {
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()});
    }
    closeDialog = () => {
        this.props.updateDialogVisibility(false)
    }

    componentDidMount(){
    }
 
 
    render(){
        const show = this.props.dialogIsOpen
        const kendoDialog = show ? ( 
        <div className="content">

        {console.log('KendoDialog.js Available Filters',this.props.availableFilters)}

            <Dialog width={939} height={626}  title={"Data Preferences"} onClose={this.closeDialog} >
                     <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} />
                    
               
            </Dialog>

         </div>
            
            ) : null;
        return(
            <div className="dialogContainer fluid">
              {kendoDialog}
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        dialogIsOpen: state.isDialogOpen,
        availableFilters: state.availableFilters
    }
}
export default connect(mapStateToProps,actions)(KendoDialog);