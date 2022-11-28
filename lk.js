window.onload = function () {
  const controlForm = document.forms.control;
  // const checkBtn = controlForm.chkBtn;
  let text = (document.querySelector("#symbol_check").value = "");

  //   checkBtn.addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     text = controlForm.controlText.value;
  //     console.log(text);
  //     if (text === "G") {
  //       controlForm.controlText.innerHtml = "incorrect";
  //       console.log("Bad guy");
  //     } else {
  //       controlForm.controlText.innerHtml = text;
  //       console.log("Good guy");
  //     }
  //   });
  // };

  document.querySelector("#chkBtn").addEventListener("click", (event) => {
    event.preventDefault();
    text = document.querySelector("#symbol_check").value;
    console.log(text);
    if (text === "G") {
      document.querySelector("#symbol_check").innerHtml = "incorrect";
      console.log("Bad guy");
    } else {
      document.querySelector("#symbol_check").innerHtml = text;
      console.log("Good guy");
    }
  });
};
