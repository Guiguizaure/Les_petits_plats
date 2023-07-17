function getFilteredRecipeCount(results) {
    return results.length;
}

function updateRecipeCount(filteredCount) {
    const recipeCountElement = document.querySelector(".recipe_number");
    recipeCountElement.textContent = filteredCount.toString() + " recettes";
}

function displayInitialRecipeCount() {
    const initialCount = recipes.length; 
    updateRecipeCount(initialCount);
}

window.addEventListener("load", displayInitialRecipeCount);