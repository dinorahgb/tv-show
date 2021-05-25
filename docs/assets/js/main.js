"use strict";const formSearch=document.querySelector(".js-form"),searchButton=document.querySelector(".js-buttonSearch"),textSearch=document.querySelector(".js-textSearch"),listResultElement=document.querySelector(".js-listResult"),listFavoritesElement=document.querySelector(".js-listFavorites"),buttonDelete=document.querySelector(".js-buttonDelete"),imageDefault="//via.placeholder.com/210x295/ffffff/666666/?text=TV";let listFavorites=[],listResult=[];function handlerSearchButton(e){const t=textSearch.value;fetch("//api.tvmaze.com/search/shows?q="+t).then(e=>e.json()).then(e=>{listResult=e,paintSeries()})}function handlerFormSubmit(e){e.preventDefault()}function paintSeries(){listResultElement.innerHTML="";for(const e of listResult){const t=document.createElement("li");t.setAttribute("class","js-serie"),t.setAttribute("id",e.show.id);const s=document.createElement("h3");s.setAttribute("class","js-serieTitle"),t.appendChild(s);const i=document.createTextNode(e.show.name);s.appendChild(i),listResultElement.appendChild(t);const o=document.createElement("img");t.appendChild(o),null===e.show.image?o.src=imageDefault:o.src=e.show.image.medium,-1!==listFavorites.findIndex(t=>t.show.id===e.show.id)&&t.classList.add("js-favorite"),onFavoriteClick()}}function onFavoriteClick(){const e=document.querySelectorAll(".js-serie");for(const t of e)t.addEventListener("click",selectFavorite)}function selectFavorite(e){const t=e.currentTarget,s=parseInt(e.currentTarget.id);t.classList.add("js-liSelect");if(-1===listFavorites.findIndex(e=>e.show.id===s)){const e=listResult.find(e=>e.show.id===s);listFavorites.push(e)}else alert("Esta serie ya está en favoritos");paintFavorites()}function paintFavorites(){listFavoritesElement.innerHTML="";for(const e of listFavorites){const t=document.createElement("li");t.setAttribute("class","js-serieFavorite"),t.setAttribute("id",e.show.id);const s=document.createElement("h3");s.setAttribute("class","js-serieTitle"),t.appendChild(s);const i=document.createTextNode(e.show.name);s.appendChild(i),listFavoritesElement.appendChild(t);const o=document.createElement("img");t.appendChild(o),null===e.show.image?o.src=imageDefault:o.src=e.show.image.medium,saveListFavorites(),onDeleteFavoriteClick()}}searchButton.addEventListener("click",handlerSearchButton),formSearch.addEventListener("submit",handlerFormSubmit);const saveListFavorites=()=>{localStorage.setItem("ListFavorite",JSON.stringify(listFavorites))},getFavorites=()=>{let e=JSON.parse(localStorage.getItem("ListFavorite"));paintFavorites(),null!==e&&(listFavorites=e),paintFavorites()};function onResetClick(){listFavorites=[],paintFavorites(),saveListFavorites()}function onDeleteFavoriteClick(){const e=document.querySelectorAll(".js-serieFavorite");for(const t of e)t.addEventListener("click",selectDeleteFavorite)}function selectDeleteFavorite(e){const t=parseInt(e.currentTarget.id),s=listFavorites.findIndex(e=>e.show.id===t);listFavorites.splice(s,1),paintFavorites(),saveListFavorites()}getFavorites(),buttonDelete.addEventListener("click",onResetClick);