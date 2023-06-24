import Searchbar from "./components/Searchbar.js";
import RecipeCard from "./components/Card.js";
import listsDOM from "./components/lists.js";
// import TagFilters from "./components/TagFilters.js";
import { recipes } from "./data/recipe.js";

let searchbar = new Searchbar();
searchbar.initSearchbar();

console.log("hellow")


// get all elements to create tag lists ingredients/appliance/ustensils
function getElementsInRecipes(recipes, elementToGet) {
  let list = [];

  switch (elementToGet) {
    case "ingredients":
      recipes.forEach((recipe) => {
        if (recipe.ingredients.length) {
          const ingredientsMap = recipe.ingredients.map((ingr) =>
            ingr.ingredient.toLowerCase()
          );
          list.push(...ingredientsMap);
        }
      });
      list = [...new Set(list)]; //remove repeated ingredients
      return list;

    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance.length) {
          const applianceMap = recipe.appliance.toLowerCase();
          list.push(applianceMap);
        }
      });
      list = [...new Set(list)]; //remove repeated appliance
      return list;

    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils.length) {
          const ustensilsMap = recipe.ustensils.map((ust) => ust.toLowerCase());
          list.push(...ustensilsMap);
        }
      });
      list = [...new Set(list)];
      return list;
  }
}


//create list elements for ingredients/appliances/ustensils
export function createListElements() {
  //  Create list
  //  elements for
  //  ingredients

  const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
  
  myIngredientsTags.forEach((element) => {
    const searchlistIngredients = document.querySelector(
      ".search-list-ingredients"
    );
    const domIngredients = listsDOM(element, "ingredients");
    searchlistIngredients.append(domIngredients);
  });

  // Create
  // list elements
  //  for appliance

  let myappliancesTags = getElementsInRecipes(recipes, "appliance");
  myappliancesTags.forEach((element) => {
    const searchListappliances = document.querySelector(
      ".search-list-appliances"
    );
    const domAppliance = listsDOM(element, "appliances");
    searchListappliances.append(domAppliance);
  });

  // Create list
  // elements for
  // ustensils

  const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
  myUstensilsTags.forEach((element) => {
    const searchlistUstensils = document.querySelector(
      ".search-list-ustensils"
    );
    const domUstensils = listsDOM(element, "ustensils");
    searchlistUstensils.append(domUstensils);
  });
  
}


function createCardRecipes() {
  const ingredientsContainer = document.querySelector(".cards_bloc");

  recipes.forEach((recipe) => {
    const cardRecipeModel = new RecipeCard(recipe);
    const recipeCardDOM = cardRecipeModel.RecipeCardDOM();
    ingredientsContainer.appendChild(recipeCardDOM);
  });
}


createListElements();
createCardRecipes();