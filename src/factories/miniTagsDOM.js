function minitagsDOM(value, type) {
    const wrapper = document.createElement("button");
  
    wrapper.setAttribute("type", "button");
    wrapper.setAttribute("datavalue", `${type}`);
    wrapper.classList.add("btn", "text-white", "btn-sm");
    wrapper.classList.add("tag-button");
  
    let miniTagCard = "";
    miniTagCard += `
    
    ${value.charAt(0).toUpperCase() + value.slice(1)}
    <i class="fa-solid fa-xmark"></i>
  
      `;
    wrapper.innerHTML = miniTagCard;
    return wrapper;
  }