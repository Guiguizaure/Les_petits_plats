function openTags(categoryId) {

    const searchInput = document.querySelector(`#${categoryId}`);
    const searchExpand = document.querySelector(`.close_dropdown_${categoryId} i`);
    const searchListBlock = document.querySelector(`.tag_list_block_${categoryId}`);
    const searchWrapper = document.querySelector(`.tag_wrapper_${categoryId}`);
    const searchList = document.querySelector(`.tag_list_${categoryId}`);

    searchList.classList.remove("expand-search-list");
  
    // Click input
    searchWrapper.addEventListener("click", () => {
        searchInput.value = "";
        searchExpand.classList.toggle("arrow-down-open");
        searchListBlock.classList.toggle("active");
        searchInput.focus();
    });
  
    // Input focus
    searchInput.addEventListener("focus", () => {
      searchListBlock.classList.remove("hide");
      searchExpand.classList.add("rotated");
    });
  
    // Click outside div button
    document.addEventListener("click", (evt) => {
      let targetEl = evt.target; // Clicked element
      do {
        if (targetEl == searchWrapper) {
          return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
      } while (targetEl);

        //   Click outside

      searchListBlock.classList.remove("active");
      searchList.classList.remove("expand-search-list");
      
  
      // Verify if list contains display none
      const searchListItems = document.querySelectorAll(
        `.tag_list_${categoryId} li`
      );
      // Replace display none with display block for list items
      searchListItems.forEach((list) => {
        if (list.style.display === "none") {
          list.style.display = "block";
        }
      });
    });
  }
  
  openTags("ingredients");
  openTags("appliances");
  openTags("ustensils");
  