// main.js

import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";

//=======variables de mi aplicacion===========
//categoria activa
export let categoryActive = null;
//elemento activo
export let elementActive = null;
//setters para mis variables
export const setCategoryActive = (categoryIn) => {
  categoryActive = categoryIn;
};
export const setProductActive = (productIn) => {
  elementActive = productIn;
};
//render para ver la store
renderCategories();
handleGetProductsToStore();

//barra de busqueda
const buttonConfirmSearch = document.getElementById("buttonSearch");
buttonConfirmSearch.addEventListener("click", () => {
  handleSearchProductByName();
});
