// import arrayReset from "./components/reset.js";
import TagFilters from "./TagFilters.js"

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



//
// Create
// minitags
//

export default class MiniTags {
    constructor(){
    //    this.searchbar = document.querySelector('#search-input')
        this.listMiniTags = [];
        this.miniTags = document.querySelector("#mini-tags");
        // const tagfilters = new TagFilters();
    }

    // initMiniTags(){

    // }

    miniTagsDOM(value, color, type) {
        const wrapper = document.createElement("button");
      
        wrapper.setAttribute("type", "button");
        wrapper.setAttribute("datavalue", `${type}`);
        wrapper.classList.add("btn", `btn-${color}`, "text-white");
        wrapper.classList.add("tag-button");
      
        let miniTagCard = "";
        miniTagCard += `
        
        ${value.charAt(0).toUpperCase() + value.slice(1)}
        <i class="far fa-times-circle fa-lg close-tag"></i>
      
          `;
        wrapper.innerHTML = miniTagCard;
        return wrapper;
    }

    createMiniTags() {
        //
        //Ingredients
        //
        let listItemIngredients = document.querySelectorAll(
          ".tag_item_ingredients"
        );
    
      
        for (let i = 0; i < listItemIngredients.length; i++) {
          listItemIngredients[i].addEventListener("click", () => {
            // console.log('testminitag')
            this.listMiniTags.push(listItemIngredients[i]);
      
            const miniTagsChild = this.miniTagsDOM(
              listItemIngredients[i].innerText.toLowerCase(),
              "primary",
              "ingredients"
            );
      
            miniTagsChild.addEventListener("click", (u) => {
              removeMiniTag(u);
            });
      
            this.miniTags.appendChild(miniTagsChild);
            searchByMiniTags(
              "ingredients",
              listItemIngredients[i].innerText.toLowerCase()
            );
          });
        }
      
        //
        // Appliances
        //
        const listItemAppliances = document.querySelectorAll(
          ".tag_item_appliances"
        );
      
        for (let i = 0; i < listItemAppliances.length; i++) {
          listItemAppliances[i].addEventListener("click", (e) => {
            this.listMiniTags.push(listItemAppliances[i]);
      
            const miniTagsChild = this.miniTagsDOM(
              listItemAppliances[i].innerText.toLowerCase(),
              "success",
              "appliance"
            );
      
            miniTagsChild.addEventListener("click", (u) => {
              removeMiniTag(u);
            });
      
            this.miniTags.appendChild(miniTagsChild);
            searchByMiniTags(
              "appliance",
              listItemAppliances[i].innerText.toLowerCase()
            );
          });
        }
      
        //
        //Ustensils
        //
        const listItemUstensils = document.querySelectorAll(".tag_item_ustensils");
      
        for (let i = 0; i < listItemUstensils.length; i++) {
          listItemUstensils[i].addEventListener("click", (e) => {
            this.listMiniTags.push(listItemUstensils[i]);
            const miniTagsChild = this.miniTagsDOM(
              listItemUstensils[i].innerText.toLowerCase(),
              "danger",
              "ustensils"
            );
            miniTagsChild.addEventListener("click", (u) => {
              removeMiniTag(u);
            });
            this.miniTags.appendChild(miniTagsChild);
            searchByMiniTags(
              "ustensils",
              listItemUstensils[i].innerText.toLowerCase()
            );
          });
        }
      }
}



// export function createMiniTag(item, category) {
//         item.addEventListener("click", () => {
//             listMiniTags.push(item);
        
//             const miniTagsChild = minitagsDOM(
//               item.innerText.toLowerCase(),
//               category
//             );
        
//             miniTagsChild.addEventListener("click", (u) => {
//               removeMiniTag(u);
//             });
        
//             miniTags.appendChild(miniTagsChild);
//             searchByMiniTags(category, item.innerText.toLowerCase());
//         });
//     }


// export function initializeCategoryItems(categoryId, className, category) {
//     const listItems = document.querySelectorAll(`.${className}`);

//     for (let i = 0; i < listItems.length; i++) {
//     addClickListener(listItems[i], category);
//     }
// }

// export function filterByMiniTags(dataValue, value){
//     const valueLowerCase = value.toLowerCase();
//     const researchToLowerCase = inputResearch.value.toLowerCase();

//     if (finalResultTotalMiniTags.length === 0 && researchToLowerCase.length > 2) {
//         results = filterRecipesBySearchValue(recipes, researchToLowerCase);
//         updateResultsAndDOM(results);
//         resetAllArrays();
//     } else if (
//         finalResultTotalMiniTags.length > 0 &&
//         researchToLowerCase.length > 2
//     ) {
//         results = filterRecipesBySearchValue(recipes, researchToLowerCase);
//         finalResultTotalMiniTags.forEach((item) => {
//         results = filterRecipesByMiniTag(results, item);
//         });
//         updateResultsAndDOM(results);
//     } else if (
//         finalResultTotalMiniTags.length === 0 &&
//         researchToLowerCase.length === 0
//     ) {
//         results = recipes;
//         updateResultsAndDOM(results);
//         resetAllArrays();
//     } else if (
//         finalResultTotalMiniTags.length > 0 &&
//         researchToLowerCase.length === 0
//     ) {
//         results = filterRecipesByMiniTags(results, finalResultTotalMiniTags);
//         updateResultsAndDOM(results);
//     }
// }

// export function filterRecipesBySearchValue(recipes, searchValue) {
//     return recipes.filter((obj) => {
//         return (
//         obj.name.toLowerCase().includes(searchValue) ||
//         obj.description.toLowerCase().includes(searchValue) ||
//         obj.ingredients.find((ingredient) =>
//             ingredient.ingredient.toLowerCase().includes(searchValue)
//         )
//         );
//     });
// }

// export function filterRecipesByMiniTag(recipes, miniTag) {
//     return recipes.filter((obj) => {
//         switch (miniTag.datavalue) {
//         case "ingredients":
//             return obj.ingredients.find(
//             (ingredient) => ingredient.ingredient.toLowerCase() === miniTag.value
//             );
//         case "appliance":
//             return obj.appliance.toLowerCase() === miniTag.value;
//         case "ustensils":
//             return obj.ustensils.find(
//             (ustensil) => ustensil.toLowerCase() === miniTag.value
//             );
//         }
//     });
// }

// export function updateResultsAndDOM(results) {
//     populateTags(results);
//     filterListTagsbyInputTag();
//     createMiniTags();
//     createCardRecipesMiniTags(results);
//     removeElementsFromListItems();
// }