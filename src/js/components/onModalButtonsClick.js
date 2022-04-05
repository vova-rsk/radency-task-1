import refs from "./refs";
import changeCreateButtonVisibility from "./changeCreateButtonVisibility";
import changeModalVisibility from "./changeModalVisibility";
import formReset from './formReset';
import navButtonsEfficiencySwitching from './navButtonsEfficiencySwitching';
import { STATUS, OPERATION_TYPE } from "./constants";
import updateStoreData from "./updateStoreData";
import createNotesTable from "./createNotesTable";
import getDateIntervalFromContent from './getDateIntervalFromContent';
import removeTableRowMarkupById from "./removeTableRowMarkupById";

export default function onModalButtonsClick(e) {
    e.preventDefault();

    const clickedEl = e.target;

    if (clickedEl.nodeName !== 'BUTTON') { 
        return;
    }
    
    const buttonsContainerEl = refs.modal.querySelector('.ctrl-buttons-container');

    if (clickedEl.name === 'apply') {
        const form = refs.modal.querySelector('.form');
        const { name, category, content } = form.elements;
        const noteId = form.dataset.id;
        const isEdit = Boolean(noteId);
    
        if (!name.value || !content.value || !category.value ) { 
            return;
        }

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const created = new Date().toLocaleString('en-US', options);
        
        const dates = getDateIntervalFromContent(content.value);
        
        const newNoteInfo = {
            name: name.value,
            created,
            category: category.value,
            content:content.value,
            dates,
            status: STATUS.ACTIVE
        };

        let noteToRender = null;

        if (isEdit) {
            noteToRender = updateStoreData(OPERATION_TYPE.EDIT, noteId, newNoteInfo);
            form.removeAttribute('data-id');
            removeTableRowMarkupById(noteId);
        } else { 
            noteToRender = updateStoreData(OPERATION_TYPE.ADD, null, newNoteInfo);
        }
        
       createNotesTable(noteToRender);
    }
        
    changeCreateButtonVisibility();
    changeModalVisibility();
    buttonsContainerEl.removeEventListener('click', onModalButtonsClick);
    navButtonsEfficiencySwitching();
    formReset();
}