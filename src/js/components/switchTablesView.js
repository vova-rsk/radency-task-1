import refs from './refs';

export default function switchTablesView() { 
    refs.toArchiveIcon.classList.toggle('disabled');
    refs.toActiveIcon.classList.toggle('disabled');
    refs.modalContainer.classList.toggle('disabled');
}