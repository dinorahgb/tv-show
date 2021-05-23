"use strict";

const searchButton = document.querySelector(".js-buttonSearch");
const textSearch = document.querySelector(".js-textSearch");
const listResultElement = document.querySelector(".js-listResult");
const listFavoritesElement = document.querySelector(".js-listFavorites");
const imageDefault =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";

let listFavorites = [];
let listResult = [];
