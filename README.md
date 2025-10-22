# JavaScript Array Map Examples

## Push method
```js
const arr = [1, 2, 3];
const newArra = [];
for(el of arr){
    newArra.push(el);
}
console.log(newArra);
```

---

**Array Map**

```js

const newArr = arr.map(function(el){
    return el;
})
console.log(newArr);

---

const newArr1 = arr.map((el) => {
    return el;
})
console.log(newArr1);
```
---

## Single line

```js
const newArr2 = arr.map(el => el * 2);
console.log(newArr2);
```
---
## Problem Solving
```js
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
```
---

## Get an array of all names
```js
const allNames = characters.map(el => el.name);
console.log(allNames);
```
---

## Get an array of all heights
```js
const allHeight = characters.map(el => el.height);
console.log(allHeight);
```
---

## Get an array of objects with just name and height properties

```js
const nameHeight = characters.map(el => {
    return{
        name: el.name,
        height : el.height
    }
});
console.log(nameHeight);
```
---

## Get an array of all first names
```js
// const fName = characters.map(el => el.name.split(" ")[0]); // Single Line
const fName = characters.map(el => {
    return el.name.split(" ")[0];
});
console.log(fName);
```
---
---

# Split Method
```js
const name = "Al Muksid";
console.log(name.split(" "));
```
---


## for each function 
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (el, ind) { //method
  console.log(el, ind);
});
```
### Desc:create for each function - Function call as a parameter - then create new prametter(el) inside function- # This function is treated as a method. 
```js
arr.forEach((el, ind) => console.log(el, ind)); // # el- element[arr value] # ind- index[index number]
```
---
---

# Filter Array

```js

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = [];
for (el of num){
    if(el % 2 === 0){
        newNum.push(el);
    }
}
console.log(newNum);
```

---

## Array Method

```js
const newNum1 = num.filter(el => {
    return el % 2 === 0;
})
console.log(newNum1);
```
---

## Problem Solving

```js
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

```
---

## Get characters with mass greater than 100

```js
const gretherThen100 = characters.filter(el => el.mass > 100);
console.log(gretherThen100);
```
---

## Get characters with height less than 200

```js
const lessThen200 = characters.filter(function(el){
    return el.height < 200;
})
console.log(lessThen200);
```
---

## Get all male characters

```js
const maleChar = characters.filter((el) =>{
    return el.gender == 'male';
} )
console.log(maleChar);
```
---

## Get all female characters
```js
const femaleChar = characters.filter(el => el.gender !== 'male');
console.log(femaleChar);
```

---
---

# Array Evenly Method

```js
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
console.log(isEven);
```
---

## Array every method

```js
const isEven1 = arr.every(el => el % 2 == 0 );
console.log(isEven1);
```
---

## Problem Solving

```js
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
```
---

## Does every character have blue eyes?
```js

const checkBlueEyes = characters.every(el => el.eye_color == 'blue');
console.log(checkBlueEyes);
```
---

## Does every character have mass more than 40?

```js
const checkMassMoreThen40 = characters.every(el => el.mass > 40);
console.log(checkMassMoreThen40);
```
---

## Is every character shorter than 200?

```js
const shortThen200 = characters.every(el => el.height < 200);
console.log(shortThen200);
```
---

## Is every character male?

```js
const isMaleChar = characters.every(el => el.gender == 'male');
console.log(isMaleChar);
```
---
---

# Array Some Method

## Is there at least one male character?
```js
const oneMaleChar = characters.some(el => el.gender == 'male');
console.log(oneMaleChar);
```
---

## Is there at least one character with blue eyes?
```js
const oneBlueEyes = characters.some(el => el.eye_color == 'blue');
console.log(oneBlueEyes);
```
---

// Is there at least one character taller than 200?

```js
const oneTaller200 = characters.some(el => el.height > 200);
console.log(oneTaller200);
```
---

// Is there at least one character that has mass less than 50?
```js
const massLessThen50 = characters.some(el => el.mass < 50);
console.log(massLessThen50);
```
---
---