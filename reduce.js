// Add all numbers in the array using forEach
const num = [1, 2, 3, 4, 5, 6, 7];

let result = 0
num.forEach((el) => {
    result += el
}, 0)
console.log(result);

// Calculate the sum of all numbers in the array using reduce

// accumulator, currentValue, currentIndex, array
const result1 = num.reduce((acc, el) =>{
    acc += el;
    return acc;
}, 0)
console.log(result1);

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

// Get the total mass of all characters
const massChar = characters.reduce((acc, el) =>{
    acc += Number(el.mass);
    return acc;
}, 0);
console.log("mass of all characters: " + massChar);

// Get the total height of all characters
const totalHeight = characters.reduce((acc, el) => {
    acc += Number(el.height);
    return acc
}, 0)
console.log("height of all characters: " + totalHeight);

// Get the total number of characters in all the character names
const allCharName = characters.reduce((acc, el) => {
    acc += el.name.split(" ").length;
    return acc;
}, 0)
console.log(allCharName);

// Get the total number of characters by eye color (hint. a map of eye color to count)
const eyeColorCounter = characters.reduce((acc, el) => {
    if(acc[el.eye_color]){
        acc[el.eye_color] ++;
    }else{
        acc[el.eye_color] = 1;
    }
    return acc;
}, {});
console.log(eyeColorCounter);

// Count how many times each character appears in the string (excluding spaces)
const str = 'Hello World';
let counter = {};

for(let i = 0; i < str.length; i++ ){
    if(str[i] !== ' '){
        if(counter[str[i]]){
            counter[str[i]] ++;
        }
        else{
            counter[str[i]] = 1;
        }
    }
};
console.log(counter);
