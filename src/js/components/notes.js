import { nanoid } from 'nanoid';
import store from '../../db';
import summaryTmp from '../../templates/summary.hbs';
import refs from './refs';
import { CATEGORIES, STATUS, SVG_ICONS } from './constants';
import noteTmp from '../../templates/notes.hbs';
import archiveTmp from '../../templates/archive.hbs';

export function clearMarkup(elem) { 
    elem.innerHTML="";
}

export function createNotesTable(notes, template, filter=STATUS.ACTIVE, ) {
    const filteredNotes = notes.filter(elem => elem.status === filter);
    const notesList = template(filteredNotes);
    
    refs.notesTable.insertAdjacentHTML('beforeend', notesList);
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

export function switchTablesView() { 
    refs.toArchiveIcon.classList.toggle('disabled');
    refs.toActiveIcon.classList.toggle('disabled');
    refs.summaryContainer.classList.toggle('disabled');
    refs.modalContainer.classList.toggle('disabled');
}

export function changeTableCaption(targetToSwitch) {
    refs.tableCaption.textContent = (targetToSwitch === STATUS.ARCHIVED) ? 'Archive' : 'Active Notes'; 
}

export function onNavButtonClick(e) {
    if (e.target.type !== "button") { 
        return;
    }

    const buttonName = e.target.name;

    deactivateLink(buttonName);
    clearMarkup(refs.notesTable);
    
    if (buttonName === "to-archive") {
        changeTableCaption(STATUS.ARCHIVED)
        switchTablesView();
        createNotesTable(store.notes, archiveTmp, STATUS.ARCHIVED);
    } else {
        changeTableCaption(STATUS.ACTIVE) 
        switchTablesView();
        createNotesTable(store.notes, noteTmp, STATUS.ACTIVE);
    }
    
    addIcons();
}

function addCategoryIcons () { 
    const categoryIcons = document.querySelectorAll('.table__icon');
    
    categoryIcons.forEach(icon => {
        const category = icon.dataset.category;
        const categoryObj = CATEGORIES.find(({ name }) => name === category);

       icon.innerHTML = categoryObj.icon;
    });
}

function addCtrButtonsIcons() { 
    const buttons = document.querySelectorAll('#note-ctrl-btns button');

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
            case 'to-active':
                iconToAdd = SVG_ICONS.BOX_REMOVE;
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

        summary.push({ id: nanoid(7), category, active:0, archived:0, [status]: 1 });

        return summary;
    }, []);
}

function deactivateLink(clickedButtonName) { 
    const navButtons = refs.navButtonsContainer.querySelectorAll('button');

        navButtons.forEach(button => {
        if (button.name === clickedButtonName) {
            button.setAttribute('disabled',true);
        } else { 
            button.removeAttribute('disabled');
        }
    });
}
