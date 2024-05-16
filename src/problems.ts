import description1 from './content/1.md';
import description2 from './content/2.md';
import description3 from './content/3.md';
import description4 from './content/4.md';
import description5 from './content/5.md';
import description6 from './content/6.md';
import description7 from './content/7.md';
import description8 from './content/8.md';
import description9 from './content/9.md';

const descriptions: { [key: number]: string } = {
    1: description1,
    2: description2,
    3: description3,
    4: description4,
    5: description5,
    6: description6,
    7: description7,
    8: description8,
    9: description9
};


export const problems = 
    [
        {
            "id": 1,
            "icon": "01_shadow",
            "title": "Problem 1",
            "isProblem": true,
        },
        {
            "id": 2,
            "icon": "02_shadow",
            "title": "Problem 2",
            "isProblem": true,
        },
        {
            "id": 3,
            "icon": "03_shadow",            
            "title": "Problem 3",
            "isProblem": true,
        },
        {
            "id": 4,
            "icon": "04_shadow",            
            "title": "Problem 4",
            "isProblem": true,
        },
        {
            "id": 5,
            "icon": "05_shadow",            
            "title": "Problem 5",
            "isProblem": true,
        },
        {
            "id": 6,
            "icon": "06_shadow",            
            "title": "Problem 6",
            "isProblem": true,
        },
        {
            "id": 7,
            "icon": "07_shadow",            
            "title": "Problem 7",
            "isProblem": true,
        },
        {
            "id": 8,
            "icon": "08_shadow",            
            "title": "Problem 8",
            "isProblem": true,
        },
        {
            "id": 9,
            "icon": "09_shadow",            
            "title": "Problem 9",
            "isProblem": true,
        }
    ].map(problem => {
        return { ...problem, description: descriptions[problem.id] };
    });

