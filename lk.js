window.onload = function () {
  const controlForm = document.forms.control;
  const checkBtn = controlForm.chkBtn;
  const setColorButton = controlForm.colorBtn;
  const setDateButton = controlForm.setDateButton;

  checkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let text = document.querySelector("#symbol__check").value;
    if (text === "G") {
      document.querySelector("#symbol_check").value = "incorrect input, please, try again";
    } else {
      document.querySelector("#symbol_check").value = text;
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

  const regForm = document.forms.lk;
  const sendReg = regForm.sendRegistration;

  sendReg.addEventListener("click", (event) => {
    event.preventDefault();
    let login = regForm.login.value;
    // regForm.login.value = login;
    console.log(login);
  });
};

// document.querySelector("#chkBtn") === document.forms.control.chkBtn
