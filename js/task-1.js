    
const countEl = document.querySelector('#categories').children.length;
console.log(`В списке ${countEl} категории`);

const arrayItems = document.querySelectorAll(".item");
arrayItems.forEach(arrayItem => console.log(`Категория: ${arrayItem.firstElementChild.textContent} 
Количество элементов: ${arrayItem.lastElementChild.children.length}`));







