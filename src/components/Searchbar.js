
const inputResearch = document.getElementById('search-input');

function globalSearchInput(value) {
  value.addEventListener('input', (e) => {
    let researchToLowerCase = inputResearch.value.toLowerCase();
    //
    // filter inputs and minitags
    //

    // Case: Input length > 2 and no mini tags selected
    if (e.target.value.length > 2 && finalResultTotalMiniTags.length === 0) {
      let results = [];
      for (let i = 0; i < recipes.length; i++) {
        let obj = recipes[i];
        if (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        ) {
          results.push(obj);
        }
      }
      createCardRecipesInput(results);
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
    }

    // Case: Input length > 2 and mini tags selected
    else if (
      e.target.value.length > 2 &&
      finalResultTotalMiniTags.length > 0
    ) {
      results = recipes;
      for (let i = 0; i < finalResultTotalMiniTags.length; i++) {
        let item = finalResultTotalMiniTags[i];
        let filteredResults = [];
        for (let j = 0; j < results.length; j++) {
          let obj = results[j];
          switch (item.datavalue) {
            case 'ingredients':
              if (
                obj.ingredients.some(
                  (ingredient) =>
                    ingredient.ingredient.toLowerCase() === item.value
                )
              ) {
                filteredResults.push(obj);
              }
              break;
            case 'appliance':
              if (obj.appliance.toLowerCase() === item.value) {
                filteredResults.push(obj);
              }
              break;
            case 'ustensils':
              if (
                obj.ustensils.some(
                  (ustensil) => ustensil.toLowerCase() === item.value
                )
              ) {
                filteredResults.push(obj);
              }
              break;
          }
        }
        results = filteredResults;
      }

      let filteredResults = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        if (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        ) {
          filteredResults.push(obj);
        }
      }

      results = filteredResults;
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      removeElementsFromListItems();
    }

    // Case: Input length is 0 and mini tags selected
    else if (
      e.target.value.length === 0 &&
      finalResultTotalMiniTags.length > 0
    ) {
      results = recipes;
      for (let i = 0; i < finalResultTotalMiniTags.length; i++) {
        let item = finalResultTotalMiniTags[i];
        let filteredResults = [];
        for (let j = 0; j < results.length; j++) {
          let obj = results[j];
          switch (item.datavalue) {
            case 'ingredients':
              if (
                obj.ingredients.some(
                  (ingredient) =>
                    ingredient.ingredient.toLowerCase() === item.value
                )
              ) {
                filteredResults.push(obj);
              }
              break;
            case 'appliance':
              if (obj.appliance.toLowerCase() === item.value) {
                filteredResults.push(obj);
              }
              break;
            case 'ustensils':
              if (
                obj.ustensils.some(
                  (ustensil) => ustensil.toLowerCase() === item.value
                )
              ) {
                filteredResults.push(obj);
              }
              break;
          }
        }
        results = filteredResults;
      }

      let filteredResults = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        if (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        ) {
          filteredResults.push(obj);
        }
      }

      results = filteredResults;
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      removeElementsFromListItems();
    }

    // Case: Input length is 0 and no mini tags selected
    else if (
      e.target.value.length === 0 &&
      finalResultTotalMiniTags.length === 0
    ) {
      results = recipes;
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      resetAllArrays();
    }

    // Case: Input length < 3 and no mini tags selected
    else if (
      e.target.value.length < 3 &&
      finalResultTotalMiniTags.length === 0
    ) {
      const cardRecipe = document.querySelectorAll('.card');
      if (cardRecipe.length) {
        for (let i = 0; i < cardRecipe.length; i++) {
          let element = cardRecipe[i];
          element.remove();
        }
      }

      // call function create all card recipes for input <2
      createCardRecipesInput(recipes);

      // remove all items from the lists
      const listAllItems = document.querySelectorAll('.tag_item');
      for (let i = 0; i < listAllItems.length; i++) {
        let item = listAllItems[i];
        item.remove();
      }
      createListElements();
      filterListTagsbyInputTag();
      createMiniTags();
    }
  });
}




function createCardRecipesInput(results) {
  // show/hide message no recipes
  const MessageNoRecette = document.querySelector('.no_recipe_message');
  if (results.length === 0) {
    MessageNoRecette.style.display = 'block';
  } else {
    MessageNoRecette.style.display = 'none';
  }

  // delete all cards
  const cardRecipe = document.querySelectorAll('.card');
  cardRecipe.forEach((item) => {
    item.remove();
  });

  // create new cards
  const rowCardsRecipes = document.querySelector('.cards_bloc');
  results.forEach((recipe) => {
    const cardRecipeModel = recipeCard(recipe);
    const recipeCardDOM = cardRecipeModel.recipeCardDOM();
    rowCardsRecipes.appendChild(recipeCardDOM);
  });

  let filteredCount = getFilteredRecipeCount(results);

  updateRecipeCount(filteredCount);
}


// update ingredients-appareil-ustensils
function populateTags(results) {
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
  const listAllItems = document.querySelectorAll('.tag_item');
  listAllItems.forEach((item) => {
    item.remove();
  });

  // remove ingredients from tag ingredient
  reducedIngredient.forEach((element) => {
    const searchlistIngredients = document.querySelector(
      '.tag_list_ingredients'
    );
    const domIngredients = listsDOM(element, 'ingredients');
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
      '.tag_list_appliances'
    );
    const domAppliance = listsDOM(element, 'appliances');
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
      '.tag_list_ustensils'
    );
    const domUstensils = listsDOM(element, 'ustensils');
    searchListUstensils.append(domUstensils);
  });
}


globalSearchInput(inputResearch);
