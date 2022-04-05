import refs from './refs';
import { STATUS } from './constants';
import addCategoryIcons from './addCategoryIcons';
import addCtrlButtonsIcons from './addCtrlButtonsIcons';
import notesTmp from '../../templates/notes.hbs';
import archiveTmp from '../../templates/archive.hbs';

export default function createNotesTable(notes, filter = STATUS.ACTIVE) {
    const incomeNotes = Array.isArray(notes) ? [...notes] : [notes];
    
    const filteredNotes = incomeNotes.filter(elem => elem.status === filter);
    const notesList = filter === STATUS.ACTIVE
        ? notesTmp(filteredNotes)
        : archiveTmp(filteredNotes);
    
    refs.notesTable.insertAdjacentHTML('beforeend', notesList);
    addCategoryIcons();
    addCtrlButtonsIcons();
}