// import { recipes } from "./data/recipe.js";

export default class RecipeCard{
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.name = data.name;
        this.time = data.time;
        this.ingredients = data.ingredients;
        this.ingredient = data.ingredient;
        this.quantity = data.quantity;
        this.quantite = data.quantite;
        this.unit = data.unit;
        this.unite = data.unite;
        this.description = data.description;
      }

     RecipeCardDOM() {

      let wrapper = document.createElement("div");
      // wrapper = "";
      wrapper.innerHTML =   `<div class="recipe_card" data-id="${this.id}"></div>`

        let elementCard = "";
        elementCard +=`
        <div class="recipe_card">
                <figure class="recipe_image">
                    <img src="/assets/img_recettes/${this.image}" alt="">
                    <span class="prep_time">${this.time}min</span>
                </figure>
                <div class="content_container">
                    <h3 class="recipe_title">${this.name}</h3>

                    <h4 class="recipe">Recette</h4>

                    <p class="recipe_desc">${this.description}</p>

                    <h4 class="ingredients">Ingredients</h4>

                    <div class="ingredients_container"> `;
                    
                    this.ingredients.forEach((ingredient) => {
                      elementCard += `
                          <div class="ingredient_element">
                              <h5 class="ingredient_title">${ingredient.ingredient}</h5>
                              <p class="ingredient_desc">${
                                  ingredient.quantity ? ingredient.quantity : (ingredient.quantity = "")
                                }<span>${
                                  ingredient.quantite ? ingredient.quantite : (ingredient.quantite = "")
                                } ${ingredient.unit ? ingredient.unit : (ingredient.unit = "")} ${
                                  ingredient.unite ? ingredient.unite : (ingredient.unite = "")
                                }</span></p>
                          </div>
                        `;
                    });
                    
              

        

          elementCard += `

          </div>
          </div>
      </div>
  </div>
  `;

         
          wrapper.innerHTML = elementCard;
          return wrapper;
    }


}