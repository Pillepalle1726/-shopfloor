import description1 from './content/1.md?raw';
import description2 from './content/2.md';
import description3 from './content/3.md';
import description4 from './content/4.md';
import description5 from './content/5.md';
import description6 from './content/6.md';
import description7 from './content/7.md';
import description8 from './content/8.md';
import description9 from './content/9.md';




export const problems = 
    [
        {
            "id": 1,
            "icon": "Peter_Prob_1.png",
            "title": "Problem 1",
            "isProblem": true,
        },
        {
            "id": 2,
            "icon": "Peter_Prob_2.png",
            "title": "Problem 2",
            "isProblem": true,
        },
        {
            "id": 3,
            "icon": "Peter_Prob_3.png",            
            "title": "Problem 3",
            "isProblem": true,
        },
        {
            "id": 4,
            "icon": "Peter_Prob_4.png",            
            "title": "Problem 4",
            "isProblem": true,
        },
        {
            "id": 5,
            "icon": "Peter_Prob_5.png",            
            "title": "Problem 5",
            "isProblem": true,
        },
        {
            "id": 6,
            "icon": "Peter_Prob_6.png",            
            "title": "Problem 6",
            "isProblem": true,
        },
        {
            "id": 7,
            "icon": "Peter_Prob_7.png",            
            "title": "Problem 7",
            "isProblem": true,
        },
        {
            "id": 8,
            "icon": "Peter_Prob_8.png",            
            "title": "Problem 8",
            "isProblem": true,
        },
        {
            "id": 9,
            "icon": "Peter_Prob_9.png",            
            "title": "Problem 9",
            "isProblem": true,
        }
    ].map(problem => {
        const descriptions = {1: description1, 2: description2, 3: description3, 4: description4, 5: description5, 6: description6, 7: description7, 8: description8, 9: description9};
        return { ...problem, description: descriptions[problem.id] };
    });

