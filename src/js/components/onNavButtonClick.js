import refs from './refs';
import store from '../../db';
import clearMarkup from './clearMarkup';
import deactivateLink from './deactivateLink';
import changeTableCaption from './changeTableCaption';
import switchTablesView from './switchTablesView';
import createNotesTable from './createNotesTable';
import archiveTmp from '../../templates/archive.hbs';
import noteTmp from '../../templates/notes.hbs';
import { STATUS } from './constants';

export default function onNavButtonClick(e) {
    if (e.target.nodeName !== "BUTTON") { 
        return;
    }

    const buttonName = e.target.name;

    deactivateLink(buttonName);
    clearMarkup(refs.notesTable);
    
    if (buttonName === "to-archive") {
        changeTableCaption(STATUS.ARCHIVED)
        switchTablesView();
        createNotesTable(store.notes, archiveTmp, STATUS.ARCHIVED);
    } else {
        changeTableCaption(STATUS.ACTIVE) 
        switchTablesView();
        createNotesTable(store.notes, noteTmp, STATUS.ACTIVE);
    }
}