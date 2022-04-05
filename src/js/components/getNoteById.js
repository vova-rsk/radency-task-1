import store from '../../db';

export default function getNoteById(id) { 
    return store.notes.find(note=>note.id===id);
}