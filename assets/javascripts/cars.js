var carsTable;

window.addEventListener("load", init);

function init() {
    initTable();
}

function initTable() {
    carsTable = new mdc.dataTable.MDCDataTable(document.getElementById("cars-table"));
}