import refs from "./refs";

export default function changeModalVisibility() { 
    const modalEl = refs.modal;
    modalEl.classList.toggle('show');
}