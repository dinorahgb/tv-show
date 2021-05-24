"use strict";

function handlerSearchButton(ev) {
  const userTextSearch = textSearch.value;
  fetch(`//api.tvmaze.com/search/shows?q=${userTextSearch}`)
    .then((response) => response.json())
    .then((data) => {
      listResult = data;

      paintseries();
    });
}
/*function preventIntro(ev) {
  ev.preventDefault;
}*/

searchButton.addEventListener("click", handlerSearchButton);
