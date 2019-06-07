import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import excelLogoGreen from "../../assets/images/excel-logo-green.svg";
import Workbook from "react-excel-workbook";
import { DIMENSIONS, SUMMARY_FILTERS } from '../../Constants/consts';
import { connect } from "react-redux";
import * as actions from "actions";
import LoadingScreen from '../../Views/Loading/Loading.jsx';
class ExcelWorkbook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };

    }
    componentDidMount() {
    }
  
    componentDidUpdate(prevProps) {

    }
    getFinanceWorkBook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    {activeSecondary <4 ? <Workbook.Column label="Units" value="units" /> : null}
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    {activeSecondary < 4 ? <Workbook.Column label="Units" value="units" /> : null}
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    {activeSecondary < 4 ? <Workbook.Column label="Units" value="units" /> : null}
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.route.qtd || []} name="Route To Market">
                    <Workbook.Column label="Route To Market" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    {activeSecondary < 4 ? <Workbook.Column label="Units" value="units" /> : null}
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    {activeSecondary < 4 ? <Workbook.Column label="Units" value="units" /> : null}
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )


    }

    getDiscoverTrafficWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Web Segment">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.ltc.qtd} name="Last Touch Channel">
                    <Workbook.Column label="Last Touch Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.conversion.qtd} name="Conversion Type">
                    <Workbook.Column label="Conversion Type" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.mvd.qtd || []} name="Mobile Or Desktop">
                    <Workbook.Column label="Mobile Or Desktop" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.newVsRepeat.qtd || []} name="New Or Repeat">
                    <Workbook.Column label="New Or Repeat" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getDiscoverPMSpendWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.channel.qtd} name="Channel">
                    <Workbook.Column label="Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>

            </Workbook>
        )
    }
    getDiscoverMUWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.channel.qtd} name="Channel">
                    <Workbook.Column label="Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>

            </Workbook>
        )
    }
    getWorkBookForBottomThreeTryKPIS() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.signUpCat.qtd} name="Sign Up Source">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>

            </Workbook>
        )
    }
    getNewQFMWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.product.qtd} name="Product">
                    <Workbook.Column label="Product" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.signUpCat.qtd} name="Sign Up Source">
                    <Workbook.Column label="Sign Up Source" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getNewCumuUQFMWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.signUpApp.qtd} name="Sign Up Source">
                    <Workbook.Column label="Sign Up Source" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getDiscoverUQFMWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getBuyPaidMediaSpendWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />

                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.channel.qtd} name="Channel">
                    <Workbook.Column label="Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>

            </Workbook>
        )
    }
    getUseWorkbook(){
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                {/* <Workbook.Sheet data={secondaryData[activeSecondary].details.subscription.qtd || []} name="Subscription Offering">
                    <Workbook.Column label="Subscription Offering" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet> */}
            </Workbook>
        )


    }
    getBuyMktgSourcedWorkbook(){
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.channel.qtd || []} name="Channel">
                    <Workbook.Column label="Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getBuyGrossWorkBook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.route.qtd || []} name="Route To Market">
                    <Workbook.Column label="Route To Market" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )


    }
    getGeneralRenewWorkbook(){
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.channel.qtd || []} name="Channel">
                    <Workbook.Column label="Channel" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getBuyGrossWorkBook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.route.qtd || []} name="Route To Market">
                    <Workbook.Column label="Route To Market" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }

    getGeneralRenewWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={this.props.secondaryData[this.props.activeSecondary].details.product.qtd} name="Product Names">
                    <Workbook.Column label="Product Name" value={row => row.type || ""} />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
            </Workbook>
        )
    }
    getRenewEOTWorkbook() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <Workbook
                filename={`${activeItem.header}.xlsx`}
                element={
                    <button className="exportButton">
                        <span>Export</span>
                        <img
                            alt=""
                            className="excelLogo"
                            style={{ height: "20px", width: "20px" }}
                            src={excelLogoGreen}
                        />
                    </button>
                }
            >
                <Workbook.Sheet data={filters.combined.valueFilters} name="Filters">
                    <Workbook.Column label="Dimension" value="category" />
                    <Workbook.Column label="Filter Applied" value="value" />
                </Workbook.Sheet>
                 <Workbook.Sheet data={activeItem.details.geo.qtd} name="geo">
                    <Workbook.Column label="Geo" value="type" />
                    <Workbook.Column label="MarketArea" value="marketArea" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd} name="Market Area">
                    <Workbook.Column label="Market Area" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
                <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd} name="Segment Pivot">
                    <Workbook.Column label="Segment Pivot" value="type" />
                    <Workbook.Column label="Actuals" value="actuals" />
                    <Workbook.Column label="QRF" value="qrf" />
                    <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                    <Workbook.Column label="vsQRF" value="vsQrf" />
                    <Workbook.Column label="Q/Q" value="qq" />
                    <Workbook.Column label="Y/Y" value="yy" />
                </Workbook.Sheet>
               
            </Workbook>
        )
    }
    getCurrentWorkbook(primary, secondary) {

        if (primary === 0) {
            return this.getFinanceWorkBook();
        }
        else if (primary === 2) {
            if (secondary === SUMMARY_FILTERS.TRY_CUMU_UQFM || secondary === SUMMARY_FILTERS.TRY_NEW_UQFM) {
                return this.getNewCumuUQFMWorkbook();
            } else if (secondary === SUMMARY_FILTERS.TRY_CUMU_QFM || secondary === SUMMARY_FILTERS.TRY_DAY_28 || secondary === SUMMARY_FILTERS.TRY_CUMU_UQFM_QFM) {
                return this.getWorkBookForBottomThreeTryKPIS();
            } else {
                return this.getNewQFMWorkbook();
            }
        }
        else if(primary === 4){
            return this.getUseWorkbook();
        } 
        else if(primary === 5){

            if(secondary !== SUMMARY_FILTERS.RENEW_EOT_RESELLER){
                return this.getGeneralRenewWorkbook();
            }else {
               return  this.getRenewEOTWorkbook();
            }
        }
        else {
            switch (secondary) {
                case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
                    return this.getDiscoverTrafficWorkbook();
                case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
                    return this.getDiscoverPMSpendWorkbook();
                case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
                    return this.getDiscoverMUWorkbook();
                case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND: 
                    return this.getDiscoverPMSpendWorkbook();
                case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
                    return this.getDiscoverPMSourcedWorkbook();
                case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
                    return this.getDiscoverTrafficWorkbook();
                case SUMMARY_FILTERS.DISCOVER_UQFM:
                    return this.getDiscoverUQFMWorkbook();
                // Create Functions for these
                case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
                   return this.getBuyGrossWorkBook();
                case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
                    return this.getBuyGrossWorkBook();
                case SUMMARY_FILTERS.BUY_CONVERSION:
                    return this.getDiscoverTrafficWorkbook();
                case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
                    return this.getBuyPaidMediaSpendWorkbook();
                case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
                    return this.getBuyMktgSourcedWorkbook();



            }
        }

    }
    render() {
        let { activeItem, filters, activeSecondary, activePrimary, secondaryData } = this.props;
        let AdobeWorkbook = this.getCurrentWorkbook(activePrimary, activeSecondary);
        return (
            <span className="excelSpan">
                {AdobeWorkbook}
            </span>


        )
    }
}
function mapStateToProps(state) {
    return {
        activePrimary: state.activeCards.primary,
        activeSecondary: state.activeCards.secondary,
        secondaryData: state.summaryData.secondary,
        filters: state.filters,
    };
}

export default connect(
    mapStateToProps,
    actions
)(ExcelWorkbook);

