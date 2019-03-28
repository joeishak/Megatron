import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SingleDimensionDetailPanelItemTimeHeader extends Component {
    getTopHeader() {
        if(!this.props.isJourney){
            switch (this.props.timeMetric) {
                case 'qtd':
                    return (<div className=" singleTopHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
                default:
                    return (<div className="singleTopHeaderBarWeek weekDetailTitle col-md-11">Week</div>);
            }
        }else{
            switch (this.props.timeMetric) {
                case 'qtd':
                    return (<div className=" journeySingleTopHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
                default:
                    return (<div className=" journeySingleTopHeaderBarWeek weekDetailTitle col-md-11">Week</div>);
            }
        }
        
    }
    render(){
        
        return(
           this.getTopHeader()
        )
    }
}

export default (SingleDimensionDetailPanelItemTimeHeader)