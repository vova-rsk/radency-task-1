import store from '../../db';
import { STATUS, OPERATION_TYPE } from './constants';

export default function updateStoreData(operationType, notesIdList, noteData) { 
    const ids = [...notesIdList];

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

    // реализовать операции при редактировании
}