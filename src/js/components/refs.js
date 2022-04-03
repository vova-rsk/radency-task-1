const refs = {
    activeNotesTable: document.querySelector('#notes-tbody'),
    summaryTable: document.querySelector('#summary-tbody'),
    getCategoryIcons: () => document.querySelectorAll('.table__icon'),
    getNoteCtrlButtons: () => document.querySelectorAll('#note-ctrl-btns button')
};

export default refs