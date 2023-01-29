const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();// 1.we stop the browser from refreshing the page
  loginForm.classList.add(HIDDEN_CLASSNAME); //2.we hide the form again
  const username = loginInput.value; // 3.we save the value of the login input in a variable called username
  localStorage.setItem(USERNAME_KEY, username); // 4.we save the username on the localtorage under the key username
  paintGreetings(username); // 5.we call the function paintGreetings, it will take the argument: username that the user wrote on the input of the form
}

function paintGreetings(username) { //we take
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; //we put some text on the greeting
    greeting.classList.remove(HIDDEN_CLASSNAME); //we remove the hidden classname
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //after app starts i try to get saved username on localstorage with username key


if (savedUsername === null) { //saved username exists so, the condition is false and the code below is not executed
  //it means there is no username on the local storage. localstorage is a tiny API that allows to delete, save and get from a tiny database the browser has
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername); //paintGreetings receives the string from the local storage
}

