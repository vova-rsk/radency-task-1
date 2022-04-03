import noteTmp from '../../templates/notes.hbs';
import refs from './refs';
import { CATEGORIES, STATUS, SVG_ICONS } from './constants';

export function createActiveNotesTable(notes) {
    const filteredNotes = notes.filter(elem => elem.status === STATUS.ACTIVE);
    const notesList = noteTmp(filteredNotes);
    
    refs.activeNotesTable.insertAdjacentHTML('beforeend', notesList);
}

export function addCategoryIcons () { 
    const categoryIcons = refs.getCategoryIcons();
    
    categoryIcons.forEach(icon => {
        const category = icon.dataset.category;
        const categoryObj = CATEGORIES.find(({ name }) => name === category);

       icon.innerHTML = categoryObj.icon;
    });
}

export function addCtrButtonsIcons() { 
    const buttons = refs.getNoteCtrlButtons();

    buttons.forEach(button => { 
        const buttonName = button.getAttribute('name');
        let iconToAdd = null;

        switch (buttonName) { 
            case 'edit':
                iconToAdd = SVG_ICONS.EDIT;
                break;
            case 'to-archive':
                iconToAdd = SVG_ICONS.BOX_ADD;
                break;
            case 'remove':
                iconToAdd = SVG_ICONS.DELETE;
                break;
            default:
                iconToAdd = SVG_ICONS.DEFAULT;
        }
        
        button.innerHTML = iconToAdd;
    });
}