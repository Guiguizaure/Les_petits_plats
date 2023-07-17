const miniTags = document.querySelector("#mini-tags");



//
// Create
// minitags
//
function createMiniTags() {
  //
  //Ingredients
  //
  const listItemIngredients = document.querySelectorAll(
    ".tag_item_ingredients"
  );

  for (let i = 0; i < listItemIngredients.length; i++) {
    listItemIngredients[i].addEventListener("click", () => {
      listMiniTags.push(listItemIngredients[i]);

      const miniTagsChild = minitagsDOM(
        listItemIngredients[i].innerText.toLowerCase(),
        "ingredients"
      );

      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });

      miniTags.appendChild(miniTagsChild);
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
      listMiniTags.push(listItemAppliances[i]);

      const miniTagsChild = minitagsDOM(
        listItemAppliances[i].innerText.toLowerCase(),
        "appliance"
      );

      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });

      miniTags.appendChild(miniTagsChild);
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
      listMiniTags.push(listItemUstensils[i]);
      const miniTagsChild = minitagsDOM(
        listItemUstensils[i].innerText.toLowerCase(),
        "ustensils"
      );
      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });
      miniTags.appendChild(miniTagsChild);
      searchByMiniTags(
        "ustensils",
        listItemUstensils[i].innerText.toLowerCase()
      );
    });
  }
}



