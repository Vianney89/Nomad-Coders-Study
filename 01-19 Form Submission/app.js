const loginInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInPut.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
//never trust the user
