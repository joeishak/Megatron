import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DetailPanelItemTimeHeader extends Component {
    getTopHeader() {
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className=" topHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
            default:
                return (<div className="topHeaderBar weekDetailTitle col-md-11">Week</div>);
        }
    }
    render(){
        
        return(
           this.getTopHeader()
        )
    }
}

export default (DetailPanelItemTimeHeader)