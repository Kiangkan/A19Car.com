var carFormDialog, successSnackbar;

window.addEventListener("load", initCarFormDialog);

function initCarFormDialog() {
    carFormDialog = new mdc.dialog.MDCDialog(document.getElementById("car-form"));
    carFormDialog.scrimClickAction = "";
    carFormDialog.listen("MDCDialog:closed", onFormClosed);
    successSnackbar = new mdc.snackbar.MDCSnackbar(document.getElementById("success-snackbar"));
    successSnackbar.timeoutMs = 4000;
    console.log(successSnackbar, carFormDialog);
}

function onFormClosed(e) {
    if (e.detail.action == "save") {
        successSnackbar.open();
    }
}

function openCarFormDialog() {
    carFormDialog.open();
}

function onCarProfileChange(e) {
    const lbl = document.getElementById("car-profile-lbl");
    if (!e.target.files.length) {
        return;
    }
    while (lbl.firstChild) {
        lbl.firstChild.remove();
    }
    var url = URL.createObjectURL(e.target.files[0]);
    var image = new Image();
    function onload() {
        URL.revokeObjectURL(url);
        image.removeEventListener("load", onload);
    }
    image.addEventListener("load", onload);
    image.src = url;
    lbl.appendChild(image);
}

function onImagesDetailChange(e) {
    if (!e.target.files.length) {
        return;
    }
    for (const file of e.target.files) {
        createImageContainer(file);
    }
}

function createImageContainer(imageFile) {
    var parent = document.getElementById("images-detail-cont");
    var cont = document.createElement("div");
    cont.addEventListener("click", onRemoveThis);
    var mask = document.createElement("div");
    var maskIcon = document.createElement("i");
    maskIcon.classList.add("material-icons", "mdc-theme--on-error");
    maskIcon.textContent = "close";
    mask.classList.add("mask", "fill", "mdc-theme--background");
    cont.setAttribute("role", "button");
    mask.appendChild(maskIcon);
    cont.appendChild(mask);
    cont.classList.add("mdc-layout-grid__cell", "car-profile", "mdc-ripple");
    var image = new Image();
    var url = URL.createObjectURL(imageFile);
    function onload() {
        URL.revokeObjectURL(url);
        image.removeEventListener("load", onload);
    }
    image.addEventListener("load", onload);
    image.src = url;
    cont.appendChild(image);
    parent.appendChild(cont);
}

function onRemoveThis() {
    this.removeEventListener("click", onRemoveThis);
    this.remove();
}