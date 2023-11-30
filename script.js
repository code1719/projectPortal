let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");
let currentyear = new Date().getFullYear();
let year = document.querySelector("#year");
let cardsList = document.querySelector(".cards");
let cards = [];

date.textContent = currentDate;
year.textContent = currentyear;

const card1 = {
  title: "Project1",
  url: "./Project1/index.html",
};

const card2 = {
  title: "Project2",
  url: ".Project2/index.html",
};

const card3 = {
  title: "Project3",
  url: ".Project3/index.html",
};

cards.push(card1);
cards.push(card2);
cards.push(card3);

// include a title and a URL link?????? for where I found the information on what a JS object is? https://www.w3schools.com/js/js_objects.asp

cards.map((card) => {
  cardsList.innerHTML += `<div class="card">
          <div class="card-inner">
              <div class="card-front">
                  <h2>${card.title}</h2>
              </div>
              <div class="card-back">
                   <a href="./${card.title}/index.html">Project 1</a>
              </div>
          </div>
    </div>`;
});
