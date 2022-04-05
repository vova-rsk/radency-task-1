import refs from "./refs";

export default function formReset() {
    const form = refs.modal.querySelector('.form');
    
    setTimeout(() => {
        form.elements.category.selectedIndex = -1;
        form.elements.name.value = '';
        form.elements.content.value = '';
    }, 250);
}