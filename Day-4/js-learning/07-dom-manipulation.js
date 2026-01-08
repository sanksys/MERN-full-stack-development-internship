/*
DOM MANIPULATION
*/

document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked");
});

/*
DOM MANIPULATION
----------------
Old way (Vanilla JS)
*/

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = "lightblue";
});

/*
Problems:
- Manual DOM updates
- Hard to manage state

React solves this.
*/
