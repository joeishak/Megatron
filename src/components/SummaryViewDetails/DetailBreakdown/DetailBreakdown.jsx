import * as utils from '../../../utilities';
import React, { Component } from "react";
import classNames from "classnames";
import ExcelFormatter from "../ExcelFormatter";

import DetailTotalBar from './DetailTotal';
import DetailPanelBar from './DetailPanelBar/DetailPanelBar';
class DetailBreakdown extends Component {
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
    if (this.props.activePrimary === 0) {
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

  }
  renderQuarterlyToDate(qtdwColSizes, qtdTotalTable) {
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
                    <span className="contHeader"> {item.header}</span>
                    {
                      (item.header === "Vs Qrf") ?
                        <span className={`valHeader` + (item.value <= 0 ? " redBG" : " greenBG ")}>
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
        let formatter = new ExcelFormatter(
          this.props.activeSummary.details.qtdw.week
        );
        formatter.formatDataForExcel();
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
                    <span className="contHeader"> {item.header} </span>
                    <span className={`valHeader` + (item.header === "Vs Qrf" ? " redBG" : " ")}>
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
    let { activeTimeMetric, activeSummary } = this.props;
    var qtdwColSizes = classNames({
      colContainer: true,
      qtdSize: (activeTimeMetric === "qtd" && this.props.activePrimary === 1) ? true : false,
      qtdFin: (activeTimeMetric === 'qtd' && this.props.activePrimary !== 1) ? true : false,
      weekSize: (activeTimeMetric === "week" && this.props.activePrimary !== 1) ? true : false,
      weekJourn: (activeTimeMetric === "week" && this.props.activePrimary === 1) ? true : false,
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
            {this.renderQuarterlyToDate(qtdwColSizes, qtdTotalTable)}
          </div>
        </div>
        <div className="  qtdTopDetails container-fluid row white">
          <DetailPanelBar
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