import refs from "./refs";
import store from "../../db";
import getSummary from "./getSummary";
import addCategoryIcons from './addCategoryIcons';
import summaryTmp from '../../templates/summary.hbs'

export default function createSummaryTable() {
    const summary = getSummary(store.notes);
    const summaryList = summaryTmp(summary);

    refs.summaryTable.innerHTML = summaryList;
    addCategoryIcons();
}