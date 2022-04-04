import { CATEGORIES } from "./constants";

export default function getSummary(notes) {
    const initValue = CATEGORIES.map(({ id, name, icon }) => (
        {
            id,
            category: name,
            icon,
            active: 0,
            archived: 0
        }
    ));

    return notes.reduce((summary, { category, status }) => {
        const entity = summary.find(item => item.category === category);

        entity[status] += 1;

        return summary;
    }, initValue);
}