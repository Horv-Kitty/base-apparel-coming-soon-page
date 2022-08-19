function sendEmail(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email");
  let errorMessage = document.querySelector("#email-error-message");
  let validMessage = document.querySelector("#email-valid-message");
  let errorIcon = document.querySelector("#error-icon");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    validMessage.innerHTML = "Thank you. You'll hear about us soon!";
    errorMessage.innerHTML = "";
    errorIcon.innerHTML = ``;
    document.getElementById("email").className =
      document.getElementById("email").className + " green-border";
    document.getElementById("email").className = document
      .getElementById("email")
      .className.replace(" red-border", "");
    return true;
  } else {
    errorMessage.innerHTML = "Please, provide a valid email address!";
    validMessage.innerHTML = "";
    errorIcon.innerHTML = `<img src="src/images/icon-error.svg" />`;
    document.getElementById("email").className =
      document.getElementById("email").className + " red-border";
    document.getElementById("email").className = document
      .getElementById("email")
      .className.replace(" green-border", "");
    return false;
  }
}

let button = document.querySelector("#form-button");
button.addEventListener("click", sendEmail);

let email = document.querySelectorAll("form");
