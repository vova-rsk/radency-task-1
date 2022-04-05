import store from "../../db";
import noteTmp from '../../templates/notes.hbs';
import createNotesTable from "./createNotesTable";
import createSummaryTable from "./createSummaryTable";
import addCategoryIcons from "./addCategoryIcons";
import addCtrlButtonsIcons from "./addCtrlButtonsIcons";

export default function onStartup() { 
    createNotesTable(store.notes, noteTmp);
    createSummaryTable();
    addCategoryIcons();
    addCtrlButtonsIcons();
}