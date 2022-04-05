import refs from './refs';
import removeMarkup from './removeMarkup';
import updateStoreData from './updateStoreData';
import createSummaryTable from './createSummaryTable';

export default function onNoteCtrlButtonClick(e) {
    if (e.target.nodeName !== 'BUTTON') { 
        return;
    }

    const operationType = e.target.name;
    const noteId = e.target.dataset.id;
    const tableRowToRemoveRef = refs.notesTable.querySelector(`.table__row[data-id="${noteId}"]`);

    updateStoreData(operationType, noteId);
    removeMarkup(tableRowToRemoveRef);
    createSummaryTable();
}