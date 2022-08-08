var MDCRipple, MDCList, MDCDrawer, MDCMenu, drawer, userMenu;
window.addEventListener("load", init);

function init() {
    MDCRipple = mdc.ripple.MDCRipple;
    MDCList = mdc.list.MDCList;
    MDCDrawer = mdc.drawer.MDCDrawer;
    MDCTextField = mdc.textField.MDCTextField;
    MDCMenu = mdc.menu.MDCMenu;
    userMenu = MDCMenu.attachTo(document.getElementById("user-menu"));
    // userMenu.open = true;
    drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    drawer.open = true;
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;
    for (const listEl of list.listElements) {
        MDCRipple.attachTo(listEl);
    }
    initAllMaterialButton();
    initAllMaterialIconButton();
    initAllMateralTextField();
    initAllMateralList();
    initAllMateralChips();
    initMDCMenu();
    initMDCSelect();
    initSwitch();
    initRadioButton();
}

function initAllMateralTextField() {
    const textFields = document.querySelectorAll(".mdc-text-field");
    for (const textField of textFields) {
        MDCTextField.attachTo(textField);
    }
}

function initRadioButton() {
    const radios = document.querySelectorAll('.mdc-radio');
    for (const radio of radios) {
        new mdc.radio.MDCRadio(radio);
    }
}

function initAllMateralList() {
    const listElements = document.querySelectorAll(".mdc-list");
    for (const listEl of listElements) {
        let list = MDCList.attachTo(listEl);
        for (const el of list.listElements) {
            MDCRipple.attachTo(el);
        }
    }
}

function initAllMateralChips() {
    const chipElements = document.querySelectorAll(".mdc-evolution-chip-set");
    for (const chipEl of chipElements) {
        new mdc.chips.MDCChipSet(chipEl);
    }
}

function initMDCSelect() {
    const selects = document.querySelectorAll('.mdc-select');
    for (const select of selects) {
        new mdc.select.MDCSelect(select);
    }
}

function initSwitch() {
    for (const el of document.querySelectorAll('.mdc-switch')) {
        new mdc.switchControl.MDCSwitch(el);
    }
}

function initAllMaterialButton() {
    const mdcButtons = document.querySelectorAll(".mdc-button");
    for (const mdcButton of mdcButtons) {
        MDCRipple.attachTo(mdcButton);
    }
}

function initAllMaterialIconButton() {
    const mdcIconButtons = document.querySelectorAll(".mdc-icon-button");
    for (const button of mdcIconButtons) {
        MDCRipple.attachTo(button).unbounded = true;
    }
}

function initMDCMenu() {
    const menus = document.querySelectorAll(".mdc-menu");
    for (const menu of menus) {
        MDCMenu.attachTo(menu);
    }
}

function toggleDrawer() {
    drawer.open = !drawer.open
}

function openUserMenu() {
    userMenu.open = true;
}