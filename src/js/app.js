import refs from './components/refs';
import onHeaderCtrlButtonsClick from './components/onHeaderCtrlButtonsClick';
import onHeaderAgreementButtonsClick from './components/onHeadersAgrmButtonsClick';
import onNoteCtrlButtonClick from './components/onNoteCtrlButtonClick';
import onNavButtonClick from './components/onNavButtonClick';
import onStartup from './components/onStartup';

document.addEventListener('DOMContentLoaded', onStartup);
refs.navButtonsContainer.addEventListener('click', onNavButtonClick);
refs.notesTable.addEventListener('click', onNoteCtrlButtonClick);
refs.headerCtrlButtonsContainer.addEventListener('click', onHeaderCtrlButtonsClick);
refs.headerCtrlButtonsContainer.addEventListener('click', onHeaderAgreementButtonsClick);