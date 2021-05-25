"use strict";

function handlerSearchButton(ev) {
  const userTextSearch = textSearch.value;
  fetch(`//api.tvmaze.com/search/shows?q=${userTextSearch}`)
    .then((response) => response.json())
    .then((data) => {
      listResult = data;

      paintSeries();
    });
}

searchButton.addEventListener("click", handlerSearchButton);

function handlerFormSubmit(ev) {
  ev.preventDefault();
}

formSearch.addEventListener("submit", handlerFormSubmit);
