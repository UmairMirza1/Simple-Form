window.onload = function () {
  //alert("welcome");
};

checkrequirements = function () {
  email = document.getElementById("email");
  cnic = document.getElementById("cnic");
  dob = document.getElementById("dob");
  time = document.getElementById("time");
  phone = document.getElementById("phone_number");
  submitButton = document.getElementById("submit");

  if (
    email.value != "" &&
    cnic.value != "" &&
    dob.value != "" &&
    time.value &&
    time.value != "" &&
    phone.value != ""
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

changeLegendColour = function (color) {
  legend = document.getElementById("legend");

  switch (color) {
    case "green":
      legend.style.backgroundColor = "green";
      break;

    case "blue":
      legend.style.backgroundColor = "blue";
      break;
    case "red":
      legend.style.backgroundColor = "red";
      break;
  }
};

onsubmit = function () {
  console.log("click");
  alert("Your response has been recorded");
  return false;
};
