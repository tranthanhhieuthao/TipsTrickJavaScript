export default class TableExporter {
    constructor(table) {
        this.table = table
    }

    exportXLS() {
        const tableContent = this.table.outerHTML
        const tableUrl = 'data:application/vnd.ms-excel;charset=utf-8,' + tableContent
        this.triggerDownload(tableUrl,'users.xls')

    }

    triggerDownload(url,filename) {
        const downloadLink = document.createElement('a')
        downloadLink.href = url
        downloadLink.download = filename
        document.body.appendChild(downloadLink)
        downloadLink.click()
    }
}