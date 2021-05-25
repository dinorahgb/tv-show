const saveListFavorites = () => {
  localStorage.setItem("ListFavorite", JSON.stringify(listFavorites));
};

const getFavorites = () => {
  let favorites = JSON.parse(localStorage.getItem("ListFavorite"));
  paintFavorites();
  if (favorites !== null) {
    listFavorites = favorites;
  }
  paintFavorites();
};
getFavorites();
