import { nanoid } from "nanoid";
import store from '../../db';
import { STATUS, OPERATION_TYPE } from './constants';

export default function updateStoreData(operationType, notesIdList, noteData) {
    const ids = Array.isArray(notesIdList) ? [...notesIdList] : notesIdList;

    if (operationType === OPERATION_TYPE.REMOVE) {
        store.notes = store.notes.filter(note => !ids.includes(note.id));
        return;
    }

    if (operationType === OPERATION_TYPE.ARCHIVE) {
        store.notes = store.notes.map(note => {

            if (!ids.includes(note.id)) {
                return note;
            }

            const newStatus = note.status === STATUS.ACTIVE
                ? STATUS.ARCHIVED
                : STATUS.ACTIVE;

            return { ...note, status: newStatus };
        });
    }

    if (operationType === OPERATION_TYPE.EDIT) {
        const targetIdx = store.notes.findIndex(note => note.id === ids);
        
        store.notes[targetIdx] = { ...store.notes[targetIdx], ...noteData };
        
        return store.notes[targetIdx];
    }

    if (operationType === OPERATION_TYPE.ADD) {
        const id = nanoid(7);
        store.notes.push({ id , ...noteData });

        return store.notes[store.notes.length-1];
    }

}