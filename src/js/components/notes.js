import { nanoid } from 'nanoid';
import noteTmp from '../../templates/notes.hbs';
import summaryTmp from '../../templates/summary.hbs';
import refs from './refs';
import { CATEGORIES, STATUS, SVG_ICONS } from './constants';

export function createActiveNotesTable(notes) {
    const filteredNotes = notes.filter(elem => elem.status === STATUS.ACTIVE);
    const notesList = noteTmp(filteredNotes);
    
    refs.activeNotesTable.insertAdjacentHTML('beforeend', notesList);
}

export function addIcons() {
    addCategoryIcons();
    addCtrButtonsIcons();
}

export function createSummaryTable(notes) {
    const summary = getSummary(notes);
    const summaryList = summaryTmp(summary);

    refs.summaryTable.insertAdjacentHTML('beforeend', summaryList);
}

function addCategoryIcons () { 
    const categoryIcons = refs.getCategoryIcons();
    
    categoryIcons.forEach(icon => {
        const category = icon.dataset.category;
        const categoryObj = CATEGORIES.find(({ name }) => name === category);

       icon.innerHTML = categoryObj.icon;
    });
}

function addCtrButtonsIcons() { 
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

function getSummary(notes) {
    return notes.reduce((summary, { category, status }) => {
        const entity = summary.find(item => item.category === category);

        if (entity) { 
            entity[status] += 1;
            return summary;
        }

        summary.push({ id: nanoid(7), category, [status]: 1 });

        return summary;
    }, []);
}
