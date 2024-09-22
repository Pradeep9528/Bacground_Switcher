let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#444";
let rgb2 = "#fff";

//containg hex values
const hexvalues = () => {
  let myhexvalues = "0123456789abcdef";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors = colors + myhexvalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handlebutton1 = () => {
  rgb1 = hexvalues();
  console.log(rgb1);
  btn1.innerTEXT = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2}`;
  copyDiv.innerHTML = `backgroundImage-linear-gradient(to right,${rgb1},${rgb2}`;
};

const handlebutton2 = () => {
  rgb2 = hexvalues();
  console.log(rgb2);
  btn2.innerTEXT = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2}`;
  copyDiv.innerHTML = `backgroundImage-linear-gradient(to right,${rgb1},${rgb2}`;
};

btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handlebutton2);
