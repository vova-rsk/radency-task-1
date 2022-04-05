import refs from "./refs";
import removeMarkup from "./removeMarkup";

export default function removeTableRowMarkupById(noteId){ 
    const rowToRemove = refs.notesTable.querySelector(`tr[data-id="${noteId}"]`);
    
    removeMarkup(rowToRemove);
}