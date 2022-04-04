import refs from "./refs";
import getSummary from "./getSummary";
import summaryTmp from '../../templates/summary.hbs'

export default function createSummaryTable(notes) {
    const summary = getSummary(notes);
    const summaryList = summaryTmp(summary);

    refs.summaryTable.insertAdjacentHTML('beforeend', summaryList);
}