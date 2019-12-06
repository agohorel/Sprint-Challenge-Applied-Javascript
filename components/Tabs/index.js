// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic) {
  const component = document.createElement("div");
  component.classList.add("tab");
  component.textContent = topic;

  return component;
}

function getTopics() {
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
      res.data.topics.map(topic => {
        document.querySelector(".topics").appendChild(createTab(topic));
      });
    })
    .catch(err => console.error(err));
}

getTopics();
