// Sort Method

const num = [1, 5, 15, 3, 4, 9, 2, 7];
const sortNum = num.sort();
console.log(sortNum);

const sortNumber = num.sort((a, b) => {
    return b - a;
})
console.log(sortNumber); 

// Problem Solving
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// Sort by name
const sortName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortName);

// Sort by mass
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);

// Sort by height
const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);

// Sort by gender
const sortGender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(sortGender);