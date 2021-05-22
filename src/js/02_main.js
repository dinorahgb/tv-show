"use strict";

function handlersearchButton() {
  const changetextSearch = textSerch.value;
  fetch(`http://api.tvmaze.com/search/shows?${changetextSearch}`)
    .then((response) => response.json())
    .then((data) => {});
}

searchButton.addEventListener("click", handlersearchButton);
