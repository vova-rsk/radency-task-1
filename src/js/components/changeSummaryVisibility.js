import refs from "./refs";

export default function changeSummaryVisibility() { 
    const summaryEl = refs.summaryContainer;

    summaryEl.classList.toggle('visually-hidden');
}