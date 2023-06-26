import { createListElements } from "../app.js"
import RecipeCard from "../components/Card.js";
import { recipes } from "../data/recipe.js";

export default class Searchbar {
    constructor(){
       this.searchbar = document.querySelector('#search-input')
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
            if (e.target.value.length > 2) {
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
           
        
           
            //all cards appears if input value < 3
         } else if (
            e.target.value.length < 3 
            ) {
            const recipeCard = document.querySelectorAll(".card");
            
            if (recipeCard.length) {
                recipeCard.forEach((element) => {
                element.remove();
                });
            }
        
            // call function create all card recipes for input <2
            this.createCardRecipesInput(recipes);
        
            // remove all items from the lists
            const listAllItems = document.querySelectorAll(".search-item");
            listAllItems.forEach((item) => {
                item.remove();
            });
            createListElements();
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
        const listAllItems = document.querySelectorAll(".search-item");
        // console.log(listAllItems)
        listAllItems.forEach((item) => {
            item.remove();
        });
    }
}

