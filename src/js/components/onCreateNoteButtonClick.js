import refs from "./refs";
import onModalButtonsClick from "./onModalButtonsClick";
import changeCreateButtonVisibility from "./changeCreateButtonVisibility";
import changeModalVisibility from "./changeModalVisibility";
import navButtonsEfficiencySwitching from './navButtonsEfficiencySwitching';

export default function onCreateNoteButtonClick() {
    navButtonsEfficiencySwitching();
    changeCreateButtonVisibility();
    changeModalVisibility();

    const buttonsContainerEl = refs.modal.querySelector('.ctrl-buttons-container');
    buttonsContainerEl.addEventListener('click', onModalButtonsClick);
}