import noteTmp from '../../templates/notes.hbs';
import refs from './refs';
import { STATUS } from './constants';

export function createActiveNotesTable(notes) {
    const filteredNotes = notes.filter(elem => elem.status === STATUS.ACTIVE);
    const notesList = noteTmp(filteredNotes);
    
    refs.activeNotesTable.insertAdjacentHTML('beforeend', notesList);
}