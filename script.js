function checkPassword() {
  if (document.lk.pass.value === document.lk.repeat.value) {
    document.getElementById("registration").style.visibility = "visible";
    document.getElementById("false").style.visibility = "hidden";
  } else document.getElementById("false").style.visibility = "visible";
  document.getElementById("registration").style.visibility = "hidden";
}
