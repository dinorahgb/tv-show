/*function onResetClick() {
  localStorage.removeItem("listFavorites");
}

buttonDelete.addEventListener("click", onResetClick);*/

function onDeleteFavoriteClick() {
  const allSeries = document.querySelectorAll(".js-serieFavorite");
  for (const serie of allSeries) {
    serie.addEventListener("click", selectDeleteFavorite);
  }
}

function selectDeleteFavorite(ev) {
  //const liSelect = ev.currentTarget;
  const serieId = parseInt(ev.currentTarget.id);
  const objSerie = listFavorites.find((serie) => serie.show.id === serieId);

  listFavorites.splice(objSerie, 1);

  paintFavorites();
}
