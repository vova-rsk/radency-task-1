import refs from './refs';
import removeMarkup from './removeMarkup';
import updateStoreData from './updateStoreData';
import createSummaryTable from './createSummaryTable';
import { OPERATION_TYPE } from './constants';
import getNoteById from './getNoteById';
import onCreateNoteButtonClick from './onCreateNoteButtonClick';
import formComplite from './formComplite';

export default function onNoteCtrlButtonClick(e) {
    const clickedElem = e.target;
    
    if (clickedElem.nodeName !== 'BUTTON') { 
        return;
    }

    const operationType = clickedElem.name;
    const noteId = clickedElem.dataset.id;

    if (clickedElem.name === OPERATION_TYPE.EDIT) {
        const noteToEdit = getNoteById(noteId)

        formComplite(noteToEdit);
        onCreateNoteButtonClick();
        return;
    }


    const tableRowToRemoveRef = refs.notesTable.querySelector(`.table__row[data-id="${noteId}"]`);

    updateStoreData(operationType, noteId );
    removeMarkup(tableRowToRemoveRef);
    createSummaryTable();
}