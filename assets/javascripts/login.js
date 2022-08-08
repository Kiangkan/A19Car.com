var MDCTextField, MDCRipple;
 
window.addEventListener("load", init);

function init() {
    MDCRipple = mdc.ripple.MDCRipple;
    MDCTextField = mdc.textField.MDCTextField;
    initAllMateralTextField();
    initAllMaterialIconButton();
}

function initAllMateralTextField() {
    const textFields = document.querySelectorAll(".mdc-text-field");
    console.log(MDCTextField);
    for (const textField of textFields) {
        MDCTextField.attachTo(textField);
    }
}

function initAllMaterialIconButton() {
    const mdcIconButtons = document.querySelectorAll(".mdc-icon-button");
    for (const button of mdcIconButtons) {
        MDCRipple.attachTo(button).unbounded = true;
    }
}

function onTogglePasswordVisibility(e) {
    const inputPassword = document.getElementById("password-inp");
    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        e.target.childNodes[2].textContent = "visibility_off";
    } else {
        inputPassword.type = "password";
        e.target.childNodes[2].textContent = "visibility";
    }
}