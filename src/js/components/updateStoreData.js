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
            console.log(note.status);

            const newStatus = note.status === STATUS.ACTIVE
                ? STATUS.ARCHIVED
                : STATUS.ACTIVE;
            console.log(newStatus);
            return { ...note, status: newStatus };
        });
    }
    console.log([...store.notes])
    // реализовать операции при редактировании
}