import refs from './refs';

export default function updateSummaryAfterReplace(operationType, category) { 
    const activeRef = refs.summaryTable.querySelector(`.table__col-thumb--active[data-category="${category}"]`);
    const archivedRef = refs.summaryTable.querySelector(`.table__col-thumb--archived[data-category="${category}"]`);

    if (operationType === 'to-archive') {
        activeRef.textContent -= 1;
        archivedRef.textContent = Number(archivedRef.textContent) + 1;
    } else { 
        activeRef.textContent =  Number(activeRef.textContent) + 1;
        archivedRef.textContent -= 1;
    }
}