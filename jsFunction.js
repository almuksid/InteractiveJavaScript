// two dimensional array

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);
console.log(arr[2][0]);
console.log(arr[2][1]);
console.log(arr[2][2]);

for (let row = 0; row < arr.length; row++) {
  for (let col = 0; col < arr[row].length; col++) {
    console.log(arr[row][col]);
  }
}

// for of function
for (let singlearr of arr) {
  console.log(singlearr);
}

for (let singlearr of arr) {
  for (el of singlearr) {
    // el - element
    console.log(el);
  }
}

const data1 = {
  name: "Al Muksid",
  age: 25,
  city: "Magura",
};

// for in function

for (let i in data1) {
  console.log(data1[i]);
}

function someFood() {
  console.log("Apple, Banana, Orange");
}

function foodList(food) {
  food;
}
foodList(someFood());
