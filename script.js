console.log(`script.js is loaded`);
let a = document.getElementById("text");
function battery() {
 a.innerHTML = "battery: on";
  b = "true";
}
function off() {
  a.innerHTML = "battery: off";
  c.src = "lightbulb-icon.jpg";
  b = "false";
}
let c = document.getElementById("po");
let b = "false";
function accept() {
  if (b === "true" && !(b === "false")) {
   c.src = "on.png";
  }
  else {
    c.src = "lightbulb-icon.jpg";
  }
 }
function un() {
  c.src = "lightbulb-icon.jpg";
}