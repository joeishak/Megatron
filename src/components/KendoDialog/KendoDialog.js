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
            {/* <Dialog width={600} height={700} title={"Detail ARR"}  onClose={this.closeDialog} >
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
         </Dialog> */}
         <Window close={this.closeDialog} title={"About Alvar Aalto"} width={"640px"}>
                   <p>Alvar Aalto is one of the greatest names in modern architecture and design. Glassblowers at the iittala factory still meticulously handcraft the legendary vases that are variations on one theme, fluid organic shapes that let the end user decide the use. Interpretations of the shape in new colors and materials add to the growing Alvar Aalto Collection that remains true to his original design.</p>

                   <p>Born Hugo Alvar Henrik Aalto (February 3, 1898 - May 11, 1976) in Kuortane, Finland, was noted for his humanistic approach to modernism. He studied architecture at the Helsinki University of Technology from 1916 to 1921. In 1924 he married architect Aino Marsio.</p>

                   <p>Alvar Aalto was one of the first and most influential architects of the Scandinavian modern movement, and a member of the Congres Internationaux d'Architecture Moderne. Major architectural works include the Finlandia Hall in Helsinki, Finland, and the campus of Helsinki University of Technology.</p>
               </Window>
             </div>
            
            ) : null;
        return(
            <div className="dialogContainer fluid">
            {/* { this.props.visible  && */}
            {/* <Animation 
            // style={{width:'inherit',height:'inherit'}}
              appear={false}
              enter={true}
              exit={true}
              transitionName="custom-animation"
              transitionEnterDuration={1000}
              transitionExitDuration={300}
              >
              

              </Animation> */}

              {kendoDialog}

            {/* } */}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {dialogIsOpen:state.isDialogOpen}
}
export default connect(mapStateToProps,actions)(KendoDialog)