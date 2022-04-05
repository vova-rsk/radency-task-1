export default function removeMarkup(elems) {
    Array.isArray(elems)
        ? [...elems].forEach(elem => elem.remove())
        : elems.remove();
}