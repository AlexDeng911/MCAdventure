const regForm = document.forms.lk;
const sendReg = regForm.sendRegistration;

sendReg.addEventListener("click", (event) => {
    event.preventDefault();
    let login = document.querySelector("#login").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let confirm = document.querySelector("#confirm__pass").value;
    let phone = document.querySelector("#phone").value;

    document.querySelector("#login").innerText = login;
    document.querySelector("#email").innerText = email;
    document.querySelector("#phone").innerText = phone;
    if (pass === confirm) {
        document.querySelector("#registration").innerText = "* Registration - OK";
    } else {
        document.querySelector("#registration").innerText = "* password is not the same ";
    }
    console.log(login, email, phone, pass);
});
