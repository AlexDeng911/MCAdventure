const controlForm = document.forms.control;
const checkBtn = controlForm.chkBtn;
const setColorButton = controlForm.colorBtn;
const setDateButton = controlForm.setDateButton;

checkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let text = document.querySelector("#symbol__check").value;
    if (text === "G") {
        document.querySelector("#symbol__check").value = "incorrect input, please, try again";
    } else {
        document.querySelector("#symbol__check").value = text;
    }
});

setColorButton.addEventListener("click", (event) => {
    event.preventDefault();
    let color = document.querySelector("#set__color").value;
    document.querySelector(".colorNumber").innerHTML = color;
});

setDateButton.addEventListener("click", (event) => {
    event.preventDefault();
    let dateRecord = document.querySelector("#set__date").value;
    document.querySelector(".dateRecord").innerText = dateRecord;
});

// document.querySelector("#chkBtn") === document.forms.control.chkBtn;
