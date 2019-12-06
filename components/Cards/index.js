// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(card) {
  const component = document.createElement("div");
  component.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = card.headline;
  component.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  component.appendChild(author);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.appendChild(imgContainer);

  const img = document.createElement("img");
  img.src = card.authorPhoto;
  imgContainer.appendChild(img);

  const byline = document.createElement("span");
  byline.textContent = `By ${card.authorName}`;
  author.appendChild(byline);

  return component;
}

function getCards() {
  axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
      Object.keys(res.data.articles).forEach(subject => {
        res.data.articles[subject].map(article => {
          document
            .querySelector(".cards-container")
            .appendChild(createCard(article));
        });
      });
    })
    .catch(err => console.error(err));
}

getCards();
