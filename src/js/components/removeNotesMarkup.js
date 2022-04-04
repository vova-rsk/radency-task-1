export default function removeNotesMarkup(elemsList){ 
    [...elemsList].forEach(elem => elem.remove());
}