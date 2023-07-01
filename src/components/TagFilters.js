// import { recipes } from "./data/recipe.js";
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
import listsDOM from "./lists.js";
import Searchbar from "./Searchbar.js";
import filterListTagsbyInputTag from "./filterInputTags.js";
import miniTags from "./miniTags.js"

export default class TagFilters {
    constructor(){
        // this.activeTags = [];
        // this.resultRecipesMiniTags = [];
        // this.recipesWithRepetition = [];
        // this.totalRecipesMiniTags = [];
        // this.resultRecipesMultipleMiniTags = [];
        // this.uniqueValues = [];
        // this.finalResultTotalMiniTags = [];
        // this.resultsRecipes = [];
        // this.listMiniTags = [];
        // this.totalMiniTags = [];
        // this.list = [];
        // this.ingredientsResult = [];
        // this.reducedIngredient = [];
        // this.appliancesResult = [];
        // this.reducedAppliance = [];
        // this.ustensilsResult = [];
        // this.reducedUstensils = [];
        this.miniTags = new miniTags();
    }

    initTagFilters(){
       console.log("tagfilter")

    //    this.openTags();
          // Initialize categories
      this.openTags("ingredients");
      this.openTags("appliances");
      this.openTags("ustensils");

      this.miniTags.createMiniTags();

    //   this.searchByMiniTags();

    //   this.initializeCategoryItems("#ingredients", "tag_item_ingredients", "ingredients");
    //   this.initializeCategoryItems("#appliances", "tag_item_appliances", "appliance");
    //   this.initializeCategoryItems("#ustensils", "tag_item_ustensils", "ustensils");

    //   this.updateResultsAndDOM();
    }

    openTags(categoryId) {

        const searchInput = document.querySelector(`#${categoryId}`);
        const searchLabelInput = document.querySelector(
          `.tag_control_${categoryId} label`
        );
        const searchExpand = document.querySelector(`.close_dropdown_${categoryId} i`);
        const searchListBlock = document.querySelector(
          `.tag_list_block_${categoryId}`
        );
        const searchWrapper = document.querySelector(`.tag_wrapper_${categoryId}`);
        const searchList = document.querySelector(`.tag_list_${categoryId}`);
        searchList.classList.remove("expand-search-list");
      
        // Click input
        searchExpand.addEventListener("click", () => {
          searchInput.value = "";
        //   searchInput.classList.remove("hide");
        //   searchLabelInput.classList.add("hide");
        //   searchWrapper.style.width = "20%";
        //   searchInput.style.width = "100%";
        //   searchListBlock.style.display = "block";
        searchExpand.classList.toggle("arrow-down-open");
            searchListBlock.classList.toggle("active");
          searchInput.focus();
        });
      
        // Input focus
        searchInput.addEventListener("focus", () => {
          searchListBlock.classList.remove("hide");
          searchExpand.classList.add("rotated");
        });
      
        // Click arrow button
        // searchExpand.addEventListener("click", () => {
        //   searchListBlock.classList.remove("hide");
        //   searchInput.classList.remove("hide");
        //   searchLabelInput.classList.add("hide");
        //   searchWrapper.classList.toggle("w-50");
        //   searchInput.classList.toggle("w-100");
        //   searchListBlock.classList.toggle("w-100");
        //   searchList.classList.toggle("expand-search-list");
        //   searchExpand.classList.add("rotated");
        //   searchInput.focus();
        // });
      
        // // Click outside div button
        // document.addEventListener("click", (evt) => {
        //   let targetEl = evt.target; // Clicked element
        //   do {
        //     if (targetEl == searchWrapper) {
        //       return;
        //     }
        //     // Go up the DOM
        //     targetEl = targetEl.parentNode;
        //   } while (targetEl);
      
        //   // Click outside
        //   searchInput.classList.add("hide");
        //   searchInput.value = "";
        //   searchLabelInput.classList.remove("hide");
        //   searchListBlock.classList.add("hide");
        //   searchExpand.classList.remove("rotated");
        //   searchWrapper.classList.remove("w-50");
        //   searchWrapper.style.width = "185px";
        //   searchInput.classList.remove("w-100");
        //   searchListBlock.classList.remove("w-100");
        //   searchList.classList.remove("expand-search-list");
      
        //   // Verify if list contains display none
        //   const searchListItems = document.querySelectorAll(
        //     `.tag_list_${categoryId} li`
        //   );
        //   // Replace display none with display block for list items
        //   searchListItems.forEach((list) => {
        //     if (list.style.display === "none") {
        //       list.style.display = "block";
        //     }
        //   });
        // });
    }
      
