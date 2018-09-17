export default class ExcelFormatter {
    constructor(data){
        this.data = data;
    }
    formatDataForExcel = () =>{
    console.log('From the Excel Formatter: ', this.data);
    }
}