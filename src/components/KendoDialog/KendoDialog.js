import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
import {connect } from 'react-redux';
import * as actions from 'actions';

import {Grid, Row, Col } from 'react-bootstrap';


const inStyles = {
    nivoBar:{
        height: '300px',
        width: '500px'
    }
}
class KendoDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        };
        
        this.closeDialog = this.closeDialog.bind(this)
    }
 
    closeDialog = () => {
        this.props.updateDialogVisibility(false)
    }

    componentDidMount(){
    }
 
 
    render(){
        return(
            <div>
            {/* { this.props.visible  && */}
            <Dialog width='70%' height={700} title={this.state.title}  onClose={this.closeDialog} >
                <Grid>
                    <Row>
                        <Col xs={12} s={12} md={6} lg={6}>
                        <div style={inStyles.nivoBar}> 
         
                        </div>
                        </Col>
                        <Col xs={12} s={12} md={6} lg={6}>
                        <div style={inStyles.nivoBar}> 
                        </div>
                        </Col>
                    </Row>
                </Grid>
            </Dialog>
            {/* } */}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps,actions)(KendoDialog)