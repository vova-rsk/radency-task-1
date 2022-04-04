import refs from './refs';
import { STATUS } from './constants';

export default function updateSummaryAfterRemove(noteStatus, category) {
    const activeRef = refs.summaryTable.querySelector(`.table__col-thumb--active[data-category="${category}"]`);
    const archivedRef = refs.summaryTable.querySelector(`.table__col-thumb--archived[data-category="${category}"]`);

    if (noteStatus === STATUS.ACTIVE) {
        activeRef.textContent -= 1;
    } else { 
        archivedRef.textContent -= 1;
    }
}