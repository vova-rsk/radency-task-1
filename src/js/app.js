import {
    createNotesTable,
    addIcons,
    createSummaryTable,
    clearMarkup,
    switchTablesView,
    changeTableCaption
} from './components/notes';
import store from '../db';
import refs from './components/refs';
import { STATUS } from './components/constants';
import noteTmp from '../templates/notes.hbs';
import archiveTmp from '../templates/archive.hbs';

document.addEventListener('DOMContentLoaded', () => {
    createNotesTable(store.notes, noteTmp);
    createSummaryTable(store.notes);
    addIcons();
});

refs.navButtonsContainer.addEventListener('click', e => {
    if (e.target.type !== "button") { 
        return;
    }

    const buttonName = e.target.name;

    clearMarkup(refs.activeNotesTable);
    
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
});