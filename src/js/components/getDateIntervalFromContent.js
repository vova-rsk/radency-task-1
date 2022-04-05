// const REGEX = new RegExp("^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$");
const REGEX = new RegExp("^([0-9]{2}).([0-9]{2}).([1-2][0-9]{3})$/g");

export default function getDateIntervalFromContent(text) { 
    const textq = 'asdassadass 23.12.2005 sssssdasdasdasdasdasdasd 11.02.1986 asdas';
    const result = textq.match(REGEX);
    console.log(text);
    console.log(result);
    return result ? [result[0], result[1]]: null;
}