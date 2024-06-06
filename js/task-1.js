
const list = document.getElementById('categories');
const items = list.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
list.style.listStyle = `none`

document.addEventListener("DOMContentLoaded", function() {
    var lists = document.querySelectorAll("#categories ul");
    lists.forEach(function(list) {
    list.classList.add("styled-list");
    });
});
    
items.forEach(item => {
const title = item.querySelector('h2').textContent;
const elementsCount = item.querySelectorAll('ul li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elementsCount}`);
});