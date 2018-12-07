import {PanelBar, PanelBarItem} from '@progress/kendo-react-layout';
import {connect} from 'react-redux';
import * as actions from 'actions';
import React, {Component} from 'react';
// import classNames from 'classnames'
import styles from './KendoPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css'
import {DIMENSIONS} from '../../Constants/consts'
class KendoPanelBar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
        this.getPanelContents = this.getPanelContents.bind(this);
        this.getTopHeader = this.getTopHeader.bind(this);
        this.getLowerHeader = this.getLowerHeader.bind(this);
        this.getTable = this.getTable.bind(this);
        this.getGeoContent = this.getGeoContent.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return true;
    }
    getLowerHeaderCategory(type){
            switch(type){
                case DIMENSIONS.GEO:
                return 'Geo';
                case DIMENSIONS.MARKET:
                return 'Geo';
                case DIMENSIONS.ROUTE:
                return 'Route';
                case DIMENSIONS.SEGMENT:
                return 'Segment';
                default:
                return 'Product';
            }
        }
    getLowerHeader(type) {
       let isMarket = type === DIMENSIONS.MARKET;
       let qtdColumnClass = (isMarket  ) ? 'qtdMarketColumn': 'qtdColumn';
       let weekColumnClass = (isMarket) ? 'weekMarketColumn': 'weekColumn';
       let MAColumn = (isMarket) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
               Market Area
           </div>: <span></span>
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className="lowerHeaderBar ">
                    <div className={`${qtdColumnClass}  header qtdGeoHeader col`}>
                        {this.getLowerHeaderCategory(type)}
                     </div>
                     {MAColumn}
                     <div className={`${qtdColumnClass}  header col`}>
                        Actuals
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Units
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF DIFF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        vs QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Q/Q
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Y/Y
                    </div>
                </div>);
             default:
                return (<div className="lowerHeaderBar ">
                <div className={`${weekColumnClass} header weekGeoHeader  col`}>
                    {this.getLowerHeaderCategory(type)}
                </div>
                {(type===DIMENSIONS.MARKET) ? <div className={`${weekColumnClass} header weekMaHeader  col`}>
                    Market Area
                </div> : <span></span>}
                <div className={`${weekColumnClass} header  col`}>
                    Actuals
                </div>
                <div className={`${weekColumnClass} header  col`}>
                    Units
                </div>
                <div className={`${weekColumnClass} header  col`}>
                    QRF
                </div>
                <div className={`${weekColumnClass} header  col`}>
                    QRF DIFF
                </div>
                <div className={`${weekColumnClass} header  col`}>
                    vs QRF
                </div>
                <div className={`${weekColumnClass} header  col`}>
                    W/W
                </div>
                </div>);
        }
    }

    getTopHeader() {
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className=" topHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
                default:
                return (<div className="topHeaderBar weekDetailTitle col-md-11">Week</div>);
        }
    }

    renderDollarValue(value) {

        let returnValue = '';
        value = parseInt(value)

        if (value > 1000 && value <= 999999) {
            value = (value / 1000).toFixed(1);
            returnValue = '' + value.toString() + 'K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value / 1000000).toFixed(1);
            returnValue = '' + value.toString() + 'M';
            // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value / 1000000000).toFixed(1);
            returnValue = '' + value.toString() + 'B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value) / 1000000000000).toFixed(1);
            returnValue = '' + value.toString() + 'T';
        } else {
            return '' + value.toString();
        }

        return returnValue;
    }

    formatPercentage(value) {
        return Math.round(value * 100) / 100;
    }

    getMarketAreaContent() {
          let marketCount = 0;
          switch (this.props.timeMetric) {
              case 'qtd':
                  return (this.props.activeSummary.details.market.qtd.map(item => {

                      return (<span key={marketCount++}>
                          <div className="qtdMarketColumn qtdGeoHeader  col">
                              {item.type}
                          </div>
                          <div className="qtdMarketColumn qtdMaHeader col">
                              {item.marketArea}
                          </div>
                          <div className="qtdMarketColumn col">
                              $ {this.renderDollarValue(item.actuals)}
                          </div>
                          <div className="qtdMarketColumn col">

                              {this.renderDollarValue(item.units)}
                          </div>
                          <div className="qtdMarketColumn col">

                              $ {this.renderDollarValue(item.qrf)}
                          </div>
                          <div className="qtdMarketColumn col">

                              $ {this.renderDollarValue(item.qrfDiff)}
                          </div>
                          <div className={(
                                  item.vsQrf <= 0)
                                  ? 'qtdMarketColumn col redBG'
                                  : ' qtdMarketColumn col greenBG'}>

                              {this.formatPercentage(item.vsQrf)}
                              %

                          </div>
                          <div className="qtdMarketColumn col">

                              {
                                  this.formatPercentage(item.qq) > 100
                                      ? 100
                                      : this.formatPercentage(item.qq) < 100
                                          ? -100
                                          : this.formatPercentage(item.qq)
                              }
                              %
                          </div>
                          <div className="qtdMarketColumn col">

                              {
                                  this.formatPercentage(item.yy) > 100
                                      ? 100
                                      : this.formatPercentage(item.yy) < 100
                                          ? -100
                                          : this.formatPercentage(item.yy)
                              }
                              %
                          </div>
                      </span>)
                  }));
                  default:
                  return (this.props.activeSummary.details.market.week.map(item => {

                      return (<span key={marketCount++}>
                          <div className="weekMarketColumn weekGeoHeader  col">
                              {item.type}
                          </div>
                          <div className="weekMarketColumn weekMaHeader col">
                              {item.marketArea}
                          </div>
                          <div className="weekMarketColumn col">
                              {item.actuals}
                          </div>
                          <div className="weekMarketColumn col">
                              {item.units}
                          </div>
                          <div className="weekMarketColumn col">
                              {item.qrf}
                          </div>
                          <div className="weekMarketColumn col">
                              {item.qrfDiff}
                          </div>
                          <div className={(
                                  item.vsQrf <= 0)
                                  ? 'weekMarketColumn col redBG'
                                  : 'weekMarketColumn col greenBG'}>
                              {item.vsQrf}
                          </div>
                          <div className="weekMarketColumn col">
                              {item.ww}
                          </div>

                      </span>)
                  }));
             
          }
      }
      getGeoContent() {
          switch (this.props.timeMetric) {
              case 'qtd':
                  return (this.props.activeSummary.details.geo.qtd.map(item => {

                      return (<span key={item.index}>
                          <div className="qtdColumn qtdGeoHeader  col">
                              {item.type}
                          </div>
                          <div className="qtdColumn col">
                              $ {this.renderDollarValue(item.actuals)}
                          </div>
                          <div className="qtdColumn col">

                              {this.renderDollarValue(item.units)}
                          </div>
                          <div className="qtdColumn col">

                              $ {this.renderDollarValue(item.qrf)}
                          </div>
                          <div className="qtdColumn col">

                              $ {this.renderDollarValue(item.qrfDiff)}
                          </div>
                          <div className={(
                                  item.vsQrf <= 0)
                                  ? 'qtdColumn col redBG'
                                  : ' qtdColumn col greenBG'}>

                              {this.formatPercentage(item.vsQrf)}
                              %

                          </div>
                          <div className="qtdColumn col">

                              {
                                  this.formatPercentage(item.qq) > 100
                                      ? 100
                                      : this.formatPercentage(item.qq) < 100
                                          ? -100
                                          : this.formatPercentage(item.qq)
                              }
                              %
                          </div>
                          <div className="qtdColumn col">

                              {
                                  this.formatPercentage(item.yy) > 100
                                      ? 100
                                      : this.formatPercentage(item.yy) < 100
                                          ? -100
                                          : this.formatPercentage(item.yy)
                              }
                              %
                          </div>
                      </span>)
                  }));
              case 'week':
                  return (this.props.activeSummary.details.geo.week.map(item => {
                      return (<span key={item.index}>
                          <div className="weekColumn weekGeoHeader  col">
                              {item.type}
                          </div>
                          <div className="weekColumn col">
                              {item.actuals}
                          </div>
                          <div className="weekColumn col">
                              {item.units}
                          </div>
                          <div className="weekColumn col">
                              {item.qrf}
                          </div>
                          <div className="weekColumn col">
                              {item.qrfDiff}
                          </div>
                          <div className={(
                                  item.vsQrf <= 0)
                                  ? 'weekColumn col redBG'
                                  : 'weekColumn col greenBG'}>
                              {item.vsQrf}
                          </div>
                          <div className="weekColumn col">
                              {item.ww}
                          </div>
                      </span>)
                  }));
              default:
                  break;
          }
      }
      getDataContent(type){
          switch(type){
              case DIMENSIONS.GEO:
                  return this.getGeoContent();
              case DIMENSIONS.MARKET:
                  return this.getMarketAreaContent();
              default:
               return this.getMarketAreaContent();;
          }
      }
      getTable(type) {
          let isMarket = type === DIMENSIONS.MARKET;
          let qtdColumnClass = (isMarket  ) ? 'qtdMarketColumn': 'qtdColumn';
          let weekColumnClass = (isMarket) ? 'weekMarketColumn': 'weekColumn'
          switch (this.props.timeMetric) {
              case 'qtd':
                  return (<div className=''>
                      <div className="  col-md-12">
                          {this.getDataContent(type)}
                      </div>
                      <div className="  col-md-12">
                          {isMarket ? <div className={`${qtdColumnClass} qtdGeoHeader  col`}>
                              &nbsp;
                          </div> : <span></span>}
                          <div className={`${qtdColumnClass} header qtdMaHeader col`}>
                              Total
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              Actuals
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              Units
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              QRF
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              QRF DIFF
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              vs QRF
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              Q/Q
                          </div>
                          <div className={`${qtdColumnClass} header col`}>
                              Y/Y
                          </div>
                      </div>
                  </div>);
              case 'week':
                  return (<div className=''>
                      <div className=" col-md-12">
                          {this.getDataContent(type)}

                      </div>
                      <div className=" col-md-12">
                          {isMarket? <div className={`${weekColumnClass} header weekGeoHeader col`}>
                              &nbsp;
                          </div> :<span></span>}
                          <div className={`${weekColumnClass} header weekMaHeader col`}>
                              Total
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              Actuals
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              Units
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              QRF
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              QRF DIFF
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              vs QRF
                          </div>
                          <div className={`${weekColumnClass} header col`}>
                              W/W
                          </div>

                      </div>
                  </div>);
              default:
                  break;
          }
      }


    /* Return Contents for */
    getPanelContents(type) {
        return (
            <div className='row'>
                    <div className='col-md-12 topPanelHeader'>
                        {this.getTopHeader()}
                    </div>
                    <div className='col-md-12'>
                        {this.getLowerHeader(type)}
                    </div>
                    <div className='col-md-12 geoTableContainer'>
                        {this.getTable(type)}
                    </div>
            </div>
        );

    }
    render() {
        // var red = classNames({
        //     'red': true
        // });
        return (<div className={'panel-wrapper'}>
            <PanelBar >
                <PanelBarItem className="panelItemTitle" expanded={true} title="Geo">
                   {this.getPanelContents(DIMENSIONS.GEO)}
               </ PanelBarItem>
               <PanelBarItem className="panelItemTitle" expanded={true} title='Market Area'>
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
        activeSummary: state.secondaryData[state.activeCards.secondary],
        activeGeo: state.secondaryData[state.activeCards.secondary].details.geo.qtd
    }
}
export default connect(mapStateToProps, actions)(KendoPanelBar);
