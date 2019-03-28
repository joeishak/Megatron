import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DetailPanelItemTimeHeader extends Component {
    getTopHeader() {
        if(!this.props.isJourney){
            switch (this.props.timeMetric) {
                case 'qtd':
                    return (<div className=" topHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
                default:
                    return (<div className=" topHeaderBarWeek weekDetailTitle col-md-11">Week</div>);
            }
        } else{
            switch (this.props.timeMetric) {
                case 'qtd':
                    return (<div className=" journeyTopHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
                default:
                    return (<div className=" journeyTopHeaderBarWeek weekDetailTitle col-md-11">Week</div>);
            }
        }
      
    }
    render(){
        
        return(
           this.getTopHeader()
        )
    }
}

export default (DetailPanelItemTimeHeader)