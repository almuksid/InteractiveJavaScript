// Array Evenly Method

const arr = [2, 4, 6, 8 ];
let isEven;
for(el in arr){
    if(el % 2 !== 0){
        isEven = true;
    }
    else{
        isEven = false;
    }
}
console.log(isEven)

// Array every method

const isEven1 = arr.every(el => el % 2 == 0 );
console.log(isEven1);

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
// Does every character have blue eyes?
const checkBlueEyes = characters.every(el => el.eye_color == 'blue');
console.log(checkBlueEyes);

// Does every character have mass more than 40?
const checkMassMoreThen40 = characters.every(el => el.mass > 40);
console.log(checkMassMoreThen40);

// Is every character shorter than 200?
const shortThen200 = characters.every(el => el.height < 200);
console.log(shortThen200);

// Is every character male?
const isMaleChar = characters.every(el => el.gender == 'male');
console.log(isMaleChar);


// Array Some Method

// Is there at least one male character?
const oneMaleChar = characters.some(el => el.gender == 'male');
console.log(oneMaleChar);

// Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(el => el.eye_color == 'blue');
console.log(oneBlueEyes);

// Is there at least one character taller than 200?
const oneTaller200 = characters.some(el => el.height > 200);
console.log(oneTaller200);

// Is there at least one character that has mass less than 50?
const massLessThen50 = characters.some(el => el.mass < 50);
console.log(massLessThen50);