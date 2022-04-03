import { createActiveNotesTable, addIcons, createSummaryTable } from './components/notes';
import store from '../db';

document.addEventListener('DOMContentLoaded', () => {
    createActiveNotesTable(store.notes);
    createSummaryTable(store.notes);
    addIcons();
});