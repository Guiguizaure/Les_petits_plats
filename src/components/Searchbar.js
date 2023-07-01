import {
    listMiniTags,
    results,
    resultRecipesMiniTags,
    recipesWithRepetition,
    totalRecipesMiniTags,
    resultRecipesMultipleMiniTags,
    uniqueValues,
    finalResultTotalMiniTags,
    resultsRecipes,
    totalMiniTags,
    researchToLowerCase,
    mixAll,
    valueLowCase
  } from './reset.js';
import filterListTagsbyInputTag from "./filterInputTags.js";
import TagFilters from "./TagFilters.js";
import miniTags from "./miniTags.js";
import { createListElements } from "../app.js"
import RecipeCard from "../components/Card.js";
import { recipes } from "../data/recipe.js";

export default class Searchbar {
    constructor(){
       this.searchbar = document.querySelector('#search-input')
       this.tagfilters = new TagFilters();
       this.miniTags = new miniTags();
    }

    initSearchbar(){
        this.globalSearchInput(this.searchbar)
    }

    globalSearchInput(value) {
        value.addEventListener("input", (e) => {
            let researchToLowerCase = this.searchbar.value.toLowerCase();
        
            //
            // filter inputs
            //
            if (e.target.value.length > 2 && finalResultTotalMiniTags.length === 0) {
            let results = recipes.filter((obj) => {
                return (
                //check if input keyword is is found in recipe's name and description
                obj.name.toLowerCase().includes(researchToLowerCase) ||
                obj.description.toLowerCase().includes(researchToLowerCase) ||
                //check if input keyword is is found in ingredients
                obj.ingredients.find((ingredient) =>
                    ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
                )
                );
            });
            this.createCardRecipesInput(results);
            this.tagfilters.populateTags(results);
            filterListTagsbyInputTag();
            this.miniTags.createMiniTags();

            } else if (
                e.target.value.length > 2 &&
                finalResultTotalMiniTags.length > 0
            ) {
                results = recipes.filter((obj) => {
                return (
                    obj.name.toLowerCase().includes(researchToLowerCase) ||
                    obj.description.toLowerCase().includes(researchToLowerCase) ||
                    obj.ingredients.find((ingredient) =>
                    ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
                    )
                );
                });
        
                finalResultTotalMiniTags.forEach((item) => {
                results = results.filter((obj) => {
                    switch (item.datavalue) {
                    case "ingredients":
                        return obj.ingredients.find(
                        (ingredient) =>
                            ingredient.ingredient.toLowerCase() === item.value
                        );
                    case "appliance":
                        return obj.appliance.toLowerCase() === item.value;
                    case "ustensils":
                        return obj.ustensils.find(
                        (ustensil) => ustensil.toLowerCase() === item.value
                        );
                    }
                });
        
                this.tagfilters.populateTags(results);
                filterListTagsbyInputTag();
                this.miniTags.createMiniTags();
                this.tagfilters.createCardRecipesMiniTags(results);
                this.tagfilters.removeElementsFromListItems();
                });  
            } else if (
                e.target.value.length === 0 &&
                finalResultTotalMiniTags.length > 0
              ) {
                results = recipes.filter((obj) => {
                  return (
                    obj.name.toLowerCase().includes(researchToLowerCase) ||
                    obj.description.toLowerCase().includes(researchToLowerCase) ||
                    obj.ingredients.find((ingredient) =>
                      ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
                    )
                  );
                });
          
                finalResultTotalMiniTags.forEach((item) => {
                  results = results.filter((obj) => {
                    switch (item.datavalue) {
                      case "ingredients":
                        return obj.ingredients.find(
                          (ingredient) =>
                            ingredient.ingredient.toLowerCase() === item.value
                        );
                      case "appliance":
                        return obj.appliance.toLowerCase() === item.value;
                      case "ustensils":
                        return obj.ustensils.find(
                          (ustensil) => ustensil.toLowerCase() === item.value
                        );
                    }
                  });
          
                  this.tagfilters.populateTags(results);
                  filterListTagsbyInputTag();
                   this.miniTags.createMiniTags();
                  this.tagfilters.createCardRecipesMiniTags(results);
                  this.tagfilters.removeElementsFromListItems();
                });
              } else if (
                e.target.value.length === 0 &&
                finalResultTotalMiniTags.length === 0
              ) {
                results = recipes;
                this.tagfilters.populateTags(results);
                filterListTagsbyInputTag();
                this.miniTags.createMiniTags();
                this.tagfilters.createCardRecipesMiniTags(results);
                this.tagfilters.resetAllArrays();
           
            //all cards appears if input value < 3
         } else if (
            e.target.value.length < 3 &&
            finalResultTotalMiniTags.length === 0
          ) {
            const cardRecipe = document.querySelectorAll(".card");
            if (cardRecipe.length) {
              cardRecipe.forEach((element) => {
                element.remove();
              });
            }
      
            // call function create all card recipes for input <2
            this.createCardRecipesInput(recipes);
      
            // remove all items from the lists
            const listAllItems = document.querySelectorAll(".tag_item");
            listAllItems.forEach((item) => {
              item.remove();
            });
            createListElements();
            filterListTagsbyInputTag();
            this.miniTags.createMiniTags();
          }
        });
    }


    createCardRecipesInput(results) {
        // show/hide message no recipes
        const MessageNoRecette = document.querySelector(".no_recipe_message");
        if (results.length === 0) {
            MessageNoRecette.style.display = "block";
        } else {
            MessageNoRecette.style.display = "none";
        }
        
        // delete all cards
        const recipeCard = document.querySelectorAll(".card");
        recipeCard.forEach((item) => {
            item.remove();
        });
        
        // create new cards
        const ingredientsContainer = document.querySelector(".cards_bloc");

        results.forEach((recipe) => {
            const cardRecipeModel = new RecipeCard(recipe);
            const recipeCardDOM = cardRecipeModel.RecipeCardDOM();
            ingredientsContainer.appendChild(recipeCardDOM);
        });

         // remove all items from the lists
        const listAllItems = document.querySelectorAll(".tag_item");
        // console.log(listAllItems)
        listAllItems.forEach((item) => {
            item.remove();
        });
    }

    
}

