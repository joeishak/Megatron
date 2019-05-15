import * as utils from '../../../utilities';
import React, { Component } from "react";
import classNames from "classnames";
import {SUMMARY_FILTERS} from '../../../Constants/consts';

import DetailPanelBar from './DetailPanelBar/DetailPanelBar';
class DetailBreakdown extends Component {

  getColor(activeSecondary, originalColor) {
    switch (originalColor) {
        case 'red':
            if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
              activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_FILTERS.RENEW_QTR_PF ||
              activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                return 'greenBG'
            } else {
                return 'redBG'
            }
        default:
        if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
          activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_FILTERS.RENEW_QTR_PF ||
          activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
            return 'redBG'
        } else {
            return 'greenBG'
        }
    }
  }
  renderDollarValuePanelBarItems(value, item) {
    if (
      item.header === "Units"
    ) {
      return utils.formatMetric({ valueType: 'units', value: item.value }, 'value');
    } else if (item.header === 'Vs Qrf' || item.header === 'Q/Q' || item.header == 'W/W' || item.header == 'Y/Y') {
      return utils.formatMetric({ valueType: 'percent', value: item.value }, 'value');
    } else {
      return utils.formatMetric({ valueType: this.props.activeSummary.valueType, value: item.value }, 'value');
    }
  }
  renderQuarterlyToDateTableHeader() {
    let {activeSecondary } = this.props;
    if (this.props.activePrimary === 0 || this.props.activePrimary ===5 ) {
      if(activeSecondary <= SUMMARY_FILTERS.FINANCE_RENEW_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
        activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E){
          switch (this.props.activeTimeMetric) {
            case "qtd":
              return (
                <div className=" qtdDetailTitle col-md-11">Quarterly To Date</div>
              );
            default:
              return <div className=" qtdDetailTitle col-md-11">Week</div>;
          }
        } else {
          switch (this.props.activeTimeMetric) {
            case "qtd":
              return (
                <div className=" qtdJourneyDetailTitle col-md-11">Quarterly To Date</div>
              );
            default:
              return <div className=" qtdJourneyDetailTitle col-md-11">Week</div>;
          }
        }
    
    } else {
      switch (this.props.activeTimeMetric) {
        case "qtd":
          return (
            <div className=" qtdJourneyDetailTitle col-md-11">Quarterly To Date</div>
          );
        default:
          return <div className=" qtdJourneyDetailTitle col-md-11">Week</div>;
      }
    }
  }
  renderQuarterlyToDate(qtdwColSizes, qtdTotalTable, activeSecondary) {
    switch (this.props.activeTimeMetric) {
      case "qtd":
        return (
          <div className={qtdTotalTable + " col-md-11"}>
            {this.props.activeSummary.details.qtdw.qtd
              .map(item => {
                return (
                  <div
                    key={item.index}
                    className={
                      qtdwColSizes
                    }
                  >
                    {(item.header === "Vs Qrf" || item.header === "Q/Q" || item.header === "Y/Y") ?
                      <span className="contHeader"> {(item.header==="Vs Qrf") ? "VS QRF" : item.header} {this.props.qtdIsPercent ? '%' : '#'} </span> :
                      <span className="contHeader"> {item.header}</span>
                    }

                    {(item.header === "Vs Qrf") ?

                      <span className={`valHeader ` + (item.value <= 0 ? ` ${this.getColor(activeSecondary, 'red')}` : ` ${this.getColor(activeSecondary, 'green')}`)}>
                        {" "}
                        {this.renderDollarValuePanelBarItems(item.value, item)}
                      </span> :
                      <span className={`valHeader`}>
                        {" "}
                        {this.renderDollarValuePanelBarItems(item.value, item)}
                      </span>
                    }
                    {/* <span className={`valHeader` + (item.header === "Vs Qrf" ? " redBG" : " ")}>
                      {" "}
                      {this.renderDollarValuePanelBarItems(item.value, item)}
                    </span> */}
                  </div>
                );
              })
              .reverse()}
          </div>
        );
      case "week":

        return (
          <div className={qtdTotalTable + " col-md-11"}>
            {this.props.activeSummary.details.qtdw.week
              .map(item => {
                return (
                  <div
                    key={item.index}
                    className={
                      qtdwColSizes
                    }
                  >
                    <span className="contHeader"> {(item.header==="Vs Qrf") ? "VS QRF" : item.header} </span>
                    <span className={`valHeader ` + (item.header === "Vs Qrf" ? ` ${this.getColor(activeSecondary, 'red')}` : " ")}>
                      {this.renderDollarValuePanelBarItems(item.value, item)} 
                    </span>
                  </div>
                );
              })
              .reverse()}
          </div>
        );

      default:
        break;
    }
  }
  render() {
    let { activeTimeMetric, activeSummary, activeSecondary } = this.props;
    var qtdwColSizes = classNames({
      colContainer: true,
      qtdSize: (activeTimeMetric === "qtd" && this.props.activePrimary >= 1 && this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL &&
      this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM && this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) ? true : false,
      qtdFin: (activeTimeMetric === 'qtd' && ( this.props.activePrimary < 1  || activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
        activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM ||  activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) ) ? true : false,
      weekSize: (activeTimeMetric === "week" && (this.props.activePrimary < 1 || activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
        activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM ||  activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E)) ? true : false,
      weekJourn: (activeTimeMetric === "week" && this.props.activePrimary >= 1 && this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL &&
      this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM && this.props.activeSecondary !== SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) ? true : false,
    });
    var qtdTotalTable = classNames({
      qtdTotalTable: true,
      normalTableSize:
        activeTimeMetric === "week" ||
          activeTimeMetric === "qtd"
          ? true
          : false,
      halfTableSize: activeTimeMetric === "all" ? true : false
    });
    return (
      <span>
        <div className="  qtdTopDetails container-fluid row white">
          <div className=" qtdTotalTitle col-md-1">&nbsp;</div>
          {this.renderQuarterlyToDateTableHeader()}
          <div className=" qtdTotalTitle col-md-12">
            <div className=" qtdTotalTitle col-md-1">Total</div>
            {this.renderQuarterlyToDate(qtdwColSizes, qtdTotalTable, activeSecondary)}
          </div>
        </div>
        <div className="  qtdTopDetails container-fluid row white">
          <DetailPanelBar
            qtdIsPercent={this.props.qtdIsPercent}
            activeSummary={activeSummary}
            timeMetric={activeTimeMetric}
            background="white"
          />
        </div>
      </span>
    )
  }
}

export default DetailBreakdown