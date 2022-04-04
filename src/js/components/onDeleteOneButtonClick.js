import refs from './refs';
import store from '../../db';
import updateSummaryAfterRemove from './updateSummaryAfterRemove';
import updateSummaryAfterReplace from './updateSummaryAfterReplace';
import { STATUS } from './constants';

export default function onDeleteOneButtonClick(e) {
    if (e.target.nodeName !== 'BUTTON') { 
        return;
    }

    const operationType = e.target.name;
    const noteId = e.target.dataset.id;
    const tableRowToRemoveRef = refs.notesTable.querySelector(`.table__row[data-id="${noteId}"]`);

    if (operationType === 'remove') {
        const { status, category } = store.notes.find(note => note.id === noteId);
        
        store.notes = store.notes.filter(note => note.id !== noteId);
        
        tableRowToRemoveRef.remove();
        updateSummaryAfterRemove(status, category)
    } else if (operationType === 'to-archive' || operationType === 'to-active') {
        const noteToUpdate = store.notes.find(note => note.id === noteId);
        const { category } = noteToUpdate;
        noteToUpdate.status = operationType === 'to-archive' ? STATUS.ARCHIVED : STATUS.ACTIVE;

        tableRowToRemoveRef.remove();
        updateSummaryAfterReplace(operationType, category)
    }   
}