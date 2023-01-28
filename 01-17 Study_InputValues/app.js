/* const loginForm = document.getElementById("login-form") //or document.querySelector(); */
const logInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log("hello",logInPut.value);
    /*console.log("click !!!");*/
}
loginButton.addEventListener("click",onLoginBtnClick);
/*

With a querySelector statement, we can select an element based on a CSS selector. 
We can select elements by ID, class, or any other type of selector. 
With getElementById method, we can only select an element by its ID. 


*/
