window.onload = function () {
  const regForm = document.forms.lk;
  const sendReg = regForm.sendRegistration;

  sendReg.addEventListener("click", (event) => {
    event.preventDefault();
    let login = document.querySelector("#login").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let confirm = document.querySelector("#confirm__pass").value;

    document.querySelector("#login").innerText = login;
    document.querySelector("#email").innerText = email;
    if (pass === confirm) {
      document.querySelector("#registration").innerText = "* Registration - OK";
    } else {
      document.querySelector("#registration").innerText = "* password is not the same ";
    }
    console.log(login, email, pass);
  });

  const controlForm = document.forms.control;
  const checkBtn = controlForm.chkBtn;
  const setColorButton = controlForm.colorBtn;
  const setDateButton = controlForm.setDateButton;

  checkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let text = document.querySelector("#symbol__check").value;
    console.log(text)
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
};


// submit - почему не работает?