// Filter Array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = [];
for (el of num){
    if(el % 2 === 0){
        newNum.push(el);
    }
}
console.log(newNum);

// Array Method

const newNum1 = num.filter(el => {
    return el % 2 === 0;
})
console.log(newNum1);


// Sample Data

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

// Get characters with mass greater than 100

const gretherThen100 = characters.filter(el => el.mass > 100);
console.log(gretherThen100);

// Get characters with height less than 200

const lessThen200 = characters.filter(function(el){
    return el.height < 200;
})
console.log(lessThen200);

// Get all male characters

const maleChar = characters.filter((el) =>{
    return el.gender == 'male';
} )
console.log(maleChar);

// Get all female characters

const femaleChar = characters.filter(el => el.gender !== 'male');
console.log(femaleChar);