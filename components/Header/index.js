// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader() {
  const component = document.createElement("div");
  component.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = "SMARCH 28, 2019";
  component.appendChild(date);

  const headline = document.createElement("h1");
  headline.textContent = "Lambda Times";
  component.appendChild(headline);

  const temperature = document.createElement("span");
  temperature.textContent = "98°";
  component.appendChild(temperature);

  return component;
}

document.querySelector(".header-container").appendChild(createHeader());

// DARK MODE STUFF
const darkModeBtn = document.querySelector("#dark-mode");
let isDarkMode = false;

darkModeBtn.addEventListener("click", () => {
    toggleDarkMode(isDarkMode);
});

function toggleDarkMode(){
    isDarkMode = !isDarkMode;

    const background = document.querySelector("body");
    const brightContent = document.querySelectorAll(".header-container .header, .tabs, .card");
    const darkContent = document.querySelectorAll(".headline, .card .author span, .header .date, .header span, .topics .title, .header h1");

    if (isDarkMode){
        background.style.backgroundColor = "#1c1c1c";

        brightContent.forEach(el => el.style.backgroundColor = "#3c3c3c");

        darkContent.forEach(el => el.style.color = "#efefef");

    } else {
        background.style.backgroundColor = "#f1f1f1";

        brightContent.forEach(el => (el.style.backgroundColor = "#fff"));

        darkContent.forEach(el => (el.style.color = "#000"));
    }
}