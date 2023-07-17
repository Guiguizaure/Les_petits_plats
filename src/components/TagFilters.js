
const MessageNoRecette = document.querySelector(".no_recipe_message");

function searchByMiniTags(dataValue, value) {
  //recover all elements from miniTags
  for (i = 0; i < listMiniTags.length; i++) {
    totalMiniTags.push({
      datavalue: dataValue,
      value: listMiniTags[i].innerText.toLowerCase(),
    });
  }
  //remove repeated element from de list minitags
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  //remove repeated element from totalMiniTags
  totalMiniTags = getUniqueListBy(totalMiniTags, "datavalue");
  finalResultTotalMiniTags.push(...totalMiniTags);

  let valueLowCase = value.toLowerCase();

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
    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    removeElementsFromListItems();
    resetAllArrays();
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

      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      removeElementsFromListItems();
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
    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    removeElementsFromListItems();
  }
}

function createCardRecipesMiniTags(results) {
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
    const cardRecipeModel = recipeCard(recipe);
    const recipeCardDOM = cardRecipeModel.recipeCardDOM();
    rowCardsRecipes.appendChild(recipeCardDOM);
  });

   // Update the recipe count in the DOM
   const filteredCount = results.length;
   updateRecipeCount(filteredCount);
}

function removeElementsFromListItems() {
  finalResultTotalMiniTags = [...new Set(finalResultTotalMiniTags)];

  //remove element from the list of ingredients
  const listAllItems = document.querySelectorAll(".tag_item");
  for (i = 0; i < listAllItems.length; i++) {
    for (j = 0; j < listMiniTags.length; j++) {
      if (listAllItems[i].innerText === listMiniTags[j].innerText) {
        listAllItems[i].remove();
      }
    }
  }
}

function resetAllArrays() {
  // reset all arrays
  resultRecipesMiniTags = [];
  recipesWithRepetition = [];
  totalRecipesMiniTags = [];
  resultRecipesMultipleMiniTags = [];
  uniqueValues = [];
  finalResultTotalMiniTags = [];
  resultsRecipes = [];
  listMiniTags = [];
  totalMiniTags = [];
  list = [];
  ingredientsResult = [];
  reducedIngredient = [];
  appliancesResult = [];
  reducedAppliance = [];
  ustensilsResult = [];
  reducedUstensils = [];
}

function finalResultTotalMiniTagsForEach() {
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

    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    removeElementsFromListItems();
  });
}

function UpdateItemsFromMiniTags() {
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

    populateTags(totalRecipesMiniTags);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(totalRecipesMiniTags);
    removeElementsFromListItems();
  });
}

function removeMiniTag(item) {
  const clickedElementValue = item.target || item.srcElement;
  const clickedElementValueLower =
    clickedElementValue.parentElement.innerText.toLowerCase();
  const clickedElementDataValue =
    clickedElementValue.parentElement.getAttribute("datavalue");
  const htmlElemToRemove = clickedElementValue.parentElement;
  
  // Remove the event listener before removing the tag element
  // htmlElemToRemove.removeEventListener("click", removeMiniTag);
  
  htmlElemToRemove.remove();

  const pos = finalResultTotalMiniTags.findIndex(
    (obj) =>
      obj.datavalue === clickedElementDataValue &&
      obj.value === clickedElementValueLower
  );
  finalResultTotalMiniTags.splice(pos, 1);

  for (i = 0; i < listMiniTags.length; i++) {
    if (listMiniTags[i].innerText.toLowerCase() === clickedElementValueLower) {
      listMiniTags.splice(i, 1);
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
    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    removeElementsFromListItems();
    resetAllArrays();
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
    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    resetAllArrays();
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

