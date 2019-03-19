import React, { Component } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
import styles from './FeedBack.css';
import $ from 'jquery';
import * as _ from 'lodash'
import classNames from 'classnames';
import LoadingScreen from '../../Views/Loading/Loading';

// import SingleValueSelect from '../SingleValueSelect/SingleValueSelect';
// import MultiValueSelect from '../MultiValueSelect/MultiValueSelect';
// import LoadingScreen from '../../Views/Loading/Loading';

class FeedBackDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'Feedback Form',
            savedClicked: undefined,
            feedBackType: null,
            featureSelectType: [],
            featureType: null,
            message: 'Enter details...',
            error: false,
            isLoading: false
        };

        this.closeDialog = this.closeDialog.bind(this)

        $('.content').kendoWindow({
            animation: true
        })

        this.updateValue = this.updateValue.bind(this);
    }

    componentDidMount() {
        this.open();
    }

    open() {
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()
        });
    }
    closeDialog() {
        this.props.updateFeedbackFormVisibility(false);
    }
    onFeedbackSubmit = (e) => {

        if (this.state.featureType !== null && this.state.feedBackType !== null && this.state.message !== 'Enter details...') {

            const feedback = {
                user: this.props.user.sub,
                message: this.state.message,
                type: this.state.feedBackType,
                feature: this.state.featureType
            }
            console.log(feedback);
            this.props.updateFeedbackFormVisibility(false);

        } else {
            console.log('INCOMPLETE');
            this.setState({error: true});
        }
    }

    onFeedBackTypeChange = (e) => {

        this.setState({feedBackType: e.currentTarget.value});
    }

    onFeatureTypeChange = (e) => {
        this.setState({featureType : e.currentTarget.value});
    }

    updateValue(event) {
        this.setState({ message: event.target.value});
    }

    render() {

        const error = this.state.error ? <div className="container-fluid feedback-container">
            <div className="error-box">
                Error: must have completed the fields!
                <button className="saveButton error-btn" onClick={ e => {this.setState({error: false})}}>OK</button>
            </div>
        </div> : null; 

        const main =  !this.state.error || this.state.isLoading ?             
                <div className="container-fluid feedback-container">
                    <div className="row">
                        <h4 className="f-headers">I'M TELLING YOU ABOUT</h4>
                        <form className="k-form">
                            <div className="k-form-field">
                            <input type="radio" name="group" id="bug" className="k-radio" value="bug" onChange={e => {this.onFeedBackTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="bug">A Bug</label>

                            <input type="radio" name="group" id="enhancement" className="k-radio" value="enhancement" onChange={e => {this.onFeedBackTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="enhancement">An enhancement</label>

                            <input type="radio" name="group" className="k-radio" id="kudos" value="kudos" onChange={e => {this.onFeedBackTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="kudos">Kudos</label>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <h4 className="f-headers">FEATURE</h4>

                        <div className="row">

                        <form className="k-form">
                            <div className="k-form-field">
                            <div className="row">
                            <input type="radio" name="group" id="financial" className="k-radio" value="kpi_financial" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="financial">Financial Perf</label>

                            <input type="radio" name="group" id="discover" className="k-radio" value="kpi_discover" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="discover">Discover</label>

                            <input type="radio" name="group" className="k-radio" id="try" value="kpi_try" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="try">Try</label>

                            <input type="radio" name="group" className="k-radio" id="buy" value="kpi_buy" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="buy">Buy</label>

                            <input type="radio" name="group" className="k-radio" id="use" value="kpi_use" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="use">Use</label>

                            <input type="radio" name="group" className="k-radio" id="renew" value="kpi_renew" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="renew">Renew</label>
                            </div>

                            <div className="row" style={{paddingTop: '10px'}}>
                            <input type="radio" name="group" className="k-radio" id="commenting" value="feature_commenting" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="commenting">Commenting</label>

                            <input type="radio" name="group" className="k-radio" id="filter" value="feature_filtering" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="filter">Filtering</label>

                            <input type="radio" name="group" className="k-radio" id="export" value="feature_excel_export" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="export">Exporting Excel</label>

                            <input type="radio" name="group" className="k-radio" id="saving" value="feature_saving_preference" onChange={e => {this.onFeatureTypeChange(e)}}/>
                            <label className="k-radio-label" htmlFor="saving">Saving Preference</label>

                            </div>
                            </div>
                        </form>

                        </div>

                    </div>

                    <div className="row">
                        <h4 className="f-headers">DETAILS</h4>

                        <textarea className="k-textarea" style={{height: '100px', width: '530px', resize: 'none'}} 
                        value={this.state.message}
                        type="text" 
                        onChange={this.updateValue} 
                        >
                            
                        </textarea>
                    </div>
                   
                    <button className="saveButton feedback-btn" onClick={ e => this.onFeedbackSubmit(e)}>Submit</button>
                </div>: null;



        return (
            <div>
                <Dialog width={600} height={626} title={`Provide Feedback`} onClose={this.closeDialog}>
                    {error}
                    {main}

            
                </Dialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isFeedBackDialogOpen: state.isFeedBackDialogOpen,
        user: state.user
    }
}
export default connect(mapStateToProps, actions)(FeedBackDialog);
