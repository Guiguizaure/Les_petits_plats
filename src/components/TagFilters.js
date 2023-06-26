// import { recipes } from "./data/recipe.js";

export default class TagFilters {
    constructor(){
        this.activeTags = [];
    }

    initTagFilters(){
       console.log("tagfilter")

    //    this.openTags();
          // Initialize categories
      this.openTags("ingredients");
      this.openTags("appliances");
      this.openTags("ustensils");
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
        searchWrapper.addEventListener("click", () => {
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
      
   
    

    
}