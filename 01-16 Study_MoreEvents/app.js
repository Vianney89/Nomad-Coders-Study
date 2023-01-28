const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here !";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone !";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("no copy allowed !");
}

function handleWindowOffline() {
  alert("no WI-FI ! We are all gonna die !");
}

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize); //message when the size of the screen change
window.addEventListener("copy", handleWindowCopy); //message when try to copy or ctrl+c
window.addEventListener("offline", handleWindowOffline); //message when wifi disconnects

//other ways to write addEventListener
//title.onclick = handleTitleClick;
//title.onclick =handleMouseEnter;
//title.onclick =handleMouseLeave;
//other way to write addEventListener
