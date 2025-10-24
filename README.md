# 📘 JavaScript Array Methods

| No | Method Name    | Return Type  | Callback Parameters                            | Method Parameters |
|----|----------------|---------------|------------------------------------------------|-------------------|
| 1  | **Array Map**      | array         | element, index, arrayInstance                  | callbackFn        |
| 2  | **Array Filter**   | array         | element, index, arrayInstance                  | callbackFn        |
| 3  | **Array Every**    | boolean       | element, index, arrayInstance                  | callbackFn        |
| 4  | **Array Some**     | boolean       | element, index, arrayInstance                  | callbackFn        |
| 5  | **Array Sort**     | array         | elementA, elementB                             | compareFn         |
| 6  | **Array Reduce**   | single value  | accumulator, currentValue, currentIndex, array | callbackFn, initialValue |

---

## 🧩 Callback Parameter Explanation

| Parameter | Description |
|------------|-------------|
| **element** | Current item/value in the array. |
| **index** | The index (starting from 0) of the current element. |
| **arrayInstance** | The original array that the method was called on. |
| **elementA, elementB** | Used in `sort()` to compare two values. |
| **accumulator** | (Used in `reduce`) The accumulated value from previous iterations. |
| **currentValue** | (Used in `reduce`) The current element being processed. |
| **currentIndex** | (Used in `reduce`) The index of the current element. |
| **array** | (Used in `reduce`) The original array being reduced. |

---

## 🧠 Method Parameter Explanation

| Parameter | Description |
|------------|-------------|
| **callbackFn** | The function that runs for each element in the array. |
| **compareFn** | (Used in `sort`) Function that defines how two values are compared. |
| **initialValue** | (Used in `reduce`) The starting value for the accumulator. |

---

# 1. Array: Map Method

## Push Method
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

## Map: Single line

```js
const newArr2 = arr.map(el => el * 2);
console.log(newArr2);
```
---
## Map: Problem Solving
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

## Map: Get an array of all names
```js
const allNames = characters.map(el => el.name);
console.log(allNames);
```
---

## Map: Get an array of all heights
```js
const allHeight = characters.map(el => el.height);
console.log(allHeight);
```
---

## Map: Get an array of objects with just name and height properties

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

## Map: Get an array of all first names
```js
// const fName = characters.map(el => el.name.split(" ")[0]); // Single Line
const fName = characters.map(el => {
    return el.name.split(" ")[0];
});
console.log(fName);
```
---
---

## Split Method
```js
const name = "Al Muksid";
console.log(name.split(" "));
```

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

# 2. Array: Filter Method

**Filter Method**
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

## Filter: Problem Solving

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

## Filter: Get characters with mass greater than 100

```js
const gretherThen100 = characters.filter(el => el.mass > 100);
console.log(gretherThen100);
```
---

## Filter: Get characters with height less than 200

```js
const lessThen200 = characters.filter(function(el){
    return el.height < 200;
})
console.log(lessThen200);
```
---

## Filter: Get all male characters

```js
const maleChar = characters.filter((el) =>{
    return el.gender == 'male';
} )
console.log(maleChar);
```
---

## Filter: Get all female characters
```js
const femaleChar = characters.filter(el => el.gender !== 'male');
console.log(femaleChar);
```

---
---

# 3. Array: Every Method

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

## Every Method

```js
const isEven1 = arr.every(el => el % 2 == 0 );
console.log(isEven1);
```
---

## Every: Problem Solving

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

## Every: Does every character have blue eyes?
```js

const checkBlueEyes = characters.every(el => el.eye_color == 'blue');
console.log(checkBlueEyes);
```
---

## Every: Does every character have mass more than 40?

```js
const checkMassMoreThen40 = characters.every(el => el.mass > 40);
console.log(checkMassMoreThen40);
```
---

## Every: Is every character shorter than 200?

```js
const shortThen200 = characters.every(el => el.height < 200);
console.log(shortThen200);
```
---

## Every: Is every character male?

```js
const isMaleChar = characters.every(el => el.gender == 'male');
console.log(isMaleChar);
```
---
---

# 4. Array: Some Method

## Some: Is there at least one male character?
```js
const oneMaleChar = characters.some(el => el.gender == 'male');
console.log(oneMaleChar);
```
---

## Some: Is there at least one character with blue eyes?
```js
const oneBlueEyes = characters.some(el => el.eye_color == 'blue');
console.log(oneBlueEyes);
```
---

## Some: Is there at least one character taller than 200?

```js
const oneTaller200 = characters.some(el => el.height > 200);
console.log(oneTaller200);
```
---

## Some: Is there at least one character that has mass less than 50?
```js
const massLessThen50 = characters.some(el => el.mass < 50);
console.log(massLessThen50);
```
---
---

# 5. Array: Sort Method

```js
const num = [1, 5, 15, 3, 4, 9, 2, 7];
const sortNum = num.sort();
console.log(sortNum);

const sortNumber = num.sort((a, b) => {
    return b - a;
})
console.log(sortNumber); 
```
---

## Sort: Problem Solving

## Sort: Sort by name
```js
const sortName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortName);
```
## Sort: Sort by mass
```js
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);
```
## Sort: Sort by height
```js
const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);
```
## Sort: Sort by gender
```js
const sortGender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(sortGender);
```

---
---
# 6. Array: Reduce Method

## Add all numbers in the array using forEach
```js
const num = [1, 2, 3, 4, 5, 6, 7];

let result = 0
num.forEach((el) => {
    result += el
}, 0)
console.log(result);
```
---

## Calculate the sum of all numbers in the array using reduce

**accumulator, currentValue, currentIndex, array**
```js
// accumulator, currentValue, currentIndex, array
const result1 = num.reduce((acc, el) =>{
    acc += el;
    return acc;
}, 0)
console.log(result1);
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

## Get the total mass of all characters
```js
const massChar = characters.reduce((acc, el) =>{
    acc += Number(el.mass);
    return acc;
}, 0);
console.log("mass of all characters: " + massChar);
```
---

## Get the total height of all characters
```js
const totalHeight = characters.reduce((acc, el) => {
    acc += Number(el.height);
    return acc
}, 0)
console.log("height of all characters: " + totalHeight);
```
---

## Get the total number of characters in all the character names
```js
const allCharName = characters.reduce((acc, el) => {
    acc += el.name.split(" ").length;
    return acc;
}, 0)
console.log(allCharName);
```
---

## Get the total number of characters by eye color (hint. a map of eye color to count)
```js
const eyeColorCounter = characters.reduce((acc, el) => {
    if(acc[el.eye_color]){
        acc[el.eye_color] ++;
    }else{
        acc[el.eye_color] = 1;
    }
    return acc;
}, {});
console.log(eyeColorCounter);
```
---

## Count how many times each character appears in the string (excluding spaces)
```js
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
```
.
.
.
---
---

