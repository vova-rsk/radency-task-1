
import store from '../db';
import refs from './components/refs';
import noteTmp from '../templates/notes.hbs';
import onHeaderCtrlButtonsClick from './components/onHeaderCtrlButtonsClick';
import onHeaderAgreementButtonsClick from './components/onHeadersAgrmButtonsClick';
import onDeleteOneButtonClick from './components/onDeleteOneButtonClick';
import onNavButtonClick from './components/onNavButtonClick';
import onStartup from './components/onStartup';

document.addEventListener('DOMContentLoaded', onStartup);
refs.navButtonsContainer.addEventListener('click', onNavButtonClick);
refs.notesTable.addEventListener('click', onDeleteOneButtonClick);
refs.headerCtrlButtonsContainer.addEventListener('click', onHeaderCtrlButtonsClick);
refs.headerCtrlButtonsContainer.addEventListener('click', onHeaderAgreementButtonsClick);