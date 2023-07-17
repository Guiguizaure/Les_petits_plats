/*filter
 list 
 tags */

function filterListTagsbyInputTag() {
    //  html elements ingredients
    const inputIngredients = document.getElementById("ingredients");
    const listItemIngredients = document.querySelectorAll(
      ".tag_item_ingredients"
    );
  
    //  html elements appliance
    const inputappliances = document.getElementById("appliances");
    const listItemAppliances = document.querySelectorAll(
      ".tag_item_appliances"
    );
  
    //  html elements ustensils
    const inputUstensils = document.getElementById("ustensils");
    const listItemUstensils = document.querySelectorAll(".tag_item_ustensils");
  
    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputIngredients.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchIngredientsList = inputIngredients.value.toLowerCase();
  
      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemIngredients) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchIngredientsList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };
  
    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputappliances.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchinputappliancesList = inputappliances.value.toLowerCase();
  
      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemAppliances) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchinputappliancesList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };
  
    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputUstensils.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchinputUstensilsList = inputUstensils.value.toLowerCase();
  
      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemUstensils) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchinputUstensilsList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };
  }
  filterListTagsbyInputTag();
  createMiniTags();