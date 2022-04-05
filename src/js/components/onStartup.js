import store from "../../db";
import createNotesTable from "./createNotesTable";
import createSummaryTable from "./createSummaryTable";
import addCategoryIcons from "./addCategoryIcons";
import addCtrlButtonsIcons from "./addCtrlButtonsIcons";
import makeModalFormSelect from './makeModalFormSelect';

export default function onStartup() { 
    createNotesTable(store.notes);
    createSummaryTable();
    addCategoryIcons();
    addCtrlButtonsIcons();
    makeModalFormSelect();
}