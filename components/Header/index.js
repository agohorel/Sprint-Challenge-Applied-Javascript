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