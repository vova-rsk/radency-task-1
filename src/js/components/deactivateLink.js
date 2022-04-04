import refs from './refs';

export default function deactivateLink(clickedButtonName) { 
    const navButtons = refs.navButtonsContainer.querySelectorAll('button');

        navButtons.forEach(button => {
        if (button.name === clickedButtonName) {
            button.setAttribute('disabled',true);
        } else { 
            button.removeAttribute('disabled');
        }
    });
}