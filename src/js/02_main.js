"use strict";

function handlerSearchButton() {
  const userTextSearch = textSearch.value;
  fetch(`https://api.tvmaze.com/search/shows?q=${userTextSearch}`)
    .then((response) => response.json())
    .then((data) => {
      listResult = data;

      paintseries();
    });
}

function paintseries() {
  for (const serie of listResult) {
    const listSerie = document.createElement("li");
    const titleSerie = document.createElement("h3");
    listSerie.appendChild(titleSerie);
    const nameSerie = document.createTextNode(serie.show.name);
    titleSerie.appendChild(nameSerie);
    listResultElement.appendChild(listSerie);
    const serieImage = document.createElement("img");
    listSerie.appendChild(serieImage);

    if (serie.show.image === null) {
      serieImage.src = imageDefault;
    } else {
      serieImage.src = serie.show.image.medium;
    }
  }
}

searchButton.addEventListener("click", handlerSearchButton);

/* Escuchar evento sobre la serie para añadir a favoritos
pintar en lista de favoritos
evento sobre botón de borrar lista de favoritos*/
