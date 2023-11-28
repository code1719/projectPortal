let cardsList = document.querySelector(".cards");
let cards = [];

// include a title and a URL link?????? for where I found the information on what a JS object is? https://www.w3schools.com/js/js_objects.asp

cards.map((item) => {
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
