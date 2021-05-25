//DeleteListFavoritos
function onResetClick() {
  listFavorites = [];

  paintFavorites();
  saveListFavorites();
}

buttonDelete.addEventListener("click", onResetClick);

//DeleteOneFavorito

function onDeleteFavoriteClick() {
  const allSeries = document.querySelectorAll(".js-serieFavorite");
  for (const serie of allSeries) {
    serie.addEventListener("click", selectDeleteFavorite);
  }
}

function selectDeleteFavorite(ev) {
  const serieId = parseInt(ev.currentTarget.id);
  const serieIndex = listFavorites.findIndex(
    (serie) => serie.show.id === serieId
  );

  listFavorites.splice(serieIndex, 1);

  paintFavorites();
  saveListFavorites();
}
