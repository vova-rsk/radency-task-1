import {CATEGORIES, STATUS} from './components/constants';
import refs from './components/refs'

const notes = [
    {
        id:"1",
        name: "Shopping list",
        created: "April 20, 2021",
        category: "Task",
        content: "Tomatoes, bread",
        dates: null,
        status:"active",
    },
    {
        id:"2",
        name: "The theory of evolution",
        created: "April 27, 2021",
        category: "Random Thought",
        content: "The evolution of the civilazation",
        dates: null,
        status:"active",
    },
    {   
        id:"3",
        name: "New Feature",
        created: "May 05, 2021",
        category: "Idea",
        content: "Implement new amaizing feature",
        dates: ['03/05/2021','05/05/2021'],
        status:"active",
    },
    {
        id:"4",
        name: "William Gaddis",
        created: "May 07, 2021",
        category: "Quote",
        content: "Power  doesn't corrupt people, people corrupt power",
        dates: null,
        status:"active",
    },
    {
        id:"5",
        name: "Books",
        created: "May 15, 2021",
        category: "Task",
        content: "The Lean Startup",
        dates: null,
        status:"active",
    },
    {   
        id:"6",
        name: "Practice",
        created: "February 11, 2021",
        category: "Idea",
        content: "get practice with Node.js",
        dates: ["3/15/2022", "4/10/2022"],
        status:"active",
    },
        {   
        id:"7",
        name: "Holidays",
        created: "March 3, 2022",
        category: "Random Thought",
        content: "To meet friends",
        dates: null,
        status:"active",
    }    
];