export const STATUS = {
    ACTIVE: 'active',
    ARCHIVED: 'archived',
    DELETED: 'deleted'
};

export const OPERATION_TYPE = {
    REMOVE: 'remove',
    ARCHIVE: 'archive'
};

export const SVG_ICONS = {
    TASK: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M14.18 15q0.664 0 1.152 0.508t0.488 1.172-0.488 1.152-1.152 0.488-1.172-0.488-0.508-1.152 0.508-1.172 1.172-0.508zM0.82 1.68h2.734l0.781 1.641h12.344q0.352 0 0.586 0.254t0.234 0.605q0 0.039-0.117 0.391l-2.969 5.391q-0.469 0.859-1.445 0.859h-6.211l-0.742 1.367-0.039 0.117q0 0.195 0.195 0.195h9.648v1.68h-10q-0.664 0-1.152-0.508t-0.488-1.172q0-0.391 0.195-0.781l1.133-2.070-3.008-6.328h-1.68v-1.641zM5.82 15q0.664 0 1.172 0.508t0.508 1.172-0.508 1.152-1.172 0.488-1.152-0.488-0.488-1.152 0.488-1.172 1.152-0.508z"></path></svg>',
    RANDOM_THOUGHT: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M12.383 10.898q1.797-1.25 1.797-3.398 0-1.719-1.23-2.949t-2.949-1.23-2.949 1.23-1.23 2.949q0 0.898 0.527 1.875t1.27 1.523l0.703 0.508v1.914h3.359v-1.914zM10 1.68q2.422 0 4.121 1.699t1.699 4.121q0 3.047-2.5 4.766v1.914q0 0.352-0.234 0.586t-0.586 0.234h-5q-0.352 0-0.586-0.234t-0.234-0.586v-1.914q-2.5-1.719-2.5-4.766 0-2.422 1.699-4.121t4.121-1.699zM7.5 17.5v-0.82h5v0.82q0 0.352-0.234 0.586t-0.586 0.234h-3.359q-0.352 0-0.586-0.234t-0.234-0.586z"></path></svg>',
    IDEA: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10.82 7.148q-0.469 0-0.82 0.352t-0.352 0.82q0 0.508 0.352 0.859t0.82 0.352q0.508 0 0.859-0.352t0.352-0.859q0-0.469-0.352-0.82t-0.859-0.352zM10.82 2.5q-1.172 0-2.188 0.43t-1.816 1.191-1.27 1.758-0.547 2.168l-1.602 2.109q-0.156 0.234-0.039 0.449t0.391 0.215h1.25v2.5q0 0.703 0.488 1.191t1.191 0.488h0.82v2.5h5.82v-3.906q1.484-0.703 2.422-2.109t0.938-3.164q0-1.211-0.469-2.266t-1.27-1.855-1.855-1.25-2.266-0.449zM13.32 8.32v0.352l0.703 0.547q0.078 0.078 0.039 0.195l-0.664 1.172q-0.078 0.117-0.234 0.078l-0.82-0.352q-0.234 0.195-0.547 0.313l-0.117 0.898q-0.039 0.156-0.195 0.156h-1.328q-0.117 0-0.156-0.156l-0.117-0.898q-0.313-0.117-0.586-0.313l-0.82 0.352q-0.117 0.039-0.195-0.078l-0.664-1.172q-0.078-0.117 0.039-0.195l0.703-0.547q0-0.078-0.020-0.176t-0.020-0.176 0.020-0.156 0.020-0.156l-0.703-0.547q-0.117-0.078-0.039-0.234l0.664-1.133q0.078-0.117 0.195-0.078l0.859 0.352q0.273-0.234 0.547-0.352l0.117-0.859q0.039-0.156 0.156-0.156h1.328q0.156 0 0.195 0.156l0.117 0.859q0.273 0.117 0.547 0.352l0.82-0.352q0.156-0.039 0.234 0.078l0.664 1.133q0.078 0.156-0.039 0.234l-0.742 0.547q0.039 0.117 0.039 0.313z"></path></svg>',
    QUOTE: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M11.68 14.18l1.641-3.359h-2.5v-5h5v5l-1.641 3.359h-2.5zM5 14.18l1.68-3.359h-2.5v-5h5v5l-1.68 3.359h-2.5z"></path></svg>',
    BOX_ADD: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.25 1.25h-12.5l-3.75 3.75v13.125c0 0.345 0.28 0.625 0.625 0.625h18.75c0.345 0 0.625-0.28 0.625-0.625v-13.125l-3.75-3.75zM10 16.25l-6.25-5h3.75v-3.75h5v3.75h3.75l-6.25 5zM3.018 3.75l1.25-1.25h11.464l1.25 1.25h-13.964z"></path></svg>',
    BOX_REMOVE:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.25 1.25h-12.5l-3.75 3.75v13.125c0 0.345 0.28 0.625 0.625 0.625h18.75c0.345 0 0.625-0.28 0.625-0.625v-13.125l-3.75-3.75zM12.5 12.5v3.75h-5v-3.75h-3.75l6.25-5 6.25 5h-3.75zM3.018 3.75l1.25-1.25h11.464l1.25 1.25h-13.964z"></path></svg>',
    EDIT: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path></svg>',
    DELETE: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path d="M15.82 3.32v1.68h-11.641v-1.68h2.891l0.859-0.82h4.141l0.859 0.82h2.891zM5 15.82v-10h10v10q0 0.664-0.508 1.172t-1.172 0.508h-6.641q-0.664 0-1.172-0.508t-0.508-1.172z"></path></svg>',
    DEFAULT:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12.984 14.016v-4.031h-1.969v4.031h1.969zM12.984 18v-2.016h-1.969v2.016h1.969zM0.984 21l11.016-18.984 11.016 18.984h-22.031z"></path></svg>'
};

export const CATEGORIES = [
    {
        id: '1',
        name: 'Task',
        icon: SVG_ICONS.TASK
    },
    
    {
        id:'2',
        name: 'Random Thought',
        icon: SVG_ICONS.RANDOM_THOUGHT
    },
    {
        id: '3',    
        name: 'Idea',
        icon: SVG_ICONS.IDEA
    },
        {
        id: '4',    
        name: 'Quote',
        icon: SVG_ICONS.QUOTE
    }
];