function myFunction() {
  var x = document.getElementById("navlinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function toggleFunction() {
var isDarkMode= localStorage.getItem('dark-or-light-mode');
var element = document.body;
element.classList.toggle("dark-mode");
var item = document.getElementById("toggleBtn");

if(isDarkMode==='light')
{
item.classList.remove("fa-toggle-on");
item.classList.add("fa-toggle-off");
localStorage.setItem('dark-or-light-mode', 'dark')
}
else if(isDarkMode==='dark')
{
item.classList.remove("fa-toggle-off");
item.classList.add("fa-toggle-on");
localStorage.setItem('dark-or-light-mode', 'light')
}
}

function jumpTo(l) {
  var letter = l.textContent;
  // console.log(letter);
  if (letter === "A"){
    const element = document.getElementById("firstA");
    element.scrollIntoView();
  }
  if (letter === "B"){
    const element = document.getElementById("firstB");
    element.scrollIntoView();
  }
  if (letter === "E"){
    const element = document.getElementById("firstE");
    element.scrollIntoView();
  }
  if (letter === "F"){
    const element = document.getElementById("firstF");
    element.scrollIntoView();
  }
  if (letter === "G"){
    const element = document.getElementById("firstG");
    element.scrollIntoView();
  }
  if (letter === "H"){
    const element = document.getElementById("firstH");
    element.scrollIntoView();
  }
  if (letter === "I"){
    const element = document.getElementById("firstI");
    element.scrollIntoView();
  }
  if (letter === "O"){
    const element = document.getElementById("firstO");
    element.scrollIntoView();
  }
  if (letter === "P"){
    const element = document.getElementById("firstP");
    element.scrollIntoView();
  }
  if (letter === "S"){
    const element = document.getElementById("firstS");
    element.scrollIntoView();
  }
}