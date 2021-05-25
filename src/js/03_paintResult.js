function paintSeries() {
  listResultElement.innerHTML = "";
  for (const serie of listResult) {
    const listSerie = document.createElement("li");
    listSerie.setAttribute("class", "js-serie");
    listSerie.setAttribute("id", serie.show.id);
    const titleSerie = document.createElement("h3");
    titleSerie.setAttribute("class", "js-serieTitle");
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

    let idFavorite = listFavorites.findIndex((favorite) => {
      return favorite.show.id === serie.show.id;
    });

    if (idFavorite !== -1) {
      listSerie.classList.add("js-favorite");
    }

    onFavoriteClick();
  }
}
