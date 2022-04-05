import { SVG_ICONS } from "./constants";

export default function addCtrlButtonsIcons() { 
    const buttons = document.querySelectorAll('.note-ctrl-btns button');

    buttons.forEach(button => { 
        const iconType = button.dataset.icon;
        let iconToAdd = null;

        switch (iconType) { 
            case 'edit':
                iconToAdd = SVG_ICONS.EDIT;
                break;
            case 'to-archive':
                iconToAdd = SVG_ICONS.BOX_ADD;
                break;
            case 'to-active':
                iconToAdd = SVG_ICONS.BOX_REMOVE;
                break;
            case 'remove':
                iconToAdd = SVG_ICONS.DELETE;
                break;
            default:
                iconToAdd = SVG_ICONS.DEFAULT;
        }
        
        button.innerHTML = iconToAdd;
    });
}