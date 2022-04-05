import refs from "./refs";

export default function formComplite(note) {
    const form = refs.modal.querySelector('.form');
    const { name, category, content } = note;

    form.dataset.id = note.id;
    form.elements.category.value = category;
    form.elements.name.value = name;
    form.elements.content.value = content;
}