import { createActiveNotesTable, addCategoryIcons, addCtrButtonsIcons } from './components/notes';
import store from '../db';

document.addEventListener('DOMContentLoaded', () => {
    createActiveNotesTable(store.notes);
    addCategoryIcons();
    addCtrButtonsIcons();
});