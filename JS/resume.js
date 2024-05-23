const Form = document.querySelector("#myForm");
const msg = document.querySelector("#msg");

Form.addEventListener("submit", (e) => {
  let message = [];

  // const fname = document.querySelector(".Fname").value;
  // if (fname.length < 1) {
  //   message.push("first name is nissing");
  // }

  // const lname = document.querySelector(".Lname").value;
  // if (fname.length < 1) {
  //   message.push("last name is nissing");
  // }
  message = isFilled(".Fname", message, "first name is missing");
  message = isFilled(".Lname", message, "last name is missing");
  message = isFilled(".Email", message, "Email name is missing");
  message = isEmail(".Email", message, "Email name is out of format");
  if (message.length > 0) {
    // thers is an erro
    msg.innerHTML =
      "Issuse found [" + message.length + "]" + message.join(", ");
    // prevent

    e.preventDefault();
  }
});
function isFilled(selector, message, msg) {
  const elment = document.querySelector(selector).value;
  if (elment.length < 1) {
    message.push(msg);
  }
  return message;
}
function isEmail(selector, message, msg) {
  const elment = document.querySelector(selector).value;
  if (!elment.match("[a-z0-9]+@[a-z]+.[a-z]{2,4}")) {
    message.push(msg);
  }
  return message;
}
