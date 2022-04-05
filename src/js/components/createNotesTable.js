import refs from './refs';
import { STATUS } from './constants';
import addCategoryIcons from './addCategoryIcons';
import addCtrlButtonsIcons from './addCtrlButtonsIcons';

export default function createNotesTable(notes, template, filter = STATUS.ACTIVE) {
    const filteredNotes = notes.filter(elem => elem.status === filter);
    const notesList = template(filteredNotes);
    
    refs.notesTable.insertAdjacentHTML('beforeend', notesList);
    addCategoryIcons();
    addCtrlButtonsIcons();
}