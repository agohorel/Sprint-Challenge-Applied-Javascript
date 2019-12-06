/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

document.querySelector(".carousel-container").appendChild(createCarousel());

function createCarousel() {
  const imgs = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];

  const component = document.createElement("div");
  component.classList.add("carousel");

  const backBtn = document.createElement("div");
  backBtn.classList.add("left-button");
  backBtn.addEventListener("click", () => {
    updateOrder("backward");
  });
  component.appendChild(backBtn);

  const backIcon = document.createElement("p");
  backIcon.textContent = "⮜";
  backIcon.classList.add("back-icon");
  backBtn.appendChild(backIcon);

  imgs.map((img, index) => createImage(img, index, component));

  const forwardBtn = document.createElement("div");
  forwardBtn.classList.add("right-button");
  forwardBtn.addEventListener("click", () => {
    updateOrder("forward");
  });
  component.appendChild(forwardBtn);

  const forwardIcon = document.createElement("p");
  forwardIcon.textContent = "⮞";
  forwardIcon.classList.add("forward-icon");
  forwardBtn.appendChild(forwardIcon);

  return component;
}

function createImage(path, index, parent) {
  const img = document.createElement("img");
  img.src = path;
  img.setAttribute("data-index", index);
  parent.appendChild(img);
}

function updateOrder(direction) {
  const imgs = document.querySelectorAll(".carousel img");

  imgs.forEach(img => {
    let idx = Number(img.getAttribute("data-index"));

    switch (direction) {
      case "backward":
        if (idx < imgs.length - 1) {
          img.setAttribute("data-index", (idx + 1).toString());
        } else if (idx === imgs.length - 1) {
          img.setAttribute("data-index", "0");
        }
        break;
      case "forward":
        if (idx > 0) {
          img.setAttribute("data-index", (idx - 1).toString());
        } else if (idx === 0) {
          img.setAttribute("data-index", imgs.length - 1);
        }
        break;
    }
  });
}
