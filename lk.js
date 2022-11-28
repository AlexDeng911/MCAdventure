window.onload = function () {
  const controlForm = document.forms.control;
  const checkBtn = controlForm.chkBtn;

  checkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let text = document.querySelector("#symbol_check").value;
    if (text === "G") {
      document.querySelector("#symbol_check").value = "incorrect input, please, try again";
    } else {
      document.querySelector("#symbol_check").value = text;
    }
  });
};

// document.querySelector("#chkBtn") === document.forms.control.chkBtn