    searchByMiniTags(dataValue, value) {
        //recover all elements from miniTags
        console.log(this.listMiniTags)
        for (let i = 0; i < this.listMiniTags.length; i++) {
          totalMiniTags.push({
            datavalue: dataValue,
            value: this.listMiniTags[i].innerText.toLowerCase(),
          });
        }
        //remove repeated element from de list minitags
        function getUniqueListBy(arr, key) {
          return [...new Map(arr.map((item) => [item[key], item])).values()];
        }
        //remove repeated element from totalMiniTags
        this.totalMiniTags = getUniqueListBy(totalMiniTags, "datavalue");
        finalResultTotalMiniTags.push(...totalMiniTags);
      
        let valueLowCase = value.toLowerCase();
        // const inputResearch = document.getElementById("search");
      
        //filter inputs and minitags
        researchToLowerCase = inputResearch.value.toLowerCase();
      
        //filter input and minitags
        if (finalResultTotalMiniTags.length > 0 && researchToLowerCase.length === 0) {
          switch (dataValue) {
            case "ingredients":
              resultRecipesMiniTags = recipes.filter((obj) =>
                obj.ingredients.find(
                  (ingredient) => ingredient.ingredient.toLowerCase() === valueLowCase
                )
              );
              recipesWithRepetition.push(...resultRecipesMiniTags);
              UpdateItemsFromMiniTags();
              break;
      
            case "appliance":
              resultRecipesMiniTags = recipes.filter(
                (obj) => obj.appliance.toLowerCase() === valueLowCase
              );
              recipesWithRepetition.push(...resultRecipesMiniTags);
              UpdateItemsFromMiniTags();
              break;
      
            case "ustensils":
              resultRecipesMiniTags = recipes.filter((obj) =>
                obj.ustensils.find(
                  (ustensil) => ustensil.toLowerCase() === valueLowCase
                )
              );
              recipesWithRepetition.push(...resultRecipesMiniTags);
              UpdateItemsFromMiniTags();
              break;
          }
        } else if (
          finalResultTotalMiniTags.length === 0 &&
          researchToLowerCase.length === 0
        ) {
          results = recipes;
          this.populateTags(results);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(results);
          this.removeElementsFromListItems();
          this.resetAllArrays();
        } else if (
          finalResultTotalMiniTags.length > 0 &&
          researchToLowerCase.length > 2
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
                    (ingredient) => ingredient.ingredient.toLowerCase() === item.value
                  );
                case "appliance":
                  return obj.appliance.toLowerCase() === item.value;
                case "ustensils":
                  return obj.ustensils.find(
                    (ustensil) => ustensil.toLowerCase() === item.value
                  );
              }
            });
      
            this.populateTags(results);
            filterListTagsbyInputTag();
            this.miniTags.createMiniTags();
            this.createCardRecipesMiniTags(results);
            this.removeElementsFromListItems();
          });
        } else if (
          finalResultTotalMiniTags.length === 0 &&
          researchToLowerCase.length > 2
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
          this.populateTags(results);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(results);
          this.removeElementsFromListItems();
        }
      }
      
    createCardRecipesMiniTags(results) {
        // show/hide message no recipes
      
        if (results.length === 0) {
          MessageNoRecette.style.display = "block";
        } else {
          MessageNoRecette.style.display = "none";
        }
      
        // delete all cards
        const cardRecipe = document.querySelectorAll(".card-recipe");
        cardRecipe.forEach((item) => {
          item.remove();
        });
      
        // create new cards
        const rowCardsRecipes = document.querySelector(".cards-recipes");
        results.forEach((recipe) => {
          const cardRecipeModel = cardsFactory(recipe);
          const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
          rowCardsRecipes.appendChild(recipeCardDOM);
        });
      }
      
    removeElementsFromListItems() {
        finalResultTotalMiniTags = [...new Set(finalResultTotalMiniTags)];
      
        //remove element from the list of ingredients
        const listAllItems = document.querySelectorAll(".search-item");
        for (i = 0; i < listAllItems.length; i++) {
          for (j = 0; j < this.listMiniTags.length; j++) {
            if (listAllItems[i].innerText === this.listMiniTags[j].innerText) {
              listAllItems[i].remove();
            }
          }
        }
      }
      
    resetAllArrays() {
        // reset all arrays
        this.resultRecipesMiniTags = [];
        this.recipesWithRepetition = [];
        this.totalRecipesMiniTags = [];
        this.resultRecipesMultipleMiniTags = [];
        this.uniqueValues = [];
        this.finalResultTotalMiniTags = [];
        this.resultsRecipes = [];
        this.listMiniTags = [];
        this.totalMiniTags = [];
        this.list = [];
        this.ingredientsResult = [];
        this.reducedIngredient = [];
        this.appliancesResult = [];
        this.reducedAppliance = [];
        this.ustensilsResult = [];
        this.reducedUstensils = [];
      }
      
    finalResultTotalMiniTagsForEach() {
        finalResultTotalMiniTags.forEach((item) => {
          results = results.filter((obj) => {
            switch (item.datavalue) {
              case "ingredients":
                return obj.ingredients.find(
                  (ingredient) => ingredient.ingredient.toLowerCase() === item.value
                );
              case "appliance":
                return obj.appliance.toLowerCase() === item.value;
              case "ustensils":
                return obj.ustensils.find(
                  (ustensil) => ustensil.toLowerCase() === item.value
                );
            }
          });
      
          this.populateTags(results);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(results);
          this.removeElementsFromListItems();
        });
      }
      
    UpdateItemsFromMiniTags() {
        //remove repeated recipes from the list of minitags
        totalRecipesMiniTags = [...new Set(recipesWithRepetition)];
      
        finalResultTotalMiniTags.forEach((item) => {
          totalRecipesMiniTags = totalRecipesMiniTags.filter((obj) => {
            switch (item.datavalue) {
              case "ingredients":
                return obj.ingredients.find(
                  (ingredient) => ingredient.ingredient.toLowerCase() === item.value
                );
              case "appliance":
                return obj.appliance.toLowerCase() === item.value;
              case "ustensils":
                return obj.ustensils.find(
                  (ustensil) => ustensil.toLowerCase() === item.value
                );
            }
          });
      
          this.populateTags(totalRecipesMiniTags);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(totalRecipesMiniTags);
          this.removeElementsFromListItems();
        });
      }
      
    removeMiniTag(item) {
        const clickedElementValue = item.target || item.srcElement;
        const clickedElementValueLower =
          clickedElementValue.parentElement.innerText.toLowerCase();
        const clickedElementDataValue =
          clickedElementValue.parentElement.getAttribute("datavalue");
        const htmlElemToRemove = clickedElementValue.parentElement;
        htmlElemToRemove.remove();
      
        const pos = finalResultTotalMiniTags.findIndex(
          (obj) =>
            obj.datavalue === clickedElementDataValue &&
            obj.value === clickedElementValueLower
        );
        finalResultTotalMiniTags.splice(pos, 1);
      
        for (i = 0; i < this.listMiniTags.length; i++) {
          if (this.listMiniTags[i].innerText.toLowerCase() === clickedElementValueLower) {
            this.listMiniTags.splice(i, 1);
          }
        }
      
        let researchToLowerCase = inputResearch.value.toLowerCase();
      
        //
        // filter inputs and minitags
        //
      
        if (finalResultTotalMiniTags.length === 0 && researchToLowerCase.length > 2) {
          results = recipes.filter((obj) => {
            return (
              obj.name.toLowerCase().includes(researchToLowerCase) ||
              obj.description.toLowerCase().includes(researchToLowerCase) ||
              obj.ingredients.find((ingredient) =>
                ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
              )
            );
          });
          this.populateTags(results);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(results);
          this.removeElementsFromListItems();
          this.resetAllArrays();

        } else if (
          finalResultTotalMiniTags.length > 0 &&
          researchToLowerCase.length > 2
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
          finalResultTotalMiniTagsForEach();
        } else if (
          finalResultTotalMiniTags.length === 0 &&
          researchToLowerCase.length === 0
        ) {
          results = recipes;
          this.populateTags(results);
          filterListTagsbyInputTag();
          this.miniTags.createMiniTags();
          this.createCardRecipesMiniTags(results);
          this.resetAllArrays();
        } else if (
          finalResultTotalMiniTags.length > 0 &&
          researchToLowerCase.length === 0
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
          finalResultTotalMiniTagsForEach();
        }
      }

    //   test(){
    //     console.log("test")
    //   }


    createCardRecipesMiniTags(results) {
        // show/hide message no recipes
      
        if (results.length === 0) {
          MessageNoRecette.style.display = "block";
        } else {
          MessageNoRecette.style.display = "none";
        }
      
        // delete all cards
        const cardRecipe = document.querySelectorAll(".card");
        cardRecipe.forEach((item) => {
          item.remove();
        });
      
        // create new cards
        const rowCardsRecipes = document.querySelector(".cards_bloc");
        results.forEach((recipe) => {
          const cardRecipeModel = cardsFactory(recipe);
          const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
          rowCardsRecipes.appendChild(recipeCardDOM);
        });
      }


    // update ingredients-appareil-ustensils
    populateTags(results) {
        // get ingredients from results recipes
        let ingredientsResult = [];
        let reducedIngredient = [];
        results.forEach((recipe) => {
        if (recipe.ingredients.length) {
            const ingredientsMapResult = recipe.ingredients.map((ingr) =>
            ingr.ingredient.toLowerCase()
            );
            ingredientsResult.push(...ingredientsMapResult);
            reducedIngredient = [...new Set(ingredientsResult)]; //remove duplicates
        }
        });
    
        // remove all items from the lists
        const listAllItems = document.querySelectorAll(".tag_item");
        listAllItems.forEach((item) => {
        item.remove();
        });
    
        // remove ingredients from de tag ingredient
        reducedIngredient.forEach((element) => {
        const searchlistIngredients = document.querySelector(
            ".tag_list_ingredients"
        );
        const domIngredients = listsDOM(element, "ingredients");
        searchlistIngredients.append(domIngredients);
        });
    
        // get appliances from results recipes
        let appliancesResult = [];
        let reducedAppliance = [];
        results.forEach((recipe) => {
        if (recipe.appliance.length) {
            const appliancesMapResult = recipe.appliance.toLowerCase();
    
            appliancesResult.push(appliancesMapResult);
            reducedAppliance = [...new Set(appliancesResult)]; //remove duplicates
        }
        });
    
        // remove appliances from de tag appliance
        reducedAppliance.forEach((element) => {
        const searchListappliances = document.querySelector(
            ".tag_list_appliances"
        );
        const domAppliance = listsDOM(element, "appliances");
        searchListappliances.append(domAppliance);
        });
    
        // get ustensils from results recipes
        let ustensilsResult = [];
        let reducedUstensils = [];
        results.forEach((recipe) => {
        if (recipe.ustensils.length) {
            recipe.ustensils.forEach((item) => {
            ustensilsResult.push(item.toLowerCase());
            reducedUstensils = [...new Set(ustensilsResult)]; //remove duplicates
            });
        }
        });
        // remove ustensils from de tag appliance
        reducedUstensils.forEach((element) => {
        const searchListUstensils = document.querySelector(
            ".tag_list_ustensils"
        );
        const domUstensils = listsDOM(element, "ustensils");
        searchListUstensils.append(domUstensils);
        });
    }
      
    
}