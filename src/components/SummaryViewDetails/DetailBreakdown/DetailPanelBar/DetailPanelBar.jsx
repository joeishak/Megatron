import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './DetailPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css';
import { DIMENSIONS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";

import DetailPanelItemTimeHeader from './DetailPanelItemTimeHeader';
import PanelItemTableHeader from './PanelItemTableHeader';
import PanelItemTable from './PanelItemTable';
class DetailPanelBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        this.getPanelContents = this.getPanelContents.bind(this);
   
    }

    shouldComponentUpdate(nextProps) {
        return true;
    }


   
   


    /* Return Contents for */
    getPanelContents(type) {
        return (
            <div className='row'>
                <div className='col-md-12 topPanelHeader'>
                    {/* {this.getTopHeader()} */}
                    <DetailPanelItemTimeHeader 
                    timeMetric={this.props.timeMetric}
                    />
                </div>
                <div className='col-md-12'>
                    {/* {this.getLowerHeader(type)} */}
                    <PanelItemTableHeader
                    timeMetric={this.props.timeMetric}
                    activeSummary={this.props.activeSummary}
                    type={type}/>
                </div>
                <div className='col-md-12 geoTableContainer'>
                    {/* {this.getTable(type)} */}
                    <PanelItemTable
                    type={type}
                    activeSummary={this.props.activeSummary}
                    timeMetric={this.props.timeMetric}
                    />
                </div>
            </div>
        );

    }
    render() {

        return (<div className={'panel-wrapper'}>
            <PanelBar >
                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                    {this.getPanelContents(DIMENSIONS.GEO)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                    {this.getPanelContents(DIMENSIONS.MARKET)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                    {this.getPanelContents(DIMENSIONS.ROUTE)}
                </PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Name'>
                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                </PanelBarItem>
            </PanelBar>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        // activeSummary: state.summaryData.secondary[state.activeCards.secondary],
        // activeGeo: state.summaryData.secondary[state.activeCards.secondary].details.geo.qtd
    }
}
export default connect(mapStateToProps, actions)(DetailPanelBar);
