// import { recipes } from "./data/recipe.js";

function recipeCard(data){
    const {
        id,
        image,
        name,
        time,
        ingredients,
        ingredient,
        quantity,
        quantite,
        unit,
        unite,
        description,
      } = data

     function recipeCardDOM() {

      let wrapper = document.createElement("div");
      wrapper.classList.add("card")
      // wrapper = "";
      wrapper.innerHTML =   `<div class="recipe_card" data-id="${id}"></div>`

        let elementCard = "";
        elementCard +=`
        <div class="recipe_card">
                <figure class="recipe_image">
                    <img src="/assets/img_recettes/${image}" alt="">
                    <span class="prep_time">${time}min</span>
                </figure>
                <div class="content_container">
                    <h3 class="recipe_title">${name}</h3>

                    <h4 class="recipe">Recette</h4>

                    <p class="recipe_desc">${description}</p>

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

    return {
      id,
      name,
      time,
      ingredient,
      ingredients,
      quantity,
      quantite,
      unit,
      unite,
      recipeCardDOM,
    };


}