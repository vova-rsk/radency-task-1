import refs from './refs';
import { STATUS } from './constants';

export default function createNotesTable(notes, template, filter = STATUS.ACTIVE) {
    const filteredNotes = notes.filter(elem => elem.status === filter);
    const notesList = template(filteredNotes);
    
    refs.notesTable.insertAdjacentHTML('beforeend', notesList);
}