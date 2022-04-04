import { CATEGORIES } from './constants';

export default function addCategoryIcons() { 
    const categoryIcons = document.querySelectorAll('.table__icon');
    
    categoryIcons.forEach(icon => {
        const category = icon.dataset.category;
        const categoryObj = CATEGORIES.find(({ name }) => name === category);

       icon.innerHTML = categoryObj.icon;
    });
}