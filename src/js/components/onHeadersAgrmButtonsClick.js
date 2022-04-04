import refs from './refs';
import removeNotesMarkup from './removeNotesMarkup';
import updateStoreData from './updateStoreData';

export default function onHeaderAgrmButtonsClick(e) {
    const clickedElem = e.target;

    if (clickedElem.nodeName !== 'BUTTON' || ['archive', 'remove'].includes(clickedElem.name)) { 
        return;
    }

    const ctrlButtons = refs.headerCtrlButtonsContainer.querySelectorAll('.table__button');
    const checkboxes = refs.notesTable.querySelectorAll('.checkbox-container');
    const noteCtrlButtons = refs.notesTable.querySelectorAll('.note-ctrl-btns>button');
     
    if (clickedElem.name === 'cancel') {
        checkboxes.forEach(checkbox => checkbox.querySelector('input').checked=false);
    } else { 
        const notes = refs.notesTable.querySelectorAll('.table__row');
        const checkedNotes = [...notes].filter(note => note.querySelector('input').checked);
        const notesIdList = checkedNotes.map(note => note.dataset.id);
        const operationType = clickedElem.dataset.operation;

        removeNotesMarkup(checkedNotes);
        updateStoreData(operationType, notesIdList);
    }   

    checkboxes.forEach(checkbox => checkbox.classList.add('visually-hidden'));
    noteCtrlButtons.forEach(button => button.classList.remove('visually-hidden'));
    ctrlButtons.forEach(button => {
        if (['apply', 'cancel'].includes(button.name)) {
            button.classList.add('visually-hidden');
        } else {
            button.classList.remove('visually-hidden');
        }
    });        
}