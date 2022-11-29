window.onload = function () {
  const controlForm = document.forms.control;
  const control__text = controlForm.controlText;
  const checkBtn = controlForm.checkButton;

  let ex = "G";
  control__text.addEventListener("change", (e) => {
    if (control__text.value === ex) {
      console.log("Incorrect sign");
    }
  });
};
