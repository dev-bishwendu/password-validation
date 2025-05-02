const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const password = passwordInput.value;

  if (!name) {
    showMessage("Invalid Name", "red");
  } else if (isValidPassword(password)) {
    showMessage("Logged In Successfully", "green");
    nameInput.value = "";
    passwordInput.value = "";
  } else {
    showMessage("Invalid Password", "red");
  }
});

const isValidPassword = (p) =>
  p.length >= 8 &&
  p.length <= 20 &&
  /[A-Z]/.test(p) &&
  /[a-z]/.test(p) &&
  /[0-9]/.test(p) &&
  /[!@#$%^&*]/.test(p);

const showMessage = (msg, color) => {
  result.innerHTML = `<p style="background-color: ${color}; color: #fff; padding: 10px;">${msg}</p>`;
};
