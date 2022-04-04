import refs from './refs';
import { STATUS } from './constants';

export default function changeTableCaption(targetToSwitch) {
    refs.tableCaption.textContent = (targetToSwitch === STATUS.ARCHIVED) ? 'Archive' : 'Active Notes'; 
}