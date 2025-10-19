// Challenge 2
// Guessing game
let num = prompt("Guess the number 1 to 10");
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

if(num == randomNum){
    console.log("You win");
}else{
    console.log("You wrong");
}