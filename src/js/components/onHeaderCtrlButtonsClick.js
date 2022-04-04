import refs from './refs';

export default function onHeaderCtrlButtonsClick(e) {
    const clickedElem = e.target;

    if (clickedElem.nodeName !== 'BUTTON' || ['apply', 'cancel'].includes(clickedElem.name)) { 
        return;
    }

    const ctrlButtons = refs.headerCtrlButtonsContainer.querySelectorAll('.table__button');
    const checkboxes = refs.notesTable.querySelectorAll('.checkbox-container');
    const noteCtrlButtons = refs.notesTable.querySelectorAll('.note-ctrl-btns>button');
    
    noteCtrlButtons.forEach(button => button.classList.add('visually-hidden'));
    checkboxes.forEach(checkbox => checkbox.classList.remove('visually-hidden'));
    ctrlButtons.forEach(button => {
        if (['apply', 'cancel'].includes(button.name)) {
            if (button.name === 'apply') { 
                button.dataset.operation = clickedElem.name;
            }

            button.classList.remove('visually-hidden');
        } else { 
            button.classList.add('visually-hidden');
        }
    });
}