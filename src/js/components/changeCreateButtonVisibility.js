import refs from "./refs";

export default function changeCreateButtonVisibility() {
    const createButton = refs.createButton;
    createButton.classList.toggle('visually-hidden');
}