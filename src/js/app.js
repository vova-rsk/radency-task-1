import {
    createNotesTable,
    addIcons,
    createSummaryTable,
    onNavButtonClick
} from './components/notes';
import store from '../db';
import refs from './components/refs';
import noteTmp from '../templates/notes.hbs';

document.addEventListener('DOMContentLoaded', () => {
    createNotesTable(store.notes, noteTmp);
    createSummaryTable(store.notes);
    addIcons();
});

refs.navButtonsContainer.addEventListener('click', onNavButtonClick);