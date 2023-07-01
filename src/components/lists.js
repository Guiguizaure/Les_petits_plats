export default function listsDOM(item, element) {
    const wrapper = document.createElement("li");
    wrapper.classList.add(`tag_item`);
    wrapper.classList.add(`tag_item_${element}`);
    // wrapper.setAttribute("data-value", `${item.toLowerCase()}`);
    wrapper.innerText = item.charAt(0).toUpperCase() + item.slice(1);
  
    return wrapper;
}
  

