var deleteDialog;

window.addEventListener("load", initDeleteDialog);

function initDeleteDialog() {
    deleteDialog = new mdc.dialog.MDCDialog(document.getElementById("delete-dialog"));
}

function openConfirmDeleteDialog() {
    deleteDialog.open();
}