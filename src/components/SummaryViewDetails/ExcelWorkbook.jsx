import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import excelLogoGreen from "../../assets/images/excel-logo-green.svg";
import Workbook from "react-excel-workbook";

class ExcelWorkbook extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }
    getFinanceWorkBook() {

    }
    render() {
        let { activeItem, filters, activeSecondary, secondaryData } = this.props;
        return (
            <span className="excelSpan">
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
                    {/* <Workbook.Sheet data={this.props.secondaryData[activeSecondary].details.geo.qtd || []} name="geo">
                        <Workbook.Column label="Geo" value="type" />
                        <Workbook.Column label="MarketArea" value="marketArea" />
                        <Workbook.Column label="Actuals" value="actuals" />
                        {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                        <Workbook.Column label="QRF" value="qrf" />
                        <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="Q/Q" value="qq" />
                        <Workbook.Column label="Y/Y" value="yy" />
                    </Workbook.Sheet>
                    <Workbook.Sheet data={secondaryData[activeSecondary].details.market.qtd || []} name="Market Area">
                        <Workbook.Column label="Market Area" value="type" />
                        <Workbook.Column label="Actuals" value="actuals" />
                        {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                        <Workbook.Column label="QRF" value="qrf" />
                        <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="Q/Q" value="qq" />
                        <Workbook.Column label="Y/Y" value="yy" />
                    </Workbook.Sheet>
                    <Workbook.Sheet data={secondaryData[activeSecondary].details.segment.qtd || []} name="Segment Pivot">
                        <Workbook.Column label="Segment Pivot" value="type" />
                        <Workbook.Column label="Actuals" value="actuals" />
                        {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                        <Workbook.Column label="QRF" value="qrf" />
                        <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="Q/Q" value="qq" />
                        <Workbook.Column label="Y/Y" value="yy" />
                    </Workbook.Sheet>
                    <Workbook.Sheet data={secondaryData[activeSecondary].details.route.qtd || []} name="Route To Market">
                        <Workbook.Column label="Route To Market" value="type" />
                        <Workbook.Column label="Actuals" value="actuals" />
                        {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                        <Workbook.Column label="QRF" value="qrf" />
                        <Workbook.Column label="QRFDIFF" value="qrfDiff" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="Q/Q" value="qq" />
                        <Workbook.Column label="Y/Y" value="yy" />
                    </Workbook.Sheet>
                    <Workbook.Sheet data={secondaryData[activeSecondary].details.product.qtd || []} name="Product Names">
                        <Workbook.Column label="Product Name" value="type" />
                        <Workbook.Column label="Actuals" value="actuals" />
                        {this.props.activeSecondary < 3 ? <Workbook.Column label="Units" value="units" /> : null}
                        <Workbook.Column label="QRF" value="qrf" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="vsQRF" value="vsQrf" />
                        <Workbook.Column label="Q/Q" value="qq" />
                        <Workbook.Column label="Y/Y" value="yy" />
                    </Workbook.Sheet> */}
                </Workbook>
            </span>


        )
    }
}

export default ExcelWorkbook