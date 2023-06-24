// import { recipes } from "./data/recipe.js";

// export default class TagFilter {
//     constructor(){
//         this.activeTags = []
//     }

//     initTagButton(){
//         this.createButton();
//     }

//     getActiveTags() {
//         return this.activeTags
//     }

//     createButton(data, tagFilterType){
//         const tagFilterSection = document.querySelector('.tag_selects');
//         tagFilterSection.innerHTML = `
//                     <div class="filter-btn" data-type="ingredient">
//                         <span>${tagFilterType}</span>
//                         <i class="fa-thin fa-chevron-down"></i>
//                     </div>
//                     <div class="content">
//                         <div class="search">
//                             <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <circle cx="10" cy="10" r="9.5" stroke="white"/>
//                                 <line x1="18.3536" y1="18.6464" x2="27.3536" y2="27.6464" stroke="white"/>
//                             </svg>
//                             <input type="text" placeholder="Search">
//                         </div>
//                         <ul class="options">
//                         </ul>
//         `;

//     }

//     renderButtonDOM(){
//         // const tagFilterSection = document.querySelector('.tag_selects')
//         // tagFilterSection.appendChild
//     }
// }