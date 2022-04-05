import refs from "./refs";
import selectTmp from '../../templates/form-select-item.hbs';
import { CATEGORIES } from "./constants";

export default function makeModalFormSelect() { 
    const selectEl = refs.modal.querySelector('#category-select');
    const optionsList = selectTmp(CATEGORIES);

    selectEl.insertAdjacentHTML('beforeend', optionsList);
